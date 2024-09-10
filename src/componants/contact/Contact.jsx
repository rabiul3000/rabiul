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
				opacity: 1,
				transition: { type: 'spring', duration: 2 },
				x: 0,
			}}
		>
			<a href='mailto:mdrabiul.asia@gmail.com' target='_blank'>
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
			<a href='https://github.com/rabiul3000' target='_blank'>
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

			<a href='https://github.com/rabiul3000' target='_blank'>
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
						<img src='/linkedin.svg' alt='linkedin' />
					</div>
				</motion.div>
			</a>

			<a href='https://www.facebook.com/people/Md-Rabiul/61557375413667/?mibextid=ZbWKwL' target='_blank'>
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
