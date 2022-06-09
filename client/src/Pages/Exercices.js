import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Thread from '../components/Context/Thread'
import NewPostForm from '../components/Post/NewPostForm'
import { useContext } from 'react'
import { UidContext } from '../components/Context/AppContext'
import backgroundVideo from '../assets/video/backgroundVideo.mp4'
import './Exercices.scss'

const Exercices = () => {

  const uid = useContext(UidContext)

  return (
      <>
      <video autoPlay loop playsInline disablePictureInPicture className="home-background-video" muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
        <Header/>
        <div className="exercices-body">
          {uid ? <NewPostForm/> : ""}
          <Thread/>      
        </div>
        <Footer/>
      </>
  )
}

export default Exercices