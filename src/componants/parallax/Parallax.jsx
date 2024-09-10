import './Parallax.scss';
import { useState } from 'react';
import { Scroll } from '../sidebar/Icons';
import { motion } from 'framer-motion';

const Parallax = ({ type }) => {
	const [positionX, setPositionX] = useState('center');
	const [positionY, setPositionY] = useState('center');

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;

		const horizontalPosition = (clientX / window.innerWidth) * 100;
		const verticalPosition = (clientY / window.innerHeight) * 100;

		setPositionX(horizontalPosition);
		setPositionY(verticalPosition);
	};

	const scrollVariant = {
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

		scroll: {
			y: 10,
			opacity: 0,
			transition: {
				duration: 2,
				repeat: Infinity,
				repeatType: 'mirror',
			},
		},
	};

	return (
		<div className='parallax'>
			<div className='parralax__projects' onMouseMove={handleMouseMove}>
				<motion.div className='title'>
					<h1>{type === 'projects' ? 'My Recent Projects' : 'Who Am I?'}</h1>
					<motion.div variants={scrollVariant} animate='scroll'>
						<p style={{ color: 'white' }}>scroll</p>
						<Scroll />
					</motion.div>
				</motion.div>
				<motion.div className='mountain'></motion.div>
				<motion.div className='planets'></motion.div>
				<motion.div
					className='stars'
					style={{
						backgroundPositionX: positionX,
						backgroundPositionY: positionY,
					}}
				></motion.div>
			</div>
		</div>
	);
};

export default Parallax;
