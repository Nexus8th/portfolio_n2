import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import backgroundVideo from '../../assets/video/backgroundVideo.mp4'
import './home.scss'


function Home() {
  return (
    <>
        <video autoPlay loop playsInline disablePictureInPicture className="home-background-video" muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <Header/>
        home
        <Footer/>
    </>
  )
}

export default Home