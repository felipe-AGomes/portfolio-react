import React from 'react';
import '../../styles/HomePage/HomePage.css';
import Header from './Header';
import Presentation from './Presentation';

function HomePage() {
	function handleScroll() {
		console.log('Olá,');
	}

	return (
		<section id='homePage' onScroll={handleScroll}>
			<Header />
			<Presentation />
			<img src='../../../public/IMG_20221211_154038.jpg' alt='Person Image' />

		</section>
	);
}

export default HomePage;
