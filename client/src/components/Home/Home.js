import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./home.scss";
import { useEffect, useState } from "react";

/* The imported currently not working animated background */
/* import backgroundVideo from '../../assets/video/backgroundVideo.webm' */


/* Text Animation sentences */
const textAnimation = 'Hi, welcome to my portfolio, my name is Julien Stoll and i am a Junior Web Developer ...'

function Home() {

  /* Animation States */
  const [animation, setAnimation] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(textAnimation.slice(0, animation.length +1))
    }, 75)

    return () => clearTimeout(timeout)
  }, [animation])

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
        <p className="home-welcome-text text-animation">{' '}{animation}</p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
