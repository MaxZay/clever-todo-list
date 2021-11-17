import React, { useContext } from 'react'
import '../styles/createTask.css'
import { Context } from '../App'
import { DateContext } from './Main'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { TaskContext } from './ToDo'

const CreateTask = () => {
  const { user } = useContext(Context)

  const { setTasks } = useContext(TaskContext)

  const { selectedDate } = useContext(DateContext)

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
    setTasks([...result])
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
    }
    createTask(sendObject)
    getTasks()
  }

  return (
    <button className={'create-task-button'} onClick={clickHandler}>
      + Add a new task
    </button>
  )
}

export default CreateTask
