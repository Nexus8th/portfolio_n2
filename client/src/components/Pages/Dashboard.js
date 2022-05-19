import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useContext } from 'react'
import { UidContext } from '../Context/AppContext'
import Home from '../Home/Home'


function Dashboard() {

  const uid = useContext(UidContext)

  return (
    <>
      {uid ? (
        <>
        <Header/>
        <div className="dashboard-container">
          Profil Details
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