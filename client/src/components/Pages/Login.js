// Login Page

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Login() {

  return (
    <>
    <Header/>
    <form className="login-form" action="" method="get">
      <h1 className="login-h1">Connexion</h1>
      <label className="login-label" for="email">Identifiant</label>
      <input className="login-input" type="email" name="email" required></input>
      <label className="login-label" for="password">Mot de passe</label>
      <input className="login-input" type="password" name="password" required></input>
      <button className="login-btn" type="submit">Connexion</button>
    </form>
    <p className="login-p">Nouveau? <a className="login-a" href="/signup">Inscrivez-vous!</a></p>
    <Footer/>
    </>
  )
}

export default Login