import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
	const [click, setClick] = useState(null);
	const links = ['Contact', 'About', 'Projects'];

	const handleClick = (index) => {
		setClick(click === index ? null : index);
	};

	return (
		<nav className='navbar modFont'>
			<div className='left'>
				<div>Rabiul</div>
			</div>

			<div className='right'>
				{links.map((link, index) => (
					<div className={`link${index}`} key={index}>
						<a
							href={`#${link.toLowerCase()}`}
							onClick={() => handleClick(index)}
						>
							{link}
						</a>

						{click === index && (
							<motion.div
								className='ball'
								initial={{ y: 10, opacity: 0 }}
								animate={{ y: 5, opacity: 1 }}
								transition={{ duration: 0.5 }}
							></motion.div>
						)}
					</div>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
