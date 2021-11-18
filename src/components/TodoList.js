import React, { useContext } from 'react'
import TodoTask from './TodoTask'
import { MainContext } from './Main'
import '../styles/todoList.css'

const TodoList = () => {
  const { data } = useContext(MainContext)

  return (
    <div className={'todo-list__wrapper'}>
      {data.tasks &&
        data.tasks
          .filter(
            (item) =>
              item.day === data.selectedDate.day &&
              item.date === data.selectedDate.date &&
              item.year === data.selectedDate.year &&
              item.month === data.selectedDate.month
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
