import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { urlFor, sanity } from '../../sanity';
import about from './about.scss';

const About = () => {
  return (
    <div className='app__About app__flex'>
      <motion.div 
      whileInView={{ x: [-250, 0], opacity: [0,1] }}
      transition={{ duration: 1.5 }}
      className='app__About-info'>
        
          <div className='app__About-title app__flex'>
            About
          </div>
      </motion.div>

      <motion.div 
      whileInView={{ opacity: [0,1] }}
      transition={{ duration: 3}}
      
        className='app__About-img'>
        <img src={images.andrematos_creative_photo} alt='andrematos_creative_photo'/>
        <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </motion.div>

    </div>
  )
}

export default AppWrap(About, 'About');