import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import header from './header.scss';

const Header = () => {
  return (

    <div className='app__header app__flex'>
      <motion.div 
      whileInView={{ x: [-250, 0], opacity: [0,1] }}
      transition={{ duration: 1.5 }}
      className='app__header-info'>
        
          <div className='name-cmp app__flex'>
            <h1 className='head-text'>ANDRÉ MATOS</h1>
          </div>
          <div className='desc-cmp app__flex'>
            <p className='p-text'>Design and Visual Artist</p>
            <p className='p-text'>Software Web Developer</p>
            <p className='p-text'>Technology Lover</p>
          </div>
        
      </motion.div>

      <motion.div 
      whileInView={{ opacity: [0,1] }}
      transition={{ duration: 3, delayChildren: 0.5}}
      className='orb'>
        {/* className='app__header-img'>
        <img src={images.andrematos_creative_photo} alt='andrematos_creative_photo'/>
        <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        /> */}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'Home');