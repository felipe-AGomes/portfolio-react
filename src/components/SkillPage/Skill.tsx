import React from 'react';
import '../../styles/SkillPage/Skill.css';

type Prop = {
	skill: string;
	img: JSX.Element;
};

function Skill({skill, img}: Prop) {
	console.log(img);

	return (
		<h1 className='skill-card'>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<h3>{skill}</h3>
			{img}
		</h1>
	);
}

export default Skill;
