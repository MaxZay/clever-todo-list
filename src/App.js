import './styles/app.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
// todo: dotenv virtualize js-cookie
