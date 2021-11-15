import React, { useContext, useEffect, useState } from 'react'
import TodoTask from './TodoTask'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { DateContext } from './Main'
import { Context } from '../App'

const TodoList = () => {
  const [tasks, setTasks] = useState([])

  const { user } = useContext(Context)

  const [currentUser] = user

  const { selectedDate } = useContext(DateContext)

  const tasksCollectionRef = collection(db, 'todo')

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollectionRef)
      let result = []
      data.docs.forEach((item) => {
        console.log(item.data(), selectedDate, currentUser)
        if (
          item.data().date === selectedDate.date &&
          item.data().day === selectedDate.day &&
          item.data().year === selectedDate.year &&
          item.data().userId === currentUser.id
        ) {
          result.push({ ...item.data(), id: item.id })
        }
      })
      setTasks([...result])
    }
    getTasks()
  }, [selectedDate])

  console.log(tasks)
  return (
    <div>
      {tasks &&
        tasks.map((item) => <TodoTask key={item.id} task={item.task} />)}
    </div>
  )
}

export default TodoList
