import React, { useEffect, useState } from 'react'
import DateList from './DateList'
import '../styles/main.css'
import { nanoid } from 'nanoid'
import ToDo from './ToDo'

export const DateContext = React.createContext(null)

const Main = () => {
  const [dates, setDates] = useState([])

  const [selectedDate, setSelectedDate] = useState({})

  const getWeekDay = (value) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
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
        id: nanoid(),
      })
    }
    setSelectedDate(arr[0])
    arr[0].selected = true
    setDates([...arr])
  }, [])

  return (
    <DateContext.Provider
      value={{
        dates,
        setDates,
        selectedDate,
        setSelectedDate,
      }}
    >
      <div className={'main-wrapper'}>
        {dates.length !== 0 && <DateList dates={dates} setDates={setDates} />}
        <ToDo />
      </div>
    </DateContext.Provider>
  )
}

export default Main
