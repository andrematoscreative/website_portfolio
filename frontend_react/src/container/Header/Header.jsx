import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import header from './header.scss';

const Header = () => {
  
  return (

    <div className='app__header app__flex'>
      <div className='app__master-container'>
        <div className='app__header-info'>
          
            <motion.div
            whileInView={{ y: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 2.5 }}
              className='app__header-head-text app__flex'>
                Hello World_
            </motion.div>

            <motion.div
            whileInView={{ y: [-100, 0],opacity: [0,1] }}
            transition={{ duration: 2 }}
              className='app__header-head-text-secondary app__flex'>
                I'm a_
            </motion.div>

          <div className='app__header-description'>
            
            <motion.div
            whileInView={{ x: [-150, 0], opacity: [0,1] }}
            transition={{ duration: 2 }}
            className='app__header-description-text1'>
                <p>&lt;Visual Designer/&gt;</p>
            </motion.div>

            <motion.div
            
            whileInView={{ x: [-150, 0], opacity: [0,1] }}
            transition={{ duration: 3 }}
            className='app__header-description-text2'>
                <p>&lt;Software Web Developer/&gt;</p>
            </motion.div>
            
            <motion.div
            whileInView={{ x: [-150, 0], opacity: [0,1] }}
            transition={{ duration: 3.5 }}
            className='app__header-description-text3'>
                <p>&lt;Technology Lover/&gt;</p>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AppWrap(Header, 'Home');