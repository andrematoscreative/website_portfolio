import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
/* import { urlFor, sanity } from '../../sanity'; */
import works from './works.scss';


const Works = () => {
    
  return (
  <div className='app__Work app__flex'>
    <div className='app__master-container'>
        <div className='app__Work-info'>
          <div className='app__Work-title'>
            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1 }}
            className='app__Work-title-title'>my work
            </motion.div>

            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }}
            className='app__Work-title-info'>Check some of my work. Crafting the future, one project at a time.
            <div className='app__Work-blink'>|</div>
            </motion.div>
          </div>
            
          <div className="app__Work-cards-container">
              <div class="app__Work-card1">{/* <img className="andrematoscreative-logo" src={images.logo} alt='andre matos creative logo'/> */}<div className="loading-icon"><div className="loading-icon-inner" /></div><h1>Coming soon...</h1></div>
              <div class="app__Work-card2">{/* <img className="andrematoscreative-logo" src={images.logo} alt='andre matos creative logo'/> */}<div className="loading-icon"><div className="loading-icon-inner" /></div><h1>Coming soon...</h1></div>
              <div class="app__Work-card3">{/* <img className="andrematoscreative-logo" src={images.logo} alt='andre matos creative logo'/> */}<div className="loading-icon"><div className="loading-icon-inner" /></div><h1>Coming soon...</h1></div>
              <div class="app__Work-card4">{/* <img className="andrematoscreative-logo" src={images.logo} alt='andre matos creative logo'/> */}<div className="loading-icon"><div className="loading-icon-inner" /></div><h1>Coming soon...</h1></div>
            
          </div>
        </div>
    </div>
  </div>

  )
}

export default AppWrap(Works,'Work');