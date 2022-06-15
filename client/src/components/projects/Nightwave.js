import img1 from '../../assets/images/Nightwave-desktop.png'
import img2 from '../../assets/images/Nightwave-mobile.png'
import './nightwave.scss'

const Nightwave = () => {
    return (
        <div className="nightwave-container">
            <p className="nightwave-description">One of my first week project, a proof of concept about adaptive page and layout.</p>
            <button className="nightwave-btn">NIGHTWAVE SITE</button>
            <img src={img1} alt="nightwave-desktop" className="nightwave-img1" ></img>
            <img src={img2} alt="nightwave-mobile" className="nightwave-img2"></img>
        </div>
    );
};

export default Nightwave;