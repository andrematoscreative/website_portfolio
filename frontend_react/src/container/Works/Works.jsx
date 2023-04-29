import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, sanity } from '../../sanity';
import works from './works.scss';


const Works = () => {
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    sanity.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((works) => works.tags.includes(item)));
      }
    }, 500);
  };
/*
  return (
    <>
      <h2 className="head-text">Work</h2>

      <div className="app__works-filter">
        {['Graphic Design', 'Web Sites', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__works-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__works-portfolio"
      >
        {filterWorks.map((works, index) => (
          <div className="app__works-item app__flex" key={index}>
            <div
              className="app__works-img app__flex"
            >
              <img src={urlFor(works.imgUrl)} alt={works.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__works-hover app__flex"
              >
                <a href={works.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={works.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__works-content app__flex">
              <h4 className="bold-text">{works.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{works.description}</p>

              <div className="app__works-tag app__flex">
                <p className="p-text">{works.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );*/
};

export default AppWrap(Works,'Work');