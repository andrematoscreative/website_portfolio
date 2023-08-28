import React , { useState }from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { BsGithub,BsLinkedin } from 'react-icons/bs';
import { SiWakatime } from 'react-icons/si';
import contact from './contact.scss';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameForm = event => {
    setName(event.target.value);
  };

  const emailForm = event => {
    setEmail(event.target.value);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Here you can perform any necessary logic, such as sending the form data to a server or displaying a success message.
    // You can access the form data using the name, email, and message variables.

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

return (
  <div className='app__Contact'>
    <div className='app__master-container'>
      <div className='app__contact-info'>
        <div className='app__contact-title '>

          <motion.div
          whileInView={{ x: [-100, 0], opacity: [0,1] }}
          transition={{ duration: 1 }}
          className='app__contact-title-title'>&lt;contact/&gt;
          </motion.div>

          <motion.div
          whileInView={{ x: [-100, 0], opacity: [0,1] }}
          transition={{ duration: 1.5 }}
          className='app__contact-title-info'>Helping to empower individuals and organizations to reach their fullest potential.
          <div className='app__contact-blink'>|</div>
          </motion.div>

        </div>

        <div className='app__contact-content'>
            {/* <div className='app__contact-content-img'>
              <img src={images.andrematos_creative_photo3} alt='andrematos_creative_photo'/>
            </div> */}

            <div className="app__contact-content-form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={nameForm}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={emailForm}/>

                <label htmlFor="message">Message</label>
                <textarea id="message" value={message} onChange={handleMessageChange} required />

                <button className="app__contact-content-form-submit-button" type="submit">
                  Send Message
                </button>
              </form>
              <div className='app__contact-desc-container-icons'>
                <a className="app__contact-desc-container-linkedin" href="https://linkedin.com/in/andrematoscreative"target="_blank">
                <BsLinkedin/>
                </a>
                <a className="app__contact-container-git"href="https://github.com/andrematoscreative" target="_blank">
                <BsGithub/>
                </a>
                <a className="app__contact-container-connections-wakatime"href="https://wakatime.com/@andrematoscreative"target="_blank">
                <SiWakatime/>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AppWrap(MotionWrap(Contact),'Contact');