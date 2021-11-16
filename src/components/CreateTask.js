import React, { useContext } from 'react'
import '../styles/createTask.css'
import { Context } from '../App'
import { DateContext } from './Main'
import { nanoid } from 'nanoid'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../utils/firebase'
import {TaskContext} from "./ToDo";

const CreateTask = () => {
  const { user } = useContext(Context)

  const {tasks, setTasks} = useContext(TaskContext)

  const { selectedDate } = useContext(DateContext)

  const tasksCollectionRef = collection(db, 'todo')

  const createTask = async (object) => {
    await addDoc(tasksCollectionRef, { ...object })
  }

  const [currentUser] = user

  const clickHandler = () => {
    const sendObject = {
      userId: currentUser.id,
      date: selectedDate.date,
      day: selectedDate.day,
      year: selectedDate.year,
      task: '',
      status: 'in progress',
    }
    createTask(sendObject)
    setTasks([...tasks, sendObject])
  }

  return (
    <button className={'create-task-button'} onClick={clickHandler}>
      + Add a new task
    </button>
  )
}

export default CreateTask
