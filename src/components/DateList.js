import React, { useContext } from 'react'
import DateComponent from './Date'
import '../styles/datelist.css'
import { DateContext } from './Main'
import InfiniteScroll from 'react-infinite-scroll-component'

const DateList = () => {
  const { dates } = useContext(DateContext)

  const nextHandler = () => {
    // let date = new Date(Date.now())
    // let startDate = new Date(date.setMonth(date.getMonth() + currentMonth))
    // let newDate = new Date(date.setMonth(date.getMonth() + currentMonth + 1))
    // let arr = []
    // for (
    //   let i = new Date(startDate);
    //   i <= newDate;
    //   i.setDate(i.getDate() + 1)
    // ) {
    //   arr.push({
    //     day: getWeekDay(new Date(i).getDay()),
    //     date: new Date(i).getDate(),
    //     year: new Date(i).getFullYear(),
    //     month: new Date(i).getMonth(),
    //     id: nanoid(),
    //   })
    // }
    // setDates(dates.concat(arr))
    console.log(`${dates.length * 100}px`)
  }

  return (
    <div className={'scroll-wrapper'}>
      <InfiniteScroll
        className={'date-list-wrapper'}
        dataLength={dates.length}
        next={nextHandler}
        hasMore={true}
        //  scrollThreshold={`${dates.length * 100}px`}
      >
        {dates.map((obj) => (
          <DateComponent
            key={obj.id}
            date={obj.date}
            day={obj.day}
            id={obj.id}
            selected={obj.selected}
          />
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default DateList
