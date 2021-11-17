import React, { useContext, useState } from 'react'
import DateComponent from './Date'
import '../styles/datelist.css'
import { MainContext } from './Main'
import { nanoid } from 'nanoid'
import { getWeekDay } from '../utils/getWeekDay'

const DateList = () => {
  const { dates, setDates } = useContext(MainContext)

  const [currentMonth, setCurrentMonth] = useState(1)

  const scrollHandler = (event) => {
    let percent =
      (100 * event.target.scrollLeft) /
      (event.target.scrollWidth - event.target.clientWidth)
    if (percent >= 90) {
      let date = new Date(Date.now())
      let startDate = new Date(date.setMonth(date.getMonth() + currentMonth))
      let newDate = new Date(date.setMonth(date.getMonth() + 1))
      let arr = []
      for (
        let i = new Date(startDate);
        i <= newDate;
        i.setDate(i.getDate() + 1)
      ) {
        arr.push({
          day: getWeekDay(new Date(i).getDay()),
          date: new Date(i).getDate(),
          year: new Date(i).getFullYear(),
          month: new Date(i).getMonth(),
          id: nanoid(),
        })
      }
      setDates(dates.concat(arr))
      setCurrentMonth(currentMonth + 1)
    }
  }

  return (
    <div className={'date-list-wrapper'} onScroll={scrollHandler}>
      {dates.map((obj) => (
        <DateComponent
          key={obj.id}
          date={obj.date}
          day={obj.day}
          id={obj.id}
          selected={obj.selected}
        />
      ))}
    </div>
  )
}

export default DateList
