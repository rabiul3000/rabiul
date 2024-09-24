import React, { useEffect, useRef } from 'react';
import './App.scss';
import Navbar from './componants/navbar/Navbar';
import Hero from './componants/hero/Hero';
import Projects from './componants/projects/Projects';
import Brief from './componants/Brief/Brief';

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Hero />
			<Brief />
			<Projects />
		</div>
	);
};

export default App;

