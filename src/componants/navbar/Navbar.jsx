import React from 'react';
import './Navbar.scss';

const Navbar = () => {
	return (
		<div className='navbar'>
            
			<div className='name'>
				<div>Rabiul</div>
			</div>
            
			<div className='pages'>
				<div>About</div>
				<div>Projects</div>
				<div>Contact</div>
			</div>

		</div>
	);
};

export default Navbar;
