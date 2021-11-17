import React, { createContext, useContext, useEffect, useState } from 'react'
import '../styles/todo.css'
import TodoList from './TodoList'
import CreateTask from './CreateTask'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { Context } from '../App'

export const TaskContext = createContext(null)

const ToDo = () => {
  const [tasks, setTasks] = useState([])

  const tasksCollectionRef = collection(db, 'todo')

  const { user } = useContext(Context)

  const [currentUser] = user

  useEffect(() => {
    const getTasks = async () => {
      console.log('test')
      const data = await getDocs(tasksCollectionRef)
      let result = []
      data.docs.forEach((item) => {
        if (item.data().userId === currentUser.id) {
          result.push({ ...item.data(), id: item.id })
        }
      })
      setTasks([...result])
    }
    getTasks()
  }, [])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      <div className={'todo'}>
        <TodoList />
        <CreateTask />
      </div>
    </TaskContext.Provider>
  )
}

export default ToDo
