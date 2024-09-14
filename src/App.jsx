import React from 'react';
import './App.scss';

import Navbar from './componants/navbar/Navbar';
import Hero from './componants/hero/Hero';

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Hero />
		</div>
	);
};

export default App;

