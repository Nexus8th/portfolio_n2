// Header including Navbar, Navlinks, Logo for the whole

import { useNavigate } from 'react-router-dom'
import './header.scss'


function Header() {

  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path)
  }

  return (
    <nav className="header-container">
        <ul className="header-ul">
            <li className="header-li">
              <button className="header-btn">HOME</button></li>
            <li className="header-li">
              <button className="header-btn">EXERCICES</button></li>
            <li className="header-li">
              <button className="header-btn">PROJETS</button></li>
            <li className="header-li">
              <button className="header-btn">CONTACT</button></li>
            <li className="header-li">
              <button className="header-btn" onClick={routeChange}>CONNEXION</button></li>
        </ul>
    </nav>
  )
}

export default Header