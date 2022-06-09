import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import backgroundVideo from '../assets/video/backgroundVideo.mp4'


function Contact() {
  return (
    <>
    <video autoPlay loop playsInline disablePictureInPicture className="home-background-video" muted>
          <source src={backgroundVideo} type="video/mp4" />
    </video>
        <Header/>
        contact
        <Footer/>
    </>
  )
}

export default Contact