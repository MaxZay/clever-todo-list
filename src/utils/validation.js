export const validate = (values) => {
  const errors = {}

  if (values.hasOwnProperty('username')) {
    if (!values.username) {
      errors.username = 'Required'
    } else if (
      !/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
        values.username
      )
    ) {
      errors.username = 'Invalid username'
    }
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
    errors.password = 'Invalid password'
  }

  return errors
}
