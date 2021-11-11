import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "./consts";
import Login from "../components/Login";
import Registration from "../components/Registration";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration
  }
]