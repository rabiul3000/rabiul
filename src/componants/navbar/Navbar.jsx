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
		<section className='navbar modFont'>
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
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
							></motion.div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Navbar;
