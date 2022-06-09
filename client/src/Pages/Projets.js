import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import backgroundVideo from '../assets/video/backgroundVideo.mp4'


function Projets() {
  return (
    <>
    <video autoPlay loop playsInline disablePictureInPicture className="home-background-video" muted>
          <source src={backgroundVideo} type="video/mp4" />
    </video>
        <Header/>
        projects
        <Footer/>
    </>
  )
}

export default Projets