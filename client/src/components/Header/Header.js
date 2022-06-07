// Header including Navbar, Navlinks, Logo for the whole

import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { UidContext } from '../Context/AppContext';
import Logout from '../Log/Logout';
import './header.scss'


function Header() {

  const items = [{ route: "/login"}, { route: "/signup"}]

  const uid = useContext(UidContext)
  
  return (
    <nav className="header-container">
        <ul className="header-ul">
            <li className="header-li">
              <NavLink to="/" className={({ isActive }) => (isActive ? "link-active header-btn" : "link header-btn")}>HOME</NavLink></li>
            <li className="header-li">
            <NavLink to="/exercices" className={({ isActive }) => (isActive ? "link-active header-btn" : "link header-btn")}>EXERCISES</NavLink></li>
            <li className="header-li">
            <NavLink to="/projets" className={({ isActive }) => (isActive ? "link-active header-btn" : "link header-btn")}>PROJECTS</NavLink></li>
            <li className="header-li">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "link-active header-btn" : "link header-btn")}>CONTACT</NavLink></li>
            {uid ? (
              <>
                <li className="header-li">
                  <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "link-active header-btn" : "link header-btn")}>DASHBOARD</NavLink></li>
                <li className="header-li">
                <button className="header-btn"><Logout/></button></li>
              </>
            ) : (
              <li className="header-li">
                <NavLink to={`/${items.route}`} className={({ isActive }) => (isActive ? "link-active header-btn" : "link header-btn")}>CONNEXION</NavLink></li>
            )}
        </ul>
    </nav>
  )
}

export default Header