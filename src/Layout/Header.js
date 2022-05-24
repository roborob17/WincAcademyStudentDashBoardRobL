import '../styles/Header.css'
import iconDashboard from "../components/assets/Winclogo.png";

const Header = () => {
  return (
    <header>
      <img src={iconDashboard} alt="Win Academy logo img"></img>
      <h1>Winc Academy Students Dashboard</h1>
    </header>
  )
}

export default Header
