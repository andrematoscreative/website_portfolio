import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import navbar from './navBar.scss';

const Navbar = ({active}) => {
    const[toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

  return (
    <nav className='app__navbar'>
        <div className='app__master-container'>
        <div className='app__navbar-logo'>
            <a href={`#Home`}>
            <div className='app__navbar-logo-blue'>ANDRÉ MATOS</div>
            <div className='app__navbar-logo-pink'>CREATIVE</div>
            </a>
        </div>

        <ul className='app__navbar-links'>
            {['Home', 'About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a 
                    href={`#${item}`}
                    className={item === activeLink ? 'active' : ''}
                    onClick={() => setActiveLink(item)}
                    >{item}
                    </a>
                </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenu onClick={() => setToggle(true)}/>
            { toggle && (
                <motion.div whileInView = {{ x: [300, 0] }} transition = {{ duration: 0.60, ease: 'easeOut'}}>
                    <SlClose onClick={() => setToggle(false)}/>
                    <ul>
                    {['Home', 'About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                        <li key= {item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                    ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </div>
    </nav>
  )
}

export default Navbar