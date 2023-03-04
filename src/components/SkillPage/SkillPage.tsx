import React from 'react';
import Skill from './Skill';
import '../svg/index';
import '../../styles/SkillPage/SkillPage.css';
import {css, express, figma, html, javaScript, python, react, typeScript} from '../svg/index';

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
			name: 'JAVASCRIPT',
			img: javaScript,
		},
		{
			name: 'REACT',
			img: react,
		},
		{
			name: 'TYPESCRIPT',
			img: typeScript,
		},
		{
			name: 'FIGMA',
			img: figma,
		},
		{
			name: 'EXPRESS',
			img: express,
		},
		{
			name: 'PYTHON',
			img: python,
		},
	];

	return (
		<section id='skillPage' className='page'>
			<div className='header'><h2>HABILIDADES</h2></div>
			<div className='skill-content'>{
				skills.map(skill => <Skill key={skill.name} skill={skill.name} img={skill.img} />)
			}</div>
		</section>
	);
}

export default SkillPage;
