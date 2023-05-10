/* eslint-disable @typescript-eslint/object-curly-spacing */
import React from 'react';
import './Project.css';
import { type ProjectArgs } from '../ProjectPage';

type Prop = {
	data: ProjectArgs;
	index: number;
	projectClick: (index: number) => void;
};

function Project({ data, index, projectClick }: Prop) {
	return (
		<>
			<div className='project-card'>
				<img
					src={data.srcs[0].srcImg}
					alt={data.title}
					onClick={() => {
						projectClick(index);
					}}
				/>
			</div>
		</>
	);
}

export default Project;
