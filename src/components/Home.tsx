
//import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'

import React, { useEffect } from 'react'; // <-- Import useEffect
import AOS from 'aos'; // <-- Import AOS

const Home: React.FC = () => {

  // Initialize AOS when the Home component mounts
    useEffect(() => {
        AOS.init({
            duration: 1000, // Global duration for animations
            once: true,    // Animation happens only once
            easing: 'ease-out', // Default easing function
        });
    }, []); // Empty dependency array ensures it runs only once

  return (
    <div className='flex flex-col'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
