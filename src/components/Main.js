import React, { useEffect, useState } from 'react'
import DateList from './DateList'
import '../styles/main.css'

const Main = () => {
  const [dates, setDates] = useState([])

  const getWeekDay = (value) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return days[value]
  }

  useEffect(() => {
    let date = new Date(Date.now())
    let newDate = new Date(date.setMonth(date.getMonth() + 1))
    let arr = []
    for (
      let i = new Date(Date.now());
      i <= newDate;
      i.setDate(i.getDate() + 1)
    ) {
      arr.push({
        day: getWeekDay(new Date(i).getDay()),
        date: new Date(i).getDate(),
        year: new Date(i).getFullYear(),
      })
    }
    setDates([...arr])
  }, [])

  return (
    <div className={'main-wrapper'}>
      {dates.length !== 0 && <DateList dates={dates} />}
    </div>
  )
}

export default Main
