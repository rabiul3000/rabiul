import React, { useRef, useState } from 'react';
import './Projects.scss';
import Project from './project/Project';

const Projects = () => {
	return (
		<div id='Projects' className='projects'>
			<Project />
			<Project />
		</div>
	);
};

export default Projects;
