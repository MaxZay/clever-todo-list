import React, { useContext } from 'react'
import '../styles/form.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { validation } from '../utils/validation'
import { Context } from '../App'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useHistory } from 'react-router'
import { nanoid } from 'nanoid'

const Registration = () => {
  const { firestore, user } = useContext(Context)

  const [, setCurrentUser] = user

  const [users] = useCollectionData(firestore.collection('users'))

  const history = useHistory()

  const validate = (values) => {
    let errors = {}

    if (!values.username) {
      errors.username = 'Required'
    } else if (
      !/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
        values.username
      )
    ) {
      errors.username = 'Invalid username'
    } else if (
      users.filter((user) => user.username === values.username).length > 0
    ) {
      errors.username = 'This username is already taken'
    }

    if (users.filter((user) => user.email === values.email).length > 0) {
      errors.email = 'This email is already taken'
    }

    Object.assign(errors, validation(values))

    return errors
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      const currentUser = {
        username: values.username,
        email: values.email,
        password: values.password,
        id: nanoid(),
      }
      firestore.collection('users').add(currentUser)
      setCurrentUser({ ...currentUser })
      history.push('/main')
    },
  })

  return (
    <div className={'form-wrapper'}>
      <form className={'form'} onSubmit={formik.handleSubmit}>
        <h3 className="form_title">Registration</h3>
        <div className={'form-block'}>
          <input
            placeholder={'Username'}
            id="username"
            className="form_input"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className={'form-error'}>{formik.errors.username}</div>
          ) : null}
        </div>
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
        <button type={'submit'} className={'form_submit'}>
          Register
        </button>
        <Link to={'/login'}>
          <div className={'form_link'}>Log in</div>
        </Link>
      </form>
    </div>
  )
}

export default Registration
