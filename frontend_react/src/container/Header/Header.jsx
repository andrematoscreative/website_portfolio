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
            <motion.div
            whileHover={{ rotateX: 10, rotateY: 30 }}
            transition={{ duration: 0.5 }}
            className='head-text'>
                ANDRÉ MATOS
            </motion.div>
          </div>
          <div className='desc-cmp'>
            <motion.div
            whileHover={{ rotateX: 10, rotateY: 30 }}
            transition={{ duration: 0.5 }}
            className='p-text1'>
                <p>Visual Designer</p>
            </motion.div>

            <motion.div
            whileHover={{ rotateX: 10, rotateY: 30 }}
            transition={{ duration: 0.5 }}
            className='p-text2'>
                <p>Software Web Developer</p>
            </motion.div>
            
            <motion.div
            whileHover={{ rotateX: 10, rotateY: 30 }}
            transition={{ duration: 0.5 }}
            className='p-text3'>
                <p>Technology Lover</p>
            </motion.div>
          </div>
      
      </motion.div>
      
      <motion.div 
      whileInView={{ opacity: [0,1] }}
      transition={{ duration: 1.5 }}
      className='orb'>
      </motion.div>
      

    </div>
    
  )
}

export default AppWrap(Header, 'Home');