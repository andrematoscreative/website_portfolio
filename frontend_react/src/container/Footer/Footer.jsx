import React from 'react';
import { images } from '../../constants';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="app__Footer">
      <div className='app__master-container'>
        <div className="app__footer--content">©2023 André Matos Creative. All rights reserved.
          <div className="app__footer-right-content">Design and code: André Matos Creative
            <div className='app__footer-logo'>
            <img src={images.logo} alt='andre matos creative logo'/>
          </div>
          </div>
        </div>
        

      </div>
    </footer>
  );
};

export default Footer;