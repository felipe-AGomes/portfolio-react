import React from 'react';
import '../../styles/HomePage/Presentation.css';
import {github, instagram, linkedin, whatSapp} from '../svg';

function Presentation() {
	return (
		<div className='presentation'>
			<h2>Olá, me chamo</h2>
			<div className='boxName'>
				<h1 className='name'>FELIPE DE ALMEIDA GOMES</h1>
			</div>
			<h2>Desenvolvedor Web</h2>
			<div className='contacts'>
				<a href='https://www.instagram.com/f.almeida13/' className='icon'>{instagram}</a>
				<a href='https://www.linkedin.com/in/felipe-de-almeida-gomes/' className='icon'>{linkedin}</a>
				<a href='https://github.com/felipe-AGomes' className='icon'>{github}</a>
				<a href='https://api.whatsapp.com/send/?phone=5548988006507' className='icon'>{whatSapp}</a>
			</div>
		</div>
	);
}

export default Presentation;
