import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useContext } from 'react'
import { UidContext } from '../components/Context/AppContext'
import Home from '../components/Home/Home'
import { useDispatch, useSelector } from 'react-redux'
import { dateParser } from '../components/Context/Utils'
import './dashboard.scss'
import { deleteUser } from '../actions/user.actions'
import axios from 'axios'
import cookie from 'js-cookie'
import backgroundVideo from '../assets/video/backgroundVideo.mp4'


function Dashboard() {

  const uid = useContext(UidContext)
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const deleteAccount = () => {
    dispatch(deleteUser(uid))
  }

  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 })
    }
  }

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true
    })
    .then(() => removeCookie('jwt'))
    .catch((err) => console.log(err))

    window.location = "/"
  }

  return (
    <>
      <video autoPlay loop playsInline disablePictureInPicture className="home-background-video" muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {uid ? (
        <>
        <Header/>
        <div className="dashboard-container">
          <h2>Profile</h2>
          <img className="dashboard-user-pic" style={{width:100}} src={userData.picture} alt="user-pic"></img>
          <h3>Pseudo: {userData.pseudo}</h3>
          <h3>Mail: {userData.email}</h3>
          <h3>userID: {userData._id}</h3>
          <h3>Created at: {dateParser(userData.createdAt)}</h3>
          <button className="dashboard-delete-btn" onClick={() => {
            if (window.confirm('Are you sure you want to delete this account ?')) {
                deleteAccount() 
                logout()
            }
        }} >DELETE ACCOUNT</button>
        </div>
        <Footer/>
        </>
      ) : (
        <Home/>
      )}
    </>
  )
}

export default Dashboard