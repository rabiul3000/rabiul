import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import Navbar from './componants/navbar/Navbar';
import Projects from './componants/projects/Projects';
import Sidebar from './componants/sidebar/Sidebar';
import Contact from './componants/contact/Contact';
import Hero from './componants/hero/Hero';
import Parallax from './componants/parallax/Parallax';
import About from './componants/about/About';
import { useMotionValue, motion } from 'framer-motion';

const App = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const handleMouseMove = (e) => {
		const { pageX, pageY } = e;

		const element = e.currentTarget;
		const { left, top } = element.getBoundingClientRect();

		// Calculate mouse position relative to the element
		const mouseX = pageX - (left + window.scrollX);
		const mouseY = pageY - (top + window.scrollY);

		x.set(mouseX);
		y.set(mouseY);
	};

	return (
		<div className='app' onMouseMove={handleMouseMove}>
			<motion.div
				className='cursor'
				style={{
					top: y,
					left: x,
				}}
			></motion.div>
			<section>
				<Sidebar />
				<Navbar />
				<Hero />
			</section>

			<section>
				<Parallax type={'projects'} />
			</section>

			<section>
				<Projects />
			</section>

			<section>
				<Parallax type={'about'} />
			</section>

			<section>
				<About />
			</section>

			<section>
				<Contact />
			</section>
		</div>
	);
};

export default App;

