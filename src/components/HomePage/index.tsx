import React from 'react';
import './HomePage.css';
import Header from '../Header';
import Presentation from '../Presentation';

function HomePage() {
	return (
		<section id='homePage'>
			<Header />
			<Presentation />
			<img
				src='profile2.jpg'
				alt='Person Image'
			/>
		</section>
	);
}

export default HomePage;
