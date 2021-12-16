import React, { useContext } from 'react'
import './CreateTask.styles.css'
import { Context } from '../App/App'
import { MainContext } from '../Main/Main'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebase'

const CreateTask = () => {
  const { user } = useContext(Context)
  const { data, setData } = useContext(MainContext)
  const tasksCollectionRef = collection(db, 'todo')
  const [currentUser] = user

  const createTask = async (object) => {
    await addDoc(tasksCollectionRef, { ...object })
  }

  const getTasks = async () => {
    const data = await getDocs(tasksCollectionRef)
    let result = data.docs.reduce((arr, item) => {
      if (item.data().userId === currentUser.id) {
        arr.push({ ...item.data(), id: item.id })
      }
      return arr
    }, [])

    // result.sort((a, b) => {
    //   return new Date(a.time) - new Date(b.time)
    // })
    setData((data) => ({
      ...data,
      tasks: [
        ...result.sort((a, b) => {
          return new Date(a.time) - new Date(b.time)
        }),
      ],
    }))
  }

  const addNewTaskButtonClickHandler = () => {
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
    <button
      className={'create-task-button'}
      onClick={addNewTaskButtonClickHandler}
    >
      + Add a new task
    </button>
  )
}

export default CreateTask
