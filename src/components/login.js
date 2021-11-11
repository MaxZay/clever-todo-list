import React, { useState } from 'react'
import '../styles/form.css'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setLogin('')
    setPassword('')
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <h3 className="form_title">Authorization</h3>
        <input
          placeholder={'Login'}
          id="login"
          className="form_input"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          placeholder={'Password'}
          id="password"
          className="form_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={'form_submit'} onClick={submitHandler}>
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login
