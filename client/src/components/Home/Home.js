import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./home.scss";
import backgroundVideo from '../../assets/video/backgroundVideo.webm'

function Home() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        src={backgroundVideo}
        type="video/webm"
        className="home-background-video">
      </video>
      <Header />
      HOME
      <Footer />
    </>
  );
}

export default Home;
