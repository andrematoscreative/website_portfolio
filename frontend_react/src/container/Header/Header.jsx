import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import header from './header.scss';

const Header = () => {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState(
    "Hello World, I'm a"
  )
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 170)
    }
  }, [index])
  return (

  <div className='app__header app__flex'>
    <div className='app__master-container'>
      <div className='app__header-info'>
        <motion.div
        whileInView={{  opacity: [0,1] }}
        transition={{ duration: 1 }}
        className='app__header-head-text app__flex'>{text}
        </motion.div>

        <div className='app__header-description'>

          <motion.div
          whileInView={{ opacity: [0,1] }}
          transition={{ duration: 4 }}
          className='app__header-description-text1'>
          <p>&lt;Visual Designer/&gt;</p>
          </motion.div>

          <motion.div
          whileInView={{ opacity: [0,1] }}
          transition={{ duration: 4 }} 
          className='app__header-description-text2'>
          <p>&lt;Software Web Developer/&gt;</p>
          </motion.div>

          <motion.div
          whileInView={{ opacity: [0,1] }}
          transition={{ duration: 4 }}
          className='app__header-description-text3'>
          <p>&lt;Technology Lover/&gt;</p>
          </motion.div>

        </div>
        <div className='blink'>|</div>
      </div>
    </div>
  </div>
  )
}

export default AppWrap(Header, 'Home');