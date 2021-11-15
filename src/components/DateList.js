import React from 'react'
import Date from './Date'
import '../styles/datelist.css'

const DateList = (props) => {
  return (
    <div className={'date-list-wrapper'}>
      {props.dates.map((obj) => (
        <Date
          key={`${obj.day}${obj.date}${obj.year}`}
          date={obj.date}
          day={obj.day}
        />
      ))}
    </div>
  )
}

export default DateList
