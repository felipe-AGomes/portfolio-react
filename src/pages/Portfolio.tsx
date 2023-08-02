/* eslint-disable @typescript-eslint/object-curly-spacing */
import React, { useEffect } from 'react';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import ProjectPage from '../components/ProjectPage';
import SkillPage from '../components/SkillPage';
import { generateDigitalSignature } from 'assinatura-digital';

function Portfolio() {
	useEffect(() => {
		console.clear();
		const transformedSignature = generateDigitalSignature(
			'felipe-dev',
			'falmeidagomes13@gmail.com',
			'Bem-vindo ao meu site! Sinta-se à vontade para explorar e desenvolver com paixão!',
		);

		console.log(...transformedSignature);
	}, []);

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
