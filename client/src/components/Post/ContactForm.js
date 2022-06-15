import { useState } from "react";
import './contactForm.scss'


const ContactForm = () => {

    const [status, setStatus] = useState("Submit")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("Sending...")
        const { name, email, message } = e.target.elements
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(details)
        })
        setStatus("Submit")
        let result = await response.json()
        console.log(result);
        setTimeout(() => {
            setSubmitted(true)
        }, 100)
    }

    if (submitted) {
        return (
            <>
                <div className="contact-form">
                    <h1 className="contact-success">Thank you!</h1>
                    <h2 className="contact-success">I'll contact you soon.</h2>
                </div>
            </>
        )
    }

    return (
        
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name" className="contact-form-label">Name :</label>
            <input type="text" name="name" className="contact-form-name form-input" placeholder="Name" required></input>

            <label htmlFor="email" className="contact-form-label">Mail :</label>
            <input type="email" name="email" className="contact-form-mail form-input" placeholder="Mail" required></input>

            <label htmlFor="message" className="contact-form-label">Message :</label>
            <textarea name="message" className="contact-form-message form-input" placeholder="Message" required></textarea>
            
            <button type="submit" className="contact-form-send-btn">{status}</button>
          </form>
    );
};

export default ContactForm;