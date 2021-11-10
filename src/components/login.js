import React, { useState } from 'react'
import '../styles/login.css'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setLogin('')
    setPassword('')
    console.log(login, password)
  }

  return (
    <div>
      <form className="form">
        <h3 className="form-title">Authorization</h3>
        <input
          placeholder={'Login'}
          id="login"
          className="form-input"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          placeholder={'Password'}
          id="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={'form-submit'} onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
