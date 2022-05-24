import '../styles/Footer.css'
import iconDashboard from "../components/assets/Dashboard.png";

const Footer = () => {
  return (
    <footer>
      <img src={iconDashboard} alt="computer screen img"></img>
      <h1>Winc Academy Students Dashboard</h1>
      <h3>Copyright 2022 by Rob Linssen</h3>
    </footer>
  )
}

export default Footer