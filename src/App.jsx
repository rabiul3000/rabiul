import React, { useEffect, useRef } from 'react';
import './App.scss';
import Navbar from './componants/navbar/Navbar';
import Hero from './componants/hero/Hero';
import Projects from './componants/projects/Projects';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import Locomotive's CSS

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // Set the scroll container reference
      smooth: true,
      multiplier: 1.2,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      // Clean up Locomotive Scroll on component unmount
      scroll.destroy();
    };
  }, []);

  return (
    <div className="app" data-scroll-container ref={scrollRef}>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
