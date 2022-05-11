// Signup Page 

import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Signup() {

    const navigate = useNavigate()

    const loginRoute = (e) => {
        e.preventDefault()
        let path = '/login'
        navigate(path)
    }

  return (
    <>
    <Header/>
    <form className="signup-form" action="" method="get">
      <h1 className="signup-h1">Inscription</h1>
      <label className="signup-label" htmlFor="email">Identifiant</label>
      <input className="signup-input" type="email" name="email" required></input>
      <label className="signup-label" htmlFor="password">Mot de passe</label>
      <input className="signup-input" type="password" name="password" required></input>
      <label className="signup-label" htmlFor="password">Confirmez le mot de passe</label>
      <input className="signup-input" type="password" name="password" required></input>
      <button className="signup-btn" type="submit">S'inscrire</button>
    </form>
    <p className="signup-p">Déjà inscrit? <a className="signup-a" href="# " onClick={loginRoute}>Connectez-vous!</a></p>
    <Footer/>
    </>
  )
}

export default Signup