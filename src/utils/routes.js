import Login from '../components/Login/Login'
import Registration from '../components/Registration/Registration'
import Main from '../components/Main/Main'

const LOGIN_ROUTE = '/login'
const REGISTRATION_ROUTE = '/register'
const MAIN_PAGE = '/main'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
]

export const privateRoutes = [
  {
    path: MAIN_PAGE,
    Component: Main,
  },
]
