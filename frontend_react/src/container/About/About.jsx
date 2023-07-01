import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { BsGithub,BsLinkedin } from 'react-icons/bs';
import { SiWakatime } from 'react-icons/si';
import about from './about.scss';

const About = () => {
  return (
    <div className='app__About app__flex'>
      <div className='app__master-container'>
        <div className='app__About-info'> 

          <div className='app__About-title'>
            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1 }}
            className='app__About-title-title'>about me
            </motion.div>

            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }}
            className='app__About-title-info'>I'm a passionate visual designer and software frontend developer who loves technology and its endless possibilities.
            <div className='app__About-blink'>|</div>
            </motion.div>
          </div>
          <div className='app__About-desc'>
            <div className='app__About-desc-container'>
              <div className='app__About-desc-container-text'>
                <p>Tech enthusiast exploring the ever-evolving world of design, development, and emerging technologies. Constantly striving for creative excellence.</p>
                <p>Creating experiences that are both beautiful and functional. Constantly learning and pushing the boundaries of web development.</p>
                <p>I'm proficient in a variety of programming languages, including HTML, CSS, JavaScript, and I'm always eager to learn new ones.</p><p> Above all, I'm a person who is constantly fascinated by the ways in which technology can transform the world we live in.</p><b>Let's connect and see how we can bring your ideas to life!</b>
              </div>
              <div className='app__About-desc-container-icons'>
                <a className="app__About-desc-container-linkedin" href="https://linkedin.com/in/andrematoscreative"target="_blank">
                <BsLinkedin/>
                </a>
                <a className="app__About-container-git"href="https://github.com/andrematoscreative" target="_blank">
                <BsGithub/>
                </a>
                <a className="app__contact-container-connections-wakatime"href="https://wakatime.com/@andrematoscreative"target="_blank">
                <SiWakatime/>
                </a>
              </div>
            </div>
            <div className='app__About-desc-img'>
              <img src={images.andrematos_creative_photo} alt='andrematos_creative_photo'/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(About, 'About');