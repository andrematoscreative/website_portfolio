import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, sanity } from '../../sanity';
import skills from './skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    sanity.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (

    <div className='app__Skills app__flex'>
      <div className='app__master-container'>
          <div className='app__Skills-title'>

            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1 }}
            className='app__Skills-title-title'>&lt;skills/&gt;
            </motion.div>

            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }}
            className='app__Skills-title-info'>Always learning, always growing. Follow my journey as I sharpen my skills and challenge myself.
            <div className='app__Skills-blink'>|</div>
            </motion.div>
          
          </div>

        <div className="app__Skills-container">
          <motion.div className="app__Skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              className="app__Skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__Skills-item-item app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div> 
    </div>
  );
};

export default AppWrap(MotionWrap(Skills),'Skills');