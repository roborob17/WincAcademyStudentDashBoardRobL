import '../styles/Header.css'
import iconDashboard from "../components/Dashboard.png";

const Header = () => {
  return (
    <header>
      <img src={iconDashboard} alt="problem loading img"></img>
      <h1>Winc Academy Students Dashboard</h1>
    </header>
  )
}

export default Header
