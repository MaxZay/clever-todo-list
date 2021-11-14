import React, {useEffect, useState} from 'react'
import * as DateComponent from './Date'
import DateList from "./DateList";

const Main = () => {
 const [dates, setDates] = useState([])

  useEffect(() =>{
    let date = new Date(Date.now())
    let newDate = new Date(date.setMonth(date.getMonth()+1));
    let arr = []
    for(let i = new Date(Date.now()); i <= newDate; i.setDate(i.getDate() + 1)) {
      arr.push(i)
    }
    setDates([...arr])
  },[])

  return (
    <div>
      { dates.length !== 0 && <DateList dates={dates} /> }
    </div>
  )
}

export default Main
