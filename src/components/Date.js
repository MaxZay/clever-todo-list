import React, { useContext } from 'react'
import '../styles/date.css'
import { DateContext } from './Main'

const DateComponent = ({ selected, day, date, id }) => {
  const { dates, setDates, setSelectedDate } = useContext(DateContext)

  const clickHandler = () => {
    let arr = [...dates]
    arr.map((item) => {
      if (item.id === id) {
        setSelectedDate({ ...item })
        item.selected = true
      } else if (item.selected) {
        delete item.selected
      }
      return item
    })
    setDates(arr)
  }

  return (
    <div className={'date-block'} onClick={clickHandler}>
      <div
        className={selected ? 'date-block__info-selected' : 'date-block__info'}
      >
        <p
          className={
            selected ? 'date-block__text-selected' : 'date-block__text'
          }
        >
          {day}
        </p>
        <p
          className={
            selected
              ? 'date-block__text-selected'
              : 'date-block__text date-block__date'
          }
        >
          {date}
        </p>
      </div>
    </div>
  )
}

export default DateComponent
