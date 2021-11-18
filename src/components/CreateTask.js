import React, { useContext } from 'react'
import '../styles/createTask.css'
import { Context } from '../App'
import { MainContext } from './Main'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'

const CreateTask = () => {
  const { user } = useContext(Context)

  const { data, setData } = useContext(MainContext)

  const tasksCollectionRef = collection(db, 'todo')

  const createTask = async (object) => {
    await addDoc(tasksCollectionRef, { ...object })
  }

  const getTasks = async () => {
    const data = await getDocs(tasksCollectionRef)
    let result = []
    data.docs.forEach((item) => {
      if (item.data().userId === currentUser.id) {
        result.push({ ...item.data(), id: item.id })
      }
    })
    result.sort((a, b) => {
      return new Date(a.time) - new Date(b.time)
    })
    setData((data) => ({...data, tasks: [...result]}))
  }

  const [currentUser] = user

  const clickHandler = () => {
    const sendObject = {
      userId: currentUser.id,
      date: data.selectedDate.date,
      day: data.selectedDate.day,
      month: data.selectedDate.month,
      year: data.selectedDate.year,
      task: '',
      status: 'in progress',
      time: Date.now(),
    }
    getTasks()
    createTask(sendObject)
  }

  return (
    <button className={'create-task-button'} onClick={clickHandler}>
      + Add a new task
    </button>
  )
}

export default CreateTask
