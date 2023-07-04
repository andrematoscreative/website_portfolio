import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, sanity } from '../../sanity';
import testimonials from './testimonials.scss';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';

    sanity.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <div className='app__Testimonials app__flex'>
      <div className='app__master-container'>
        <div className='app__testimonials-info'>
          <div className='app__testimonials-title'>

            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1 }}
            className='app__testimonials-title-title'>my testimonials
            </motion.div>

            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }}
            className='app__testimonials-title-info'>Helping to empower individuals and organizations to reach their fullest potential.
            <div className='app__Skills-blink'>|</div>
            </motion.div>
          </div>

          <div className='app__testimonials-box'> 

              <div className="app__testimonials-btn-left app__flex"
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>

              {testimonials.length && (
                <>
                <div className="app__testimonials-item">
                  <img src={urlFor(testimonials[currentIndex].imgUrl)} alt={testimonials[currentIndex].name} />
                  <div className="app__testimonials-content">
                    <p className="app__testimonials-content-text">{testimonials[currentIndex].feedback}</p>

                    <div className='app__testimonials-content-titles'>
                      <h4 className="app__testimonials-content-name">{testimonials[currentIndex].name}</h4>
                      <h5 className="app__testimonials-content-job">{testimonials[currentIndex].company}</h5>
                    </div>

                  </div>
                </div>
              </>
              )}

              <div className="app__testimonials-btn-right app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Testimonials,'app__testimonials'),'Testimonials');