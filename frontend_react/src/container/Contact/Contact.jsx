import React , { useState }from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import contact from './contact.scss';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can perform any necessary logic, such as sending the form data to a server or displaying a success message.
    // You can access the form data using the name, email, and message variables.

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };
return (
  <>
    <div className='app__contact-title'>
      <div className='app__contact-title-title'>my contact_</div>
      <div className='app__contact-title-info'>Helping to empower individuals and organizations to reach their fullest potential.</div>
    </div>


  
      
  
<div className='app__contact-content'>
    
    <div className='app__About-img'>
      <img src={images.andrematos_creative_photo3} alt='andrematos_creative_photo'/>
    </div>
  
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
      </div>
      <button type="submit">Send Message</button>
    </form>

</div>
</>



    
  )
  
}

export default AppWrap(Contact, 'Contact');