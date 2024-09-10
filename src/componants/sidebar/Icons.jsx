import React from 'react';

export const Align = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='30px'
			height='30px'
			viewBox='0 0 24 24'
			fill='none'
		>
			<path
				d='M6 12h12M4 16h12M8 8h12'
				stroke='#000000'
				strokeWidth='1.5'
				strokeMiterlimit='10'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export const Clear = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='30px'
			height='30px'
			viewBox='0 0 21 21'
		>
			<g
				fill='none'
				fillRule='evenodd'
				stroke='#000000'
				strokeLinecap='round'
				stroke-linejoin='round'
				transform='translate(1 3)'
			>
				<path d='m14.5 4.5-3 3 3 3' />

				<path d='m18.5 7.5h-7' />

				<path d='m4.5 4.5 3 3-3 3' />

				<path d='m7.5 7.5h-7' />

				<path d='m9.5.5v14' />
			</g>
		</svg>
	);
};

export const Scroll = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='36'
		height='36'
		fill='white'
		className='bi bi-arrow-down'
		viewBox='0 0 16 16'
	>
		<path
			fillRule='evenodd'
			d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1'
		/>
	</svg>
);
