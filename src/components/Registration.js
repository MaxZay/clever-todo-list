import React, { useState } from 'react'
import '../styles/form.css'
import { Link } from 'react-router-dom'

const Registration = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div>
      <form className={'form'}>
        <h3 className="form_title">Registration</h3>
        <input
          placeholder={'Name'}
          id="name"
          className="form_input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder={'Last name'}
          id="lastName"
          className="form_input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <button className={'form_submit'}>Register</button>
        <Link to={'/login'}>
          <div className={'form_link'}>Log in</div>
        </Link>
      </form>
    </div>
  )
}

export default Registration
