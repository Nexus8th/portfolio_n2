import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ContactForm from '../components/Post/ContactForm'
import './contact.scss'


function Contact() {
  return (
    <>
        <Header/>
        <div className="contact-container">
          <title className="contact-title-container">
            <h1 className="contact-title-h1">CONTACT ME !</h1>
          </title>
        <ContactForm/>
        </div>
        <Footer/>
    </>
  )
}

export default Contact