// Header including Navbar, Navlinks, Logo for the whole

import './header.scss'


function Header() {
  return (
    <nav className="header-container">
        <ul className="header-ul">
            <li className="header-li">HOME</li>
            <li className="header-li">EXERCICES</li>
            <li className="header-li">PROJETS</li>
            <li className="header-li">CONTACT</li>
            <li className="header-li">PROFIL</li>
        </ul>
    </nav>
  )
}

export default Header