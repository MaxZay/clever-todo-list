import React from 'react'
import '../styles/todo.css'
import TodoList from './TodoList'
import CreateTask from './CreateTask'

const ToDo = () => {
  return (
    <div className={'todo'}>
      <TodoList />
      <CreateTask />
    </div>
  )
}

export default ToDo
