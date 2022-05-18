// Login Page

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const emailError = document.querySelector(".login-email-error")
    const passwordError = document.querySelector(".login-password-error")

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email, password
      }
    })
    .then((res) => {
      if (res.data.errors) {
        emailError.innerHTML = res.data.errors.email
        passwordError.innerHTML = res.data.errors.password
      } else {
        window.location = '/'
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // Navigation path to SignUp component
  const navigate = useNavigate()
  const signupRoute = (e) => {
    e.preventDefault()
    let path = '/signup'
    navigate(path)
  }

  return (
    <>
    <Header/>
    <form className="login-form" action="" method="get" onSubmit={handleLogin}>
      <h1 className="login-h1">Connexion</h1>
      <label className="login-label" htmlFor="email">Email</label>
      <input className="login-input" type="text" name="email" required onChange={(e) => setEmail(e.target.value)} value={email}></input>

      {/* Handling email errors messages display */}
      <div className="login-email-error"></div>

      <label className="login-label" htmlFor="password">Mot de passe</label>
      <input className="login-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>

      {/* Handling password errors messages display */}
      <div className="login-password-error"></div>

      <button className="login-btn" type="submit">Connexion</button>
    </form>
    <p className="login-p">Nouveau? <a className="login-a" href="# " onClick={signupRoute}>Inscrivez-vous!</a></p>
    <Footer/>
    </>
  )
}

export default Login