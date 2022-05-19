// Signup Page 

import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import axios from 'axios'
import { useState } from 'react'

function Signup() {

  const [pseudo, setPseudo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [controlPassword, setControlPassword] = useState('')

  const navigate = useNavigate()

  const loginRoute = (e) => {
    e.preventDefault()
    let path = '/login'
    navigate(path)
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    // managing errors messages
    const pseudoError = document.querySelector('.signup-pseudo-error')
    const emailError = document.querySelector('.signup-email-error')
    const passwordError = document.querySelector('.signup-password-error')
    const controlPasswordError = document.querySelector('.signup-controlpassword-error')

    controlPasswordError.innerHTML = ""

    if (password !== controlPassword) {
      controlPasswordError.innerHTML = "Les mots de passe ne correspondent pas"
    } else {
      await axios ({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/signup`,
        data: {
          pseudo,
          email,
          password
        }
      })
      .then((res) => {
        if (res.data.errors) {
          pseudoError.innerHTML = res.data.errors.pseudo
          emailError.innerHTML = res.data.errors.email
          passwordError.innerHTML = res.data.errors.password
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  return (
    <>
    <Header/>
    <form className="signup-form" action="" method="get" onSubmit={handleRegister}>

      <h1 className="signup-h1">Inscription</h1>

      <label className="signup-label" htmlFor="pseudo">Pseudo</label>
      <input className="signup-input" type="text" name="pseudo" required onChange={(e) => setPseudo(e.target.value)} value={pseudo}></input>
      <div className="signup-pseudo-error"></div>

      <label className="signup-label" htmlFor="email">Email</label>
      <input className="signup-input" type="text" name="email" required onChange={(e) => setEmail(e.target.value)} value={email}></input>
      <div className="signup-email-error"></div>

      <label className="signup-label" htmlFor="password">Mot de passe</label>
      <input className="signup-input" type="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password}></input>
      <div className="signup-password-error"></div>

      <label className="signup-label" htmlFor="control-password">Confirmez le mot de passe</label>
      <input className="signup-input" type="password" name="password" required onChange={(e) => setControlPassword(e.target.value)} value={controlPassword}></input>
      <div className="signup-controlpassword-error"></div>

      <button className="signup-btn" type="submit">S'inscrire</button>
    </form>

    <p className="signup-p">Déjà inscrit? <a className="signup-a" href="# " onClick={loginRoute}>Connectez-vous!</a></p>
    <Footer/>
    </>
  )
}

export default Signup