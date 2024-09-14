import React from 'react';
import './Hero.scss';
const Hero = () => {
	return (
		<div className='hero'>
			<div className='intro'>
				<div className='title'>I am a full stack developer (MERN) </div>
				<div className='anchor'>
					<a>Project</a>
					<a>Contact</a>
				</div>
			</div>
			<div className='photo'>
				<img src='/avatar2.png' alt='img' />
			</div>
		</div>
	);
};

export default Hero;
