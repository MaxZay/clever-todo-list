import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/todoTask.css'
import cross from '../assets/cross.png'
import edit from '../assets/edit.png'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../utils/firebase'
import { MainContext } from './Main'
import { Context } from '../App'

const TodoTask = ({ task, id, status }) => {
  const { tasks, setTasks } = useContext(MainContext)

  const { user } = useContext(Context)

  const [currentUser] = user

  const taskDoc = doc(db, 'todo', id)

  const [change, setChange] = useState(false)

  const [currentTask, setCurrentTask] = useState(task)

  const [checked, setChecked] = useState(status === 'done')

  const inputEl = useRef(null)

  const tasksCollectionRef = collection(db, 'todo')

  const changeHandler = (event) => {
    setCurrentTask(event.target.value)
  }

  const clickHandler = () => {
    setChange(!change)
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    setChange(!change)
    const newTask = tasks.find((elem) => elem.id === id)
    if (newTask) {
      newTask.task = currentTask
      await updateDoc(taskDoc, newTask)
    }
  }

  const removeHandler = async () => {
    await deleteDoc(taskDoc)
    const newArr = tasks.filter((item) => item.id !== id)
    setTasks([...newArr])
  }

  const updateTask = async (newTask) => {
    await updateDoc(taskDoc, newTask)
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
    setTasks([...result])
  }

  const checkHandler = (event) => {
    const newTask = tasks.find((elem) => elem.id === id)
    if (newTask) {
      newTask.status = event.target.checked ? 'done' : 'in progress'
      updateTask(newTask)
      getTasks()
    }
    setChecked(!checked)
  }

  useEffect(() => {
    if (change) inputEl.current.focus()
  }, [change])

  return (
    <div className={'todo-task__wrapper'}>
      <input
        className={'todo-task__checkbox'}
        type={'checkbox'}
        checked={checked}
        onChange={checkHandler}
      />
      <form className={'todo-task__form'} onSubmit={submitHandler}>
        <input
          ref={inputEl}
          className={
            checked
              ? 'todo-task__text-checked todo-task__text'
              : 'todo-task__text'
          }
          onChange={changeHandler}
          value={currentTask}
          disabled={!change}
        />
      </form>
      <img
        className={'todo-task__icon'}
        src={edit}
        onClick={clickHandler}
        alt={'edit task'}
      />
      <img
        className={'todo-task__icon'}
        src={cross}
        alt={'remove task'}
        onClick={removeHandler}
      />
    </div>
  )
}

export default TodoTask
