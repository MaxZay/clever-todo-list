import React from 'react'
import '../styles/form.css'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const Login = () => {
  const validate = (values) => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.password = 'Required'
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)
    ) {
      errors.password = 'Invalid password'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div>
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
