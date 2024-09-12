import React from 'react';
import './Hero.scss';
import { Scroll } from '../sidebar/Icons';
import { motion } from 'framer-motion';

const Hero = () => {
	const heroVariants = {
		initial: {
			x: -100,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,

			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},

		scrollIcon: {
			y: 10,
			opacity: 0,
			transition: {
				duration: 2,
				repeat: Infinity,
				repeatType: 'mirror',
			},
		},

		backgroundItem: {
			x: -1250,
			transition: {
				duration: 40,
				repeat: Infinity,
				repeatType: 'mirror',
			},
		},
	};

	return (
		<div id='Hero' className='hero'>
			<motion.div
				className='hero__left'
				variants={heroVariants}
				initial='initial'
				animate='animate'
			>
				<motion.h2 variants={heroVariants}>Md Rabiul</motion.h2>

				<motion.h1 variants={heroVariants}>Full Stack developer</motion.h1>

				<motion.div className='buttons' variants={heroVariants}>
					<motion.button variants={heroVariants}>
						{' '}
						<a href='#Projects'>See my works</a>{' '}
					</motion.button>
					<motion.button variants={heroVariants}>
						{' '}
						<a href='#Contact'> Get in touch</a>
					</motion.button>
				</motion.div>

				<a href='#Projects'>
					<motion.div
						className='scrollIcon'
						variants={heroVariants}
						animate='scrollIcon'
					>
						<Scroll />
					</motion.div>
				</a>
			</motion.div>

			<motion.div className='sliderText' variants={heroVariants}>
				<motion.p variants={heroVariants} animate='backgroundItem'>
					Fontend Backend and Mobile App Developement
				</motion.p>
			</motion.div>

			<div className='hero__right'>
				<img src='/avatar2.png' alt='img' />
			</div>
		</div>
	);
};

export default Hero;
