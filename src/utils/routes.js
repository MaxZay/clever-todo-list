import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_PAGE } from '../consts/routes'
import Login from '../components/Login/Login'
import Registration from '../components/Registration/Registration'
import Main from '../components/Main/Main'

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
