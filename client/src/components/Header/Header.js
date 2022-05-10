// Header including Navbar, Navlinks, Logo for the whole

import './header.scss'


function Header() {
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
              <button className="header-btn">PROFIL</button></li>
        </ul>
    </nav>
  )
}

export default Header