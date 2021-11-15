import React, { useContext } from 'react'
import Date from './Date'
import '../styles/datelist.css'
import { DateContext } from './Main'

const DateList = () => {
  const { dates } = useContext(DateContext)

  return (
    <div className={'date-list-wrapper'}>
      {dates.map((obj) => (
        <Date
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
