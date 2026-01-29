import { HelmetProvider } from 'react-helmet-async';
import AnimatedGrid from './components/animations/AnimatedGrid';
import { About, Services, Portfolio, Team, Blog, Contact, Footer } from './components/sections';
import { ThemeProvider } from './contexts/ThemeContext';
import SEO from './components/SEO/SEO';

function App() {
	return (
		<HelmetProvider>
			<ThemeProvider>
				<SEO />
				<main>
					<AnimatedGrid />
					<About />
					<Services />
					<Portfolio />
					<Team />
					<Blog />
					<Contact />
					<Footer />
				</main>
			</ThemeProvider>
		</HelmetProvider>
	);
}

export default App;