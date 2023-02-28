import React from 'react';
import '../../styles/AboutPage/AboutPage.css';

function AboutPage() {
	return (
		<section id='aboutPage' className='page'>
			<div className='header'><h2>SOBRE MIM</h2></div>
			<div className='about-content'>
				<div className='description'>
					<p>Olá</p>
					<p>Me chamo Felipe Gomes, estudo análise e desenvolvimento de sistema. Sou apaixonado por programação e passo boa parte dos meus dias fazendo isso, sempre me mantenho atualizado fazendo pesquisas e cursos da área. Já desenvolvi alguns projetos de automação utilizando Puppeteer, algumas aplicações single page e login pages.</p>
				</div>
				<div className='img-content'>
					<img src='../../../public/IMG_20221211_154625.jpg' alt='Person Image' />
				</div>
			</div>
		</section>
	);
}

export default AboutPage;
