import React, { useContext } from 'react'
import TodoTask from './TodoTask'
import { DateContext } from './Main'
import '../styles/todoList.css'
import {TaskContext} from "./ToDo";

const TodoList = () => {
  const {tasks} = useContext(TaskContext)

  const { selectedDate } = useContext(DateContext)

  return (
    <div className={'todo-list__wrapper'}>
      {tasks &&
        tasks.filter((item) => item.day === selectedDate.day
          && item.date === selectedDate.date
          && item.year === selectedDate.year).map((item) => <TodoTask key={item.id} task={item.task} id={item.id} />)}
    </div>
  )
}

export default TodoList
