import React from 'react';
import AboutPage from './components/AboutPage/AboutPage';
import HomePage from './components/HomePage/HomePage';
import SkillPage from './components/SkillPage/SkillPage';

function Portfolio() {
	return (
		<main>
			<HomePage />
			<AboutPage />
			<SkillPage />
		</main>
	);
}

export default Portfolio;
