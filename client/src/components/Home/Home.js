import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./home.scss";

/* The imported currently not working animated background */
/* import backgroundVideo from '../../assets/video/backgroundVideo.webm' */

function Home() {

  const animatedText = () => {
    
  }

  return (
    <>

      {/* Animated background won't work with Chromium, need to check polyfill or else to fix it. Won't work with Firefox Live-Served on VScodium either..  */}

      {/* <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        src={backgroundVideo}
        type="video/webm"
        className="home-background-video">
      </video> */}

      <Header />
      <div className="home-welcome-container">
        <p className="home-welcome-text">Hi ,<br/> Welcome to my portfolio, my name is Julien Stoll and i am a Junior Web Developer . . .</p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
