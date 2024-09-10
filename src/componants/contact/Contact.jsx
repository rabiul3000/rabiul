import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
	return (
		<motion.div
			id='Contact'
			className='contact'
			initial={{ opacity: 0, x: -500 }}
			whileInView={{
				transition: { type: 'spring' },
				opacity: 1,
				x: 0,
			}}
			animate={{
				transition: { type: 'spring' },
				opacity: 1,
				x: 0,
			}}
		>
			<a href='mailto:mdrabiul.asia@gmail.com'>
				<motion.div
					className='card'
					whileHover={{
						rotate: 360,
						scale: 0.6,
						transition: {
							duration: 1,
						},
					}}
				>
					<div className='image'>
						<img src='/gmail.svg' alt='whatsapp' />
					</div>
				</motion.div>
			</a>
			<a href='https://github.com/rabiul3000'>
				<motion.div
					className='card'
					whileHover={{
						rotate: 360,
						scale: 0.6,
						transition: {
							duration: 1,
						},
					}}
				>
					<div className='image'>
						<img src='/github.svg' alt='whatsapp' />
					</div>
				</motion.div>
			</a>

			<a href='https://github.com/rabiul3000'>
				<motion.div
					className='card'
					whileHover={{
						rotate: 360,
						scale: 0.6,
						transition: {
							duration: 1,
						},
					}}
				>
					<div className='image'>
						<img src='/linkedin.svg' alt='whatsapp' />
					</div>
				</motion.div>
			</a>

			<a href='https://www.facebook.com/people/Md-Rabiul/61557375413667/?mibextid=ZbWKwL'>
				<motion.div
					className='card'
					whileHover={{
						opacity: 1,
						rotate: 360,
						scale: 0.6,
						transition: {
							duration: 1,
						},
					}}
				>
					<div className='image'>
						<img src='/facebook.svg' alt='whatsapp' />
					</div>
				</motion.div>
			</a>
		</motion.div>
	);
};

export default Contact;
