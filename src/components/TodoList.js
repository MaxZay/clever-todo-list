import React, { useContext } from 'react'
import TodoTask from './TodoTask'
import { MainContext } from './Main'
import '../styles/todoList.css'

const TodoList = () => {
  const { tasks, selectedDate } = useContext(MainContext)

  return (
    <div className={'todo-list__wrapper'}>
      {tasks &&
        tasks
          .filter(
            (item) =>
              item.day === selectedDate.day &&
              item.date === selectedDate.date &&
              item.year === selectedDate.year &&
              item.month === selectedDate.month
          )
          .map((item) => (
            <TodoTask
              key={item.id}
              task={item.task}
              id={item.id}
              status={item.status}
            />
          ))}
    </div>
  )
}

export default TodoList
