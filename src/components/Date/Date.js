import React, { useContext } from 'react'
import './Date.styles.css'
import { MainContext } from '../Main/Main'

const DateComponent = ({ selected, day, date, id, dark, light }) => {
  const { data, setData } = useContext(MainContext)

  const chooseCurrentDateClickHandler = () => {
    let arr = [...data.dates]
    arr.forEach((item) => {
      if (item.id === id) {
        item.selected = true
        setData((data) => ({ ...data, selectedDate: { ...item } }))
      } else if (item.selected) {
        delete item.selected
      }
      return item
    })
    setData((data) => ({ ...data, setData: [...arr] }))
  }

  return (
    <div className={'date__wrapper'}>
      <div className={'date-block'} onClick={chooseCurrentDateClickHandler}>
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
        {dark && <div className={'dot dot__dark '} />}
        {light && <div className={'dot dot__light'} />}
      </div>
    </div>
  )
}

export default DateComponent
