import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Terminal from '../components/projects/Terminal'
import Nightwave from '../components/projects/Nightwave'
import './projets.scss'


function Projets() {
  return (
    <>
        <Header/>
        <div className="projets-container-page">
          <Nightwave/>
          <Terminal/>
        </div>
        <Footer/>
    </>
  )
}

export default Projets