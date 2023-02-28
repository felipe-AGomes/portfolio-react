import React, {useState} from 'react';
import '../../styles/HomePage/Header.css';

function Header() {
	const [scroll, setScroll] = useState<boolean>(false);
	window.addEventListener('scroll', handleScroll);

	function handleScroll() {
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

	return (
		<header
			className={scroll ? 'active' : ''}
		>
			<a href='#'>
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
				<a href='#'>
					<li>Projetos</li>
				</a>
			</ul>
		</header>
	);
}

export default Header;
