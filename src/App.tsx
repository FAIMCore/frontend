import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AnimatedGrid from './components/animations/AnimatedGrid';
import { About, Services, Portfolio, Team, Blog, Contact, Footer } from './components/sections';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import SEO from './components/SEO/SEO';

function App() {
	// Reset scroll position and clear hash on page load/refresh
	useEffect(() => {
		if (window.location.hash) {
			history.replaceState(null, '', window.location.pathname);
		}
		window.scrollTo(0, 0);
	}, []);

	return (
		<HelmetProvider>
			<LanguageProvider>
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
			</LanguageProvider>
		</HelmetProvider>
	);
}

export default App;