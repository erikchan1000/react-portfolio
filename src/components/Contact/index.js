import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.js'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  //send email function that checks that every required field is filled out
  const sendEmail = (e) => {
    e.preventDefault()
    if (
      contactInfo.name === '' ||
      contactInfo.email === '' ||
      contactInfo.subject === '' ||
      contactInfo.message === ''
    ) {
      alert('Please fill out all fields')
    } else {
      //send to chantony@gmail.com
      emailjs
        .sendForm(
          `${process.REACT_APP_EMAIL_SERVICE}`,
          `${process.REACT_APP_EMAIL_TEMPLATE}`,
          {
            from_name: contactInfo.name,
            from_subject: contactInfo.subject,
            from_message: contactInfo.message,
          }
        )
        .then(
          (result) => {
            alert('Message sent successfully')
          },
          (error) => {
            alert(error.text)
          }
        )
      form.current.reset()
    }
  }

  const idx = useRef(0)

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["Contact me"]}
              id={idx} startColor="white" endColor="#ffd700"
            />
          </h1>
          <p>
            Filler
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required 
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, name: e.target.value })
                    }
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, email: e.target.value })
                    }
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, subject: e.target.value })
                    }
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, message: e.target.value })
                    }

                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND"
                    onClick={(e) => sendEmail(e)}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Tony Chan,
          <br/>
          <span>chantony@gmail.com</span>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact