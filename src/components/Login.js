import React, { useContext } from 'react'
import '../styles/form.css'
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import { validate } from '../utils/validation'
import { Context } from '../App'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const Login = () => {
  const { firestore, user } = useContext(Context)
  const [, setCurrentUser] = user
  const history = useHistory()

  const [users] = useCollectionData(firestore.collection('users'))

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
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
