import React, { useEffect, useRef } from 'react';
import './App.scss';
import Navbar from './componants/navbar/Navbar';
import Hero from './componants/hero/Hero';
import Projects from './componants/projects/Projects';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import Locomotive's CSS

const App = () => {
  const scrollRef = useRef(null); // Create a ref for the scroll container

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // Pass the scroll container
      smooth: true, // Enable smooth scrolling
      multiplier: 1.2, // Control speed
    });

    return () => {
      // Clean up Locomotive Scroll on component unmount
      scroll.destroy();
    };
  }, []);

  return (
    <div className="app" ref={scrollRef} data-scroll-container> {/* Set up the scroll container */}
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
