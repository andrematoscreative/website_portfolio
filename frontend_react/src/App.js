import React from 'react';
import { SocialMedia } from './components';
import { About,Contact,Header,Skills,Works,Testimonials } from './container';
import { Navbar } from './components';


import './app.scss';



export const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Testimonials />
        <Contact />
    </div>
  );
}

export default App