import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./home.scss";
/* import backgroundVideo from '../../assets/video/backgroundVideo.webm' */

function Home() {
  return (
    <>
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
      <div className="home-container">
        <div className="home-chat-container">
          <div className="home-chat-top-bar">
            <span className="home-chat-top-bar-dot-1"></span>
            <span className="home-chat-top-bar-dot-2"></span>
            <span className="home-chat-top-bar-dot-3"></span>
            <span className="home-chat-top-bar-title">Terminal</span>
          </div>
          <input className="home-chat-input"></input>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
