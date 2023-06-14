import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { urlFor, sanity } from '../../sanity';
import about from './about.scss';

const About = () => {
  return (
    <div className='app__About app__flex'>
      <div className='app__master-container'>
      <div className='app__About-info'>
        <div className='app__About-img'>
          <img src={images.andrematos_creative_photo} alt='andrematos_creative_photo'/>
        </div>
        <div className='app__About-title'>
          <div className='app__About-title-title'>about me_</div>
          <div className='app__About-title-info'>I'm a passionate visual designer and software frontend developer who loves technology and its endless possibilities.</div>
        </div>
      </div>

    
      <div className='app__About-desc'><p>Tech enthusiast exploring the ever-evolving world of design, 
      development, and emerging technologies. Constantly striving for creative excellence.</p>
      <p>Creating experiences that are both beautiful and functional. Constantly learning and pushing the boundaries of web development.</p>
      <p>I'm proficient in a variety of programming languages, including HTML, CSS, JavaScript, and I'm always eager to learn new ones. Above all, I'm a person who is constantly fascinated by the ways in which technology can transform the world we live in.</p>
      <b>Let's connect and see how we can bring your ideas to life!</b></div>
      </div>
    </div>
  )
}

export default AppWrap(About, 'About');