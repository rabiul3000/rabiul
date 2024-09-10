import React, { useRef } from 'react';
import './About.scss';
import { motion, useMotionValue } from 'framer-motion';

const About = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const ref = useRef(null);

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		if (ref.current) {
			const { height, width, left, top } = ref.current.getBoundingClientRect();

			const middleX = clientX - (left + width / 2);
			const middleY = clientY - (top + height / 2);
			x.set(middleX);
			y.set(middleY);
		}
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<div id='About' className='container'>
			<div className='about'>
				<motion.div className='title'>
					{'We turn ideas into digital products & websites that people love.'
						.split(' ')
						.map((word, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0 }}
								className='word'
								whileInView={{
									opacity: 1,
									transition: {
										type: 'tween',
										delay: index / 3,
										duration: 1,
										ease: 'linear',
									},
								}}
							>
								{word}
							</motion.div>
						))}
				</motion.div>

				<div className='divider'></div>
				<div className='globe'>
					<motion.button
						ref={ref}
						onMouseMove={handleMouseMove}
						onMouseLeave={handleMouseLeave}
						style={{
							x,
							y,
							transition: 'transform 0.2s ease-out',
						}}
						transition={{
							type: 'spring',
							stiffness: 200,
							damping: 4,
							mass: 1,
						}}
					>
						About Me
					</motion.button>
				</div>

				<div className='des'>
					{`I am from Bangladesh living in Dhaka, the capital of Bangladesh. I
						 to work on meaningful projects with inspiring, creative people
						 challenge the status quo. I help companies from all over the
						 with tailor-made solutions. With each project, I push my work
						 new horizons, always putting quality first.`
						.split(' ')
						.map((word, index) => (
							<motion.div
								className='word'
								key={index}
								initial={{ opacity: 0 }}
								whileInView={{
									opacity: 1,
									transition: {
										delay: Math.random(),
										duration: 0.1,
										type: 'tween',
										ease: 'anticipate',
									},
								}}
							>
								{word}
							</motion.div>
						))}
				</div>
			</div>
		</div>
	);
};

export default About;
