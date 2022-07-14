// Login Page

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './login.scss'
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
        emailError.innerHTML = res.data.errors.mail
        passwordError.innerHTML = res.data.errors.password
      } else {
        window.location = '/dashboard'
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
        <div className="login-all-container">
          <form className="login-form" action="" method="get" onSubmit={handleLogin}>

            <h1 className="login-h1">Connection</h1>

            <label className="login-label" htmlFor="email">Mail</label>
            {/* Handling email errors messages display */}
            <div className="login-email-error"></div>
            <input className="login-input" type="text" name="email" required onChange={(e) => setEmail(e.target.value)} value={email}></input>


            <label className="login-label" htmlFor="password">Password</label>
            {/* Handling password errors messages display */}
            <div className="login-password-error"></div>
            <input className="login-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>


            <button className="login-btn" type="submit">Login</button>

            <p className="login-p">New member?&nbsp;<a className="login-a" href="# " onClick={signupRoute}>&nbsp;Sign-up here!</a></p>
          </form>
        </div>
        <Footer/>
      </>
  )
}

export default Login