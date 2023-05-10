/* eslint-disable @typescript-eslint/object-curly-spacing */
import React from 'react';
import './Presentation.css';
import { github, instagram, linkedin, whatSapp } from '../../svg';

function Presentation() {
	return (
		<div className='presentation'>
			<h2>Olá, me chamo</h2>
			<div className='boxName'>
				<h1 className='name'>FELIPE DE ALMEIDA GOMES</h1>
			</div>
			<h2>Desenvolvedor Web</h2>
			<div className='contacts'>
				<a
					href='https://www.instagram.com/f.almeida13/'
					target='_blank'
					className='icon'
					rel='noreferrer'
				>
					{instagram}
				</a>
				<a
					href='https://www.linkedin.com/in/felipe-de-almeida-gomes/'
					target='_blank'
					className='icon'
					rel='noreferrer'
				>
					{linkedin}
				</a>
				<a
					href='https://github.com/felipe-AGomes'
					target='_blank'
					className='icon'
					rel='noreferrer'
				>
					{github}
				</a>
				<a
					href='https://api.whatsapp.com/send/?phone=5548988006507'
					target='_blank'
					className='icon'
					rel='noreferrer'
				>
					{whatSapp}
				</a>
			</div>
		</div>
	);
}

export default Presentation;
