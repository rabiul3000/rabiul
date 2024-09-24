import React, { useEffect, useRef } from 'react';
import './Brief.scss';

const Brief = () => {
	const paragraph =
		"I'm a Full Stack web developer with over 4 years of experience. At the crossroads of web, app design and development, the diversity of my skills allows me to approach design challenges from multiple perspectives. My technologies include Express.js, React.js, MongoDB, Firebase, MySQL, etc. I love to work and transform ideas into reality. I'm currently available for a freelancing position.";

	// Split the paragraph into words
	const words = paragraph.split(' ');

	const wordRefs = useRef([]); // Store refs for each word

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.style.color = '#f1dada'; // Change color to black when in view
					} else {
						entry.target.style.color = 'black'; // Change color back to grey when out of view
					}
				});
			},
			{
				threshold: 0.1, // 10% of each word should be visible
			}
		);

		// Observe each word span
		wordRefs.current.forEach((word) => {
			if (word) {
				observer.observe(word);
			}
		});

		return () => {
			// Unobserve on cleanup
			wordRefs.current.forEach((word) => {
				if (word) {
					observer.unobserve(word);
				}
			});
		};
	}, []);

	return (
		<section className='brief'>
			<p>
				{words.map((word, index) => (
					<span
						key={index}
						ref={(el) => (wordRefs.current[index] = el)} // Create ref for each word
						style={{ color: 'grey', transition: 'color 0.3s ease-in-out' }} // Set initial color and transition
					>
						{word}{' '}
					</span>
				))}
			</p>
			<div className='more'>
				<div className='dot'></div>
				<a href=''>Learn More</a>
			</div>
		</section>
	);
};

export default Brief;
