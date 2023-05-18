import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import header from './header.scss';

const Header = () => {
  
  return (

    <div className='app__header app__flex'>
      {/* <motion.div 
      whileInView={{ x: [-250, 0], opacity: [0,1] }}
      transition={{ duration: 3 }} */}
      <div className='app__header-info'>
          
        {/* <div className='app__header-head-text app__flex'> */}
            <motion.div
            /* whileHover={{ rotateX: 10, rotateY: 30 }} */
            whileInView={{ opacity: [0,1] }}
            transition={{ duration: 3 }}
              className='app__header-head-text app__flex'>
                ANDRÉ MATOS
            </motion.div>
          {/* </div> */}
          <div className='app__header-description'>
            <motion.div
            /* whileHover={{ rotateX: -5, rotateY: 30 }} */
            whileInView={{ x: [-350, 0], opacity: [0,1] }}
            transition={{ duration: 5 }}
            className='app__header-description-text1'>
                <p>&lt;Visual Designer/&gt;</p>
            </motion.div>

            <motion.div
            /* whileHover={{ rotateX: -5, rotateY: 30 }} */
            whileInView={{ x: [-450, 0], opacity: [0,1] }}
            transition={{ duration: 6 }}
            className='app__header-description-text2'>
                <p>&lt;Software Web Developer/&gt;</p>
            </motion.div>
            
            <motion.div
            /* whileHover={{ rotateX: -5, rotateY: 30 }} */
            whileInView={{ x: [-450, 0], opacity: [0,1] }}
            /* transition={{ duration: 6 }} */
            className='app__header-description-text3'>
                <p>&lt;Technology Lover/&gt;</p>
            </motion.div>

          </div>
          <motion.div 
      whileInView={{ opacity: [0,1] }}
      transition={{ duration: 2 }}
      className='app__header-orb'>
      </motion.div>
        </div>
      
      {/* </motion.div> */}
      
      

    </div>
    
  )
}

export default AppWrap(Header, 'Home');