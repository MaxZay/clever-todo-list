import React from 'react'
import './ToDo.styles.css'
import TodoList from '../TodoList/TodoList'
import CreateTask from '../CreateTask/CreateTask'

const ToDo = () => {
  return (
    <div className={'todo'}>
      <TodoList />
      <CreateTask />
    </div>
  )
}

export default ToDo
