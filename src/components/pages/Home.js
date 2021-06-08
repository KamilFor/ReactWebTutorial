import { Router } from 'react-router';
import '../../App.css';
import Cards from '../Cards/Cards';
import HeroSection from '../HeroSection/HeroSection';

function Home() {
	return (
		<>
			<HeroSection />
			<Cards />
		</>
	);
}

export default Home;
