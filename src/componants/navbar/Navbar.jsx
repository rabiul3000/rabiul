import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
	return (
		<div className='navbar' id='Home'>
			<div className='name'>
				<a href=''>Rabiul</a>
			</div>
			<div className='links'>
				<div className='github'>
					<a href='http://www.github.com' target='_blank'>
						<motion.img
							whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
							src='/github.png'
							alt='gh'
						/>
					</a>
				</div>
				<div className='facebook'>
					<a href='http://www.facebook.com' target='_blank'>
						<motion.img
							whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
							src='/facebook.png'
							alt='fb'
						/>
					</a>
				</div>
				<div className='linkedin'>
					<a href='http://www.linkedin.com' target='_blank'>
						<motion.img
							whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
							onMouseEnter={() => setEnter(true)}
							onMouseLeave={() => setEnter(false)}
							src='/linkedin.png'
							alt='ld'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
