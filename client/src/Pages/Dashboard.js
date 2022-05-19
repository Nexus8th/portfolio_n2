import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useContext } from 'react'
import { UidContext } from '../components/Context/AppContext'
import Home from '../components/Home/Home'


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