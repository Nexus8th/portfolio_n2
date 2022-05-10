// Footer including Logo, Shortened Navlinks, Socials Links

import './footer.scss'


function Footer() {
  return (
    <nav className="footer-container">
      <ul className="footer-ul">
        <li className="footer-li">Github</li>
        <li className="footer-li">Linkedin</li>
      </ul>
      <p className="footer-p">Tous droits réservés</p>
    </nav>
  )
}

export default Footer