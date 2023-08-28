import React from 'react';
import { Navbar,About,Contact,Header,Skills,Works,Testimonials,Footer } from './container';
import './app.scss';

export const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
      <div className='app__background'>

        <About />
        <Works />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
        <Footer />
    </div>
  );
}

export default App