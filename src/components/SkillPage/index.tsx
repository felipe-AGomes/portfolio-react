import React from 'react';
import Skill from '../Skill';
import '../../svg/index';
import './SkillPage.css';
import {
	css,
	express,
	figma,
	html,
	javaScript,
	jest,
	nextjs,
	node,
	react,
	typeScript,
} from '../../svg/index';

export type SkillKeys = {
	name: string;
	img: JSX.Element;
};

function SkillPage() {
	const skills: SkillKeys[] = [
		{
			name: 'HTML',
			img: html,
		},
		{
			name: 'CSS',
			img: css,
		},
		{
			name: 'REACT',
			img: react,
		},
		{
			name: 'NEXTJS',
			img: nextjs,
		},
		{
			name: 'JEST',
			img: jest,
		},
		{
			name: 'JAVASCRIPT',
			img: javaScript,
		},
		{
			name: 'TYPESCRIPT',
			img: typeScript,
		},
		{
			name: 'EXPRESS',
			img: express,
		},
		{
			name: 'NODE',
			img: node,
		},
		{
			name: 'FIGMA',
			img: figma,
		},
	];

	return (
		<section
			id='skillPage'
			className='page'
		>
			<div className='header'>
				<h2>HABILIDADES</h2>
			</div>
			<div className='skill-content'>
				{skills.map((skill) => (
					<Skill
						key={skill.name}
						skill={skill.name}
						img={skill.img}
					/>
				))}
			</div>
		</section>
	);
}

export default SkillPage;
