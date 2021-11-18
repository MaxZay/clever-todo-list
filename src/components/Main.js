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
  const [data, setData] = useState({
    dates: [],
    selectedDate: {},
    tasks: []
  })

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
    arr[0].selected = true

    const getTasks = async () => {
      const dataFromDb = await getDocs(tasksCollectionRef)
      let result = []
      dataFromDb.docs.forEach((item) => {
        if (item.data().userId === currentUser.id) {
          result.push({ ...item.data(), id: item.id })
        }
      })
      result.sort((a, b) => {
        return new Date(a.time) - new Date(b.time)
      })
      setData((data) => ({...data, dates: [...arr], selectedDate: arr[0], tasks: [...result]}))
    }
    getTasks()
  }, [])

  return (
    <MainContext.Provider
      value={{
        data, setData
      }}
    >
      <div className={'main-wrapper'}>
        {data.dates.length !== 0 && <DateList />}
        <ToDo />
      </div>
    </MainContext.Provider>
  )
}

export default Main
