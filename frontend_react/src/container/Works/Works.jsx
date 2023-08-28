/* import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import works from './works.scss';


const Works = () => {
    
  return (
  <div className='app__Work'>
    <div className='app__master-container'>
        <div className='app__Work-info'>
          <div className='app__Work-title'>
            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1 }}
            className='app__Work-title-title'>&lt;work/&gt;
            </motion.div>

            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }}
            className='app__Work-title-info'>Check some of my work. Crafting the future, one project at a time.
            <div className='app__Work-blink'>|</div>
            </motion.div>
          </div>

          <div className="app__Work-cards-container">
              <div class="app__Work-card1"><img className="card1" src={images.card_1} alt='card1'/>{/* <div className="loading-icon"><div className="loading-icon-inner" /></div><h1>Coming soon...</h1> }</div>
              <div class="app__Work-card2"><img className="card2" src={images.card_2} alt='andre matos creative logo'/>{ <div className="loading-icon"><div className="loading-icon-inner" /></div><h1>Coming soon...</h1> }</div>
              <div class="app__Work-card3"><img className="card3" src={images.card_3} alt='andre matos creative logo'/>{ <div className="loading-icon"><div className="loading-icon-inner" /></div><h1>Coming soon...</h1> }</div>
              <div class="app__Work-card4">{ <img className="andrematoscreative-logo" src={images.logo} alt='andre matos creative logo'/> }<div className="loading-icon"><div className="loading-icon-inner" /></div><h1>Coming soon...</h1></div>
            
          </div>
        </div>
    </div>
  </div>

  )
}

export default AppWrap(MotionWrap(Works),'Work'); */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './works.scss';

const WorkCard = ({ image, alt, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`app__Work-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="card-image" src={image} alt={alt} />
      {isHovered && <div className="card-description">{description}</div>}
    </div>
  );
};

const Works = () => {
  return (
    <div className='app__Work'>
      <div className='app__master-container'>
        <div className='app__Work-info'>
          <div className='app__Work-title'>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className='app__Work-title-title'
            >
              &lt;work/&gt;
            </motion.div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              className='app__Work-title-info'
            >
              Check some of my work. Crafting the future, one project at a time.
              <div className='app__Work-blink'>|</div>
            </motion.div>
          </div>

          <div className="app__Work-cards-container">
            <WorkCard image={images.card_1} alt='André  Matos Creative Branding' description='André  Matos Creative Branding...Coming soon...' />
            <WorkCard image={images.card_2} alt='Plate Perfection restaurant website' description='Plate Perfection restaurant website...Coming soon...' />
            <WorkCard image={images.card_3} alt='Find my Medical Spot App' description='Find my Medical Spot App...Coming soon...' />
            <WorkCard image={images.logo} alt='andre matos creative logo' description='Coming soon...'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Works), 'Work');