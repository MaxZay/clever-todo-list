import React, { useContext, useEffect, useState } from 'react'
import DateList from './DateList'
import '../styles/main.css'
import { nanoid } from 'nanoid'
import ToDo from './ToDo'
import { getWeekDay } from '../utils/getWeekDay'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { Context } from '../App'

export const MainContext = React.createContext(null)

const Main = () => {
  // const [data, setData] = useState({
  //   dates: [],
  //   selectedDate: {},
  // })
  //
  // setData({ ...data, selectedDate }) // setData(data => date + 1)
  //
  // const updateSelectedDate = (selectedDate) =>
  //   setData((prevState) => ({ ...prevState, selectedDate }))

  // const [test, setTest] = useState({
  //   datesTest: [],
  //   selectedDateTest: {},
  //   tasksTest: [],
  // })

  const [dates, setDates] = useState([])

  const [selectedDate, setSelectedDate] = useState({})

  const [tasks, setTasks] = useState([])

  const tasksCollectionRef = collection(db, 'todo')

  const { user } = useContext(Context)

  const [currentUser] = user

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
        month: new Date(i).getMonth(),
        id: nanoid(),
      })
    }
    setSelectedDate(arr[0])
    arr[0].selected = true
    setDates([...arr])

    const getTasks = async () => {
      const data = await getDocs(tasksCollectionRef)
      let result = []
      data.docs.forEach((item) => {
        if (item.data().userId === currentUser.id) {
          result.push({ ...item.data(), id: item.id })
        }
      })
      result.sort((a, b) => {
        return new Date(a.time) - new Date(b.time)
      })
      setTasks([...result])
    }
    getTasks()
  }, [])

  return (
    <MainContext.Provider
      value={{
        dates,
        setDates,
        selectedDate,
        setSelectedDate,
        tasks,
        setTasks,
      }}
    >
      <div className={'main-wrapper'}>
        {dates.length !== 0 && <DateList dates={dates} setDates={setDates} />}
        <ToDo />
      </div>
    </MainContext.Provider>
  )
}

export default Main
