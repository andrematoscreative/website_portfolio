import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

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
    <>
    <h2 className="head-text">Testimonials</h2>
      {testimonials.length && (
        <>
          <div className="app__testimonials-item app__flex">
            <img src={urlFor(testimonials[currentIndex].imgUrl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonials-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonials-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Testimonials,'app__testimonials'),'Testimonials');