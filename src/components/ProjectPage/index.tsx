/* eslint-disable @typescript-eslint/object-curly-spacing */
import React, { useState } from 'react';
import Project from '../Project';
import './ProjectPage.css';
import Modal from '../Modal';

export type Srcs = [{ srcImg: string }, { srcMp4: string }];

export type Repos = [
	{ repositorio: string },
	{ linkedin: string },
	{ projeto: string },
];

export type ProjectArgs = {
	readonly title: string;
	readonly aboutContent: JSX.Element;
	readonly srcs: Srcs;
	readonly repos: Repos;
};

export type ModalProject = {
	modal: 'active' | '';
	title?: string;
	aboutContent?: JSX.Element;
	srcs?: Srcs;
	repos?: Repos;
};

const t = 'homePagePortfolio.png';
function ProjectPage() {
	const [projectModal, setProjectModal] = useState<ModalProject>({ modal: '' });
	const projects: ProjectArgs[] = [
		{
			title: 'Portfólio',
			aboutContent: (
				<div>
					<p>
						Estou extremamente orgulhoso de apresentar meu primeiro projeto: meu
						próprio portfólio. Durante sua criação, tive a oportunidade de aprender
						muito e me desenvolver como profissional. Foi uma jornada desafiadora, que
						me permitiu colocar em prática tudo o que havia aprendido até então.
					</p>{' '}
					<br />
					<p>
						Confesso que houve momentos em que o projeto ficou parado por falta de
						conhecimento, mas isso não me impediu de buscar novos conhecimentos e
						habilidades. Com determinação e persistência, consegui superar os
						obstáculos e finalmente concluir meu portfólio.
					</p>{' '}
					<br />
					<p>
						Meu objetivo era criar um design minimalista, que transmitisse uma imagem
						profissional e moderna, ao mesmo tempo que aplicava o máximo de
						conhecimento que adquiri ao longo do processo. Utilizei diversas
						ferramentas e tecnologias para tornar o projeto mais dinâmico e
						interativo, e acredito que o resultado ficou incrível.
					</p>
				</div>
			),
			srcs: [{ srcImg: 'homePagePortfolio.png' }, { srcMp4: 'MyPortfolio.mp4' }],
			repos: [
				{ repositorio: 'https://github.com/felipe-AGomes/portfolio-react' },
				{ linkedin: '' },
				{ projeto: '' },
			],
		},
		{
			title: 'Jogo da Memória',
			aboutContent: (
				<div>
					<p>
						Aqui está um projeto que me enche de orgulho: um jogo da Memória criado
						com apenas JavaScript puro, HTML e CSS. Embora pareça simples, há muita
						lógica por trás dele, o que tornou a experiência de desenvolvê-lo muito
						desafiadora e enriquecedora.
					</p>{' '}
					<br />
					<p>
						Foi uma jornada intensa, que me ensinou muito sobre programação, design e
						resolução de problemas. Em alguns momentos, confesso que as dores de
						cabeça foram intensas, mas nada que uma dose extra de perseverança não
						pudesse resolver.
					</p>{' '}
					<br />
					<p>
						Apesar de ter sido um projeto modesto em termos de escopo, sinto que
						aprendi muito com ele e que me ajudou a aprimorar minhas habilidades de
						programação. Afinal, o que importa não é o tamanho do projeto, mas a
						qualidade do trabalho realizado.
					</p>
				</div>
			),
			srcs: [{ srcImg: 'jogoDaMemoria.png' }, { srcMp4: 'jogoDaMemoria.mp4' }],
			repos: [
				{ repositorio: 'https://github.com/felipe-AGomes/jogo-da-memoria' },
				{ linkedin: '' },
				{ projeto: '' },
			],
		},
		{
			// eslint-disable-next-line @typescript-eslint/quotes
			title: "Today's Look",
			repos: [
				{ repositorio: 'https://github.com/felipe-AGomes/todays-look-nextjs' },
				{ linkedin: 'https://www.linkedin.com/posts/felipe-de-almeida-gomes_este-foi-o-meu-projeto-mais-completo-at%C3%A9-activity-7062225033753968640-catV?utm_source=share&utm_medium=member_desktop' },
				{ projeto: 'https://todays-look-nextjs.vercel.app/' },
			],
			aboutContent: (
				<div>
					<p>
						Este foi o meu projeto mais completo até agora! Trata-se de um projeto
						fullstack, desenvolvido com o framework Next.js. Além disso, utilizei
						autenticação com Next-auth, armazenamento de imagens no Bucket S3 da
						Amazon e implementei Typescript. Para garantir a qualidade do código,
						criei testes unitários utilizando o Jest.
					</p>{' '}
					<br />
					<p>
						O projeto é uma aplicação web que permite ao usuário se cadastrar e salvar
						imagens de roupas, categorizando-as para facilitar a organização. Também é
						possível criar conjuntos de roupas para visualizar como as peças combinam
						entre si.
					</p>{' '}
					<br />
					<p>
						Com esta aplicação, o usuário pode gerenciar seu guarda-roupa de maneira
						fácil e organizada, além de ter a possibilidade de visualizar seus
						conjuntos de roupas antes de escolher o que vestir.
					</p>
				</div>
			),
			srcs: [{ srcImg: 'todays-look.jpeg' }, { srcMp4: 'todays-look.mp4' }],
		},
	];

	function projectClick(index: number): void {
		setProjectModal({ ...projects[index], modal: 'active' });
	}

	return (
		<section
			id='projectPage'
			className='page'
		>
			<div className='header'>
				<h2>PROJETOS</h2>
			</div>
			<div className='project-content'>
				{projects.map((project, index) => (
					<Project
						key={project.title}
						index={index}
						data={project}
						projectClick={(index: number) => {
							projectClick(index);
						}}
					/>
				))}
			</div>
			<Modal data={projectModal} />
		</section>
	);
}

export default ProjectPage;
