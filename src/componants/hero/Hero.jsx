import React from 'react';
import './Hero.scss';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='intro'>
				<div className='title'>I am a full stack developer (MERN) </div>
				<div className='anchor'>
					<a href='#projects'>Project</a>
					<a href='#contact'>Contact</a>
				</div>
			</div>
			<div className='photo'>
				<img src='/avatar2.png' alt='img' />
			</div>
		</section>
	);
};

export default Hero;
