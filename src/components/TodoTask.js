import React, { useContext, useState } from 'react'
import '../styles/todoTask.css'
import cross from '../assets/cross.png'
import edit from '../assets/edit.png'
import {TaskContext} from "./ToDo";
import { deleteDoc, doc } from '@firebase/firestore';
import { db } from '../utils/firebase';

const TodoTask = ({ task, id }) => {
  const {tasks, setTasks} = useContext(TaskContext)

  const [change, setChange] = useState(false)

  const [currentTask, setCurrentTask] = useState(task)

  const changeHandler = (event) => {
    setCurrentTask(event.target.value)
  }

  const clickHandler = () => {
    setChange(change ? false : true)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setChange(change ? false : true)
  }

  const removeHandler = async () => {
    const taskDoc = doc(db, 'todo', id)
    await deleteDoc(taskDoc)
    const newArr = tasks.filter((item) => item.id !== id)
    setTasks([...newArr])
  }

  return (
    <div className={'todo-task__wrapper'}>
      <input className={'todo-task__checkbox'} type={'checkbox'} />
      <form className={'todo-task__form'} onSubmit={submitHandler}>
        <input
          className={'todo-task__text'}
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
