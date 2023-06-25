/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/object-curly-spacing */
import React, { useState } from 'react';
import './ProjectPage.css';
import Modal from '../Modal';
import Project from '../Project';

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

function ProjectPage() {
	const [projectModal, setProjectModal] = useState<ModalProject>({ modal: '' });
	const projects: ProjectArgs[] = [
		{
			title: 'Portfólio',
			aboutContent: (
				<div>
					<p>
						Estou orgulhoso de apresentar meu portfólio. Durante sua criação, tive a
						oportunidade de aprender muito e me desenvolver como profissional. Foi uma
						jornada desafiadora, que me permitiu colocar em prática tudo o que havia
						aprendido até então.
					</p>{' '}
					<br />
					<p>
						Meu objetivo era criar um design minimalista, que transmitisse uma imagem
						profissional e moderna, ao mesmo tempo que aplicava o máximo de
						conhecimento que adquiri ao longo do processo. Utilizei diversas
						ferramentas e tecnologias para tornar o projeto mais dinâmico e
						interativo, e acredito que o resultado ficou incrível.
					</p>{' '}
				</div>
			),
			srcs: [{ srcImg: 'portfolio.png' }, { srcMp4: 'portfolio.mp4' }],
			repos: [
				{ repositorio: 'https://github.com/felipe-AGomes/portfolio-react' },
				{
					linkedin:
						'https://www.linkedin.com/posts/felipe-de-almeida-gomes_design-oportunidade-activity-7070081055952691200-cB6d?utm_source=share&utm_medium=member_desktop',
				},
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
			title: 'Calculadora React',
			aboutContent: (
				<div>
					<p>
						Meu projeto é uma calculadora completa desenvolvida em React. Com este
						projeto, busco criar uma calculadora moderna e funcional, que ofereça aos
						usuários uma experiência agradável e eficiente para realizar cálculos
						matemáticos.
					</p>{' '}
					<br />
					<p>
						A calculadora contará com recursos avançados, como um histórico dos
						cálculos efetuados, permitindo que os usuários revisitem cálculos
						anteriores e façam referência a eles quando necessário. Além disso, terá
						opções de temas claro e escuro, para que cada usuário possa personalizar a
						aparência da calculadora de acordo com suas preferências.
					</p>{' '}
					<br />
					<p>
						Uma característica essencial do meu projeto é a abordagem segura para os
						cálculos. Em vez de utilizar o método &quot;eval&quot;, que pode
						apresentar riscos de segurança, implementei algoritmos matemáticos
						personalizados para processar as expressões inseridas pelos usuários. Isso
						garante que os cálculos sejam realizados de forma confiável e segura, sem
						comprometer a integridade da aplicação.
					</p>
				</div>
			),
			srcs: [{ srcImg: 'calculator.png' }, { srcMp4: 'calculator.mp4' }],
			repos: [
				{ repositorio: 'https://github.com/felipe-AGomes/calculadora-react' },
				{ linkedin: '' },
				{ projeto: 'https://calculadora-pro-react.netlify.app/' },
			],
		},
		{
			title: "Today's Look",
			repos: [
				{ repositorio: 'https://github.com/felipe-AGomes/todays-look-nextjs' },
				{
					linkedin:
						'https://www.linkedin.com/posts/felipe-de-almeida-gomes_este-foi-o-meu-projeto-mais-completo-at%C3%A9-activity-7062225033753968640-catV?utm_source=share&utm_medium=member_desktop',
				},
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
		{
			title: 'Hub Component',
			repos: [
				{ repositorio: 'https://github.com/felipe-AGomes/components-hub' },
				{ linkedin: '' },
				{ projeto: 'https://components-hub.vercel.app' },
			],
			aboutContent: (
				<div>
					<p>
						Este projeto surgiu com a proposta de criar um hub que reúna todos os meus
						componentes, visando principalmente a organização e centralização dos
						estilos. Através desse hub, pretendo facilitar o acesso e o gerenciamento
						de todos os elementos utilizados em meus projetos.
					</p>
				</div>
			),
			srcs: [{ srcImg: 'hubComponent.png' }, { srcMp4: 'hubComponent.mp4' }],
		},
		{
			title: 'Carrinho de compras Mercado Livre',
			repos: [
				{
					repositorio: 'https://github.com/felipe-AGomes/mercadolivre-shopping-cart',
				},
				{ linkedin: '' },
				{ projeto: 'https://mercadolivre-shopping-cart.vercel.app' },
			],
			aboutContent: (
				<div>
					<p>
						Foi desenvolvido um projeto que utiliza a API do Mercado Livre,
						proporcionando a facilidade de buscar por qualquer produto e exibir todos
						os itens disponíveis para venda no site. Além disso, é possível realizar a
						ordenação dos resultados por relevância, preço mais alto ou preço mais
						baixo. Também foi incluído um carrinho de compras que permite somar todos
						os produtos selecionados.
					</p>
				</div>
			),
			srcs: [
				{ srcImg: 'mercadolivre-shopping-cart.png' },
				{ srcMp4: 'mercadolivre-shopping-cart.mp4' },
			],
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
