import React, { useState } from 'react';
import { Align, Clear } from './Icons';
import { motion } from 'framer-motion';
import './Sidebar.scss';

const Sidebar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	const variants = {
		hidden: {
			// clipPath: 'circle(5% at 9% 25px)',
			transition: {
				type: 'spring',
				stiffness: 400,
				delay: 0.1,
				damping: 40,
				staggerChildren: 0.5,
				staggerDirection: 1,
			},
		},
		visible: {
			// clipPath: 'circle(200% at 9% 25px)',
			opacity: 1,

			transition: {
				type: 'spring',
				stiffness: 80,
				damping: 20,
				staggerChildren: 0.2,
				staggerDirection: -1,
			},
		},
	};

	return (
		<div className='sidebar'>
			<button onClick={() => setShowSidebar((prev) => !prev)}>
				<Align />
			</button>

			<motion.div
				className={`links ${showSidebar ? 'visible' : 'hidden'}`}
				variants={variants}
				animate={showSidebar ? 'visible' : 'hidden'}
			>
				{['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
					<motion.div
						key={index}
						variants={variants}
						whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
						whileTap={{ scale: 0.5 }}
					>
						<a
							href={`#${item}`}
							style={{ color: 'inherit' }}
							onClick={() => setShowSidebar((prev) => !prev)}
						>
							{item}
						</a>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Sidebar;
