import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_PAGE } from './consts'
import Login from '../components/Login'
import Registration from '../components/Registration'
import Main from '../components/Main'

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
