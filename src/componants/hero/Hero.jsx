import React from 'react';
import './Hero.scss';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='intro'>
				<h1 className='title'>Full Stack developer</h1>
				<p className='address'>From Dhaka, Bangladesh</p>
				<div className='announce'>
					<div className='dot'></div>
					<p>Available for freelancing</p>
				</div>
			</div>

			<div className='photo'>
				<img src='/me.png' alt='img' />
			</div>
		</section>
	);
};

export default Hero;
