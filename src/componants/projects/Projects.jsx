import React from 'react';
import './Projects.scss';
import Project from './project/Project';

const Projects = () => {
	return (
		<div id='Projects' className='projects'>
			<Project />
			<Project />
			<Project />
		</div>
	);
};

export default Projects;
