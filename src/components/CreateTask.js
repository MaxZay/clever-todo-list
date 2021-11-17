import React, { useContext } from 'react'
import '../styles/createTask.css'
import { Context } from '../App'
import { MainContext } from './Main'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'

const CreateTask = () => {
  const { user } = useContext(Context)

  const { selectedDate } = useContext(MainContext)

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
    })([...result])
  }

  const [currentUser] = user

  const clickHandler = () => {
    const sendObject = {
      userId: currentUser.id,
      date: selectedDate.date,
      day: selectedDate.day,
      month: selectedDate.month,
      year: selectedDate.year,
      task: '',
      status: 'in progress',
      time: Date.now(),
    }
    createTask(sendObject)
    getTasks()
  }

  console.log('rerender')

  return (
    <button className={'create-task-button'} onClick={clickHandler}>
      + Add a new task
    </button>
  )
}

export default CreateTask
