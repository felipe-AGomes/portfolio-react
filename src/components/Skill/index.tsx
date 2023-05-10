/* eslint-disable @typescript-eslint/object-curly-spacing */
import React from 'react';
import './Skill.css';

type Prop = {
	skill: string;
	img: JSX.Element;
};

function Skill({ skill, img }: Prop) {
	return (
		<div className='skill-card'>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<h3>{skill}</h3>
			{img}
		</div>
	);
}

export default Skill;
