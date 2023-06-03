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

        <>
          <div className='app__Skills-title'>
            <div className='app__Skills-title-title'>my Skills_</div>
            <div className='app__Skills-title-info'>Always learning, always growing. Follow my journey as I sharpen my skills and challenge myself</div>
          </div>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div> 
    </>
  );
};

export default AppWrap(Skills, 'Skills');