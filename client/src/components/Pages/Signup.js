// Signup Page 

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Signup() {

  return (
    <>
    <Header/>
    <form className="signup-form" action="" method="get">
      <h1 className="signup-h1">Inscription</h1>
      <label className="signup-label" for="email">Identifiant</label>
      <input className="signup-input" type="email" name="email" required></input>
      <label className="signup-label" for="password">Mot de passe</label>
      <input className="signup-input" type="password" name="password" required></input>
      <label className="signup-label" for="password">Confirmez le mot de passe</label>
      <input className="signup-input" type="password" name="password" required></input>
      <button className="signup-btn" type="submit">S'inscrire</button>
    </form>
    <p className="signup-p">Déjà inscrit? <a className="signup-a" href="/login">Connectez-vous!</a></p>
    <Footer/>
    </>
  )
}

export default Signup