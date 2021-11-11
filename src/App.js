import Login from './components/login'
import './styles/app.css'
import Registration from "./components/registration";

export const App = () => {
  return (
    <div className="container">
      <Registration />
    </div>
  )
}
// todo: dotenv virtualize js-cookie
