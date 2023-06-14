import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
/* import { urlFor, sanity } from '../../sanity'; */
import works from './works.scss';


const Works = () => {
    const [itemsToShow, setItemsToShow] = useState(4);
    const [searchTerm, setSearchTerm] = useState('');
  
    const loadMoreItems = () => {
      setItemsToShow(itemsToShow + itemsToShow);
    };
  return (
  <div className='app__Work app__flex'>
    <div className='app__master-container'>
        <div className='app__Work-info'>
          <div className='app__Work-title'>
            <div className='app__Work-title-title'>my work_</div>
            <div className='app__Work-title-info'>Check some of my work...Crafting the future, one project at a time.</div>
          </div>
        </div>
      <div className="app__Work-cards-container">
              
              
  
        <div className='app__Work-card1'></div>
        <div className='app__Work-card2'></div>
      </div>
    </div>
  </div>

  )
}

export default AppWrap(Works,'Work');