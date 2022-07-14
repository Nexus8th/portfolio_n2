// Footer including Logo, Shortened Navlinks, Socials Links

import './footer.scss'


function Footer() {
  return (
    <nav className="footer-container">
      <ul className="footer-ul">
        <li className="footer-li"><a className="footer-a" rel="noreferrer" target="_blank" href="https://github.com/Nexus8th">GITHUB</a></li>
        <li className="footer-li"><a className="footer-a" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/julien-stoll-/">LINKEDIN</a></li>
      </ul>
    </nav>
  )
}

export default Footer