import React, { useContext } from 'react'
import '../styles/date.css'
import { MainContext } from './Main'

const DateComponent = ({ selected, day, date, id, dark, light }) => {
  const { dates, setDates, setSelectedDate } = useContext(MainContext)

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
    <div className={'date__wrapper'}>
      <div className={'date-block'} onClick={clickHandler}>
        <div
          className={
            selected ? 'date-block__info-selected' : 'date-block__info'
          }
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
      <div className={'dots__wrapper'}>
        {dark && <div className={'dot dot__dark '}></div>}
        {light && <div className={'dot dot__light'}></div>}
      </div>
    </div>
  )
}

export default DateComponent
