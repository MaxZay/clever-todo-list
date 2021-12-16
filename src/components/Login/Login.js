import React, { useContext, useEffect, useState } from 'react'
import '../../shared/form.css'
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import { validation } from '../../utils/validation'
import { Context } from '../App/App'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebase'

const Login = () => {
  const { user } = useContext(Context)
  const [, setCurrentUser] = user
  const history = useHistory()
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, 'users')

  const validate = (values) => {
    const errors = {}

    if (
      !users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      )
    ) {
      errors.email = 'No such user found'
    }

    Object.assign(errors, validation(values))

    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate,
    onSubmit: (values) => {
      let currentUser = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      )
      if (currentUser) {
        setCurrentUser({ ...currentUser })
        history.push('/main')
      }
    },
  })

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [])

  return (
    <div className={'form-wrapper'}>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h3 className="form_title">Authorization</h3>
        <div className={'form-block'}>
          <input
            placeholder={'Email'}
            id="email"
            className="form_input"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={'form-error'}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={'form-block'}>
          <input
            type={'password'}
            placeholder={'Password'}
            id="password"
            className="form_input"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={'form-error'}>{formik.errors.password}</div>
          ) : null}
        </div>
        <button className={'form_submit'} type={'submit'}>
          Log in
        </button>
        <Link to={'/register'}>
          <div className={'form_link'}>Registration</div>
        </Link>
      </form>
    </div>
  )
}

export default Login
