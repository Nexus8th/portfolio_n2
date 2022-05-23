import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useContext } from 'react'
import { UidContext } from '../components/Context/AppContext'
import Home from '../components/Home/Home'
import { useSelector } from 'react-redux'


function Dashboard() {

  const uid = useContext(UidContext)
  const userData = useSelector((state) => state.userReducer)

  return (
    <>
      {uid ? (
        <>
        <Header/>
        <div className="dashboard-container">
          <h2>Profil</h2>
          <img className="dashboard-user-pic" style={{width:100}} src={userData.picture} alt="user-pic"></img>
          <h3>Pseudo: {userData.pseudo}</h3>
          <h3>Email: {userData.email}</h3>
          <h3>userID: {userData._id}</h3>
          <h3>Created at:</h3>
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