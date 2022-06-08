import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useContext } from 'react'
import { UidContext } from '../components/Context/AppContext'
import Home from '../components/Home/Home'
import { useDispatch, useSelector } from 'react-redux'
import { dateParser } from '../components/Context/Utils'
import './dashboard.scss'
import { deleteUser } from '../actions/user.actions'


function Dashboard() {

  const uid = useContext(UidContext)
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const deleteAccount = () => {
    dispatch(deleteUser(userData._id))
  }

  return (
    <>
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
          <button onClick={() => {
            if (window.confirm('Are you sure you want to delete this account ?')) {
                deleteAccount()
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