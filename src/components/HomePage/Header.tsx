import React, {useState} from 'react';
import '../../styles/HomePage/Header.css';

type ClassButton = 'active' | '';

function Header() {
	const [scroll, setScroll] = useState<boolean>(false);
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	const [closeButton, setCloseButton] = useState<boolean>(false);
	const [classUl, setClassUl] = useState<ClassButton>('');
	window.addEventListener('scroll', handleScroll);
	window.addEventListener('resize', handleResize);

	function handleResize() {
		setWindowWidth(window.innerWidth);
	}

	function handleScroll(): void {
		const {scrollY} = window;
		if (scroll && scrollY > 0) {
			return;
		}

		if (scrollY <= 0) {
			setScroll(false);
			return;
		}

		if (scrollY > 0) {
			setScroll(true);
		}
	}

	function handleClick(): void {
		if (closeButton) {
			setCloseButton(false);
			setClassUl('');
			return;
		}

		setCloseButton(true);
		setClassUl('active');
	}

	return (<>
		{windowWidth < 461
			? <header>
				<a href='https://www.linkedin.com/in/felipe-de-almeida-gomes/' target='_blank' rel='noreferrer'>
					<h1>Felipe</h1>
				</a>
				<ul className={classUl}>
					<a href='#homePage' onClick={() => {
						handleClick();
					}}>
						<li>Incio</li>
					</a>
					<a href='#aboutPage' onClick={() => {
						handleClick();
					}}>
						<li>Sobre</li>
					</a>
					<a href='#skillPage' onClick={() => {
						handleClick();
					}}>
						<li>Habilidades</li>
					</a>
					<a href='#projectPage' onClick={() => {
						handleClick();
					}}>
						<li>Projetos</li>
					</a>
				</ul>
				<button
					onClick={() => {
						handleClick();
					}}>
					<img src={closeButton
						? 'menu-close.svg'
						: 'menu-open.svg'} alt='Abrir menu' />
				</button>
			</header>
			:	<header className={scroll ? 'active' : ''}>
				<a href='https://www.linkedin.com/in/felipe-de-almeida-gomes/' target='_blank' rel='noreferrer'>
					<h1>Felipe</h1>
				</a>
				<ul>
					<a href='#homePage'>
						<li>Incio</li>
					</a>
					<a href='#aboutPage'>
						<li>Sobre</li>
					</a>
					<a href='#skillPage'>
						<li>Habilidades</li>
					</a>
					<a href='#projectPage'>
						<li>Projetos</li>
					</a>
				</ul>
			</header>
		}
	</>
	);
}

export default Header;
