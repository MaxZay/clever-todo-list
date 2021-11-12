import React from 'react'
import '../styles/date.css'

const Date = (props) => {
  return (
    <div className={'date-block'}>
      <div
        className={
          props.selected ? 'date-block__info-selected' : 'date-block__info'
        }
      >
        <p
          className={
            props.selected ? 'date-block__text-selected' : 'date-block__text'
          }
        >
          {props.day}
        </p>
        <p
          className={
            props.selected
              ? 'date-block__text-selected'
              : 'date-block__text date-block__date'
          }
        >
          {props.date}
        </p>
      </div>
      <div>dots</div>
    </div>
  )
}

export default Date
