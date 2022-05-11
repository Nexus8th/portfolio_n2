// Header including Navbar, Navlinks, Logo for the whole

import { useNavigate } from 'react-router-dom'
import './header.scss'


function Header() {

  const navigate = useNavigate();

  // func to navigate to Login page
  const loginRoute = () => {
    let path = `/login`;
    navigate(path)
  }

  // func to navigate to Home page
  const homeRoute = () => {
    let path = `/`
    navigate(path)
  }

  // func to navigate to Exercices page
  const exercicesRoute = () => {
    let path = `/exercices`
    navigate(path)
  }

  // func to navigate to Projets page
  const projetsRoute = () => {
    let path = `/projets`
    navigate(path)
  }

  // func to navigate to Contact page
  const contactRoute = () => {
    let path = `/contact`
    navigate(path)
  }

  return (
    <nav className="header-container">
        <ul className="header-ul">
            <li className="header-li">
              <button className="header-btn" onClick={homeRoute}>HOME</button></li>
            <li className="header-li">
              <button className="header-btn" onClick={exercicesRoute}>EXERCICES</button></li>
            <li className="header-li">
              <button className="header-btn" onClick={projetsRoute}>PROJETS</button></li>
            <li className="header-li">
              <button className="header-btn" onClick={contactRoute}>CONTACT</button></li>
            <li className="header-li">
              <button className="header-btn" onClick={loginRoute}>CONNEXION</button></li>
        </ul>
    </nav>
  )
}

export default Header