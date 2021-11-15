import React, {useState} from 'react'
import '../styles/todoTask.css'

const TodoTask = ({ task }) => {
  const [change, setChange] = useState(false)

  const [currentTask, setCurrentTask] = useState(task)

  const clickHandler = () => {
    setChange(change === true ? false : true)
  }

  const changeHandler = (event) => {
    setCurrentTask(event.target.value)
  }

  return <div className={'todo-task__wrapper'}>
    <input className={'todo-task__checkbox'} type={'checkbox'}/>
    <input className={'todo-task__text'} onChange={changeHandler} value={currentTask} disabled={change} />
  </div>
}

export default TodoTask
