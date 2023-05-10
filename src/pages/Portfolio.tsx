import React from 'react';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import ProjectPage from '../components/ProjectPage';
import SkillPage from '../components/SkillPage';

function Portfolio() {
	return (
		<main>
			<HomePage />
			<AboutPage />
			<SkillPage />
			<ProjectPage />
		</main>
	);
}

export default Portfolio;
