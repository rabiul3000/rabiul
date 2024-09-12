import React from 'react';
import { motion } from 'framer-motion';
import './Project.scss';

const Project = () => {
	return (
		<div className='project__container'>
			<div className='project'>
				<motion.div className='left'>
					<a
						href='https://microdrive-client.vercel.app/'
						target='_blank'
						className='link'
					>
						<motion.img
							className='image'
							initial={{ opacity: 0, scale: 0.2 }}
							whileInView={{
								opacity: 1,
								scale: 1,
								transition: { duration: 1, ease: 'easeInOut' },
							}}
							src='/microdrive.png'
							alt='img'
						/>
					</a>
				</motion.div>

				<motion.div className='right'>
					<div className='description'>
						{'A minimalist website that store your images videos pdf etc.'
							.split(' ')
							.map((item, index) => (
								<motion.span
									key={index}
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: Math.random() }}
								>
									{item}{' '}
								</motion.span>
							))}
					</div>
					<ul className='tags'>
						{['#Backend', 'React', 'Scss', 'Express', 'Mongodb'].map(
							(item, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: Math.random() }}
								>
									{item}
								</motion.li>
							)
						)}
					</ul>
				</motion.div>
			</div>
		</div>
	);
};

export default Project;
