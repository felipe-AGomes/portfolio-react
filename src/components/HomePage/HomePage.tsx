import React from 'react';
import '../../styles/HomePage/HomePage.css';
import Header from './Header';
import Presentation from './Presentation';

function HomePage() {
	return (
		<section id='homePage'	>
			<Header />
			<Presentation />
			<img src='../../../public/IMG_20221211_154038.jpg' alt='Person Image' />
		</section>
	);
}

export default HomePage;
