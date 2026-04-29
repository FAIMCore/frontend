import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AnimatedGrid from './components/animations/AnimatedGrid';
import {
	About,
	Services,
	Portfolio,
	Pricing,
	Testimonials,
	FAQ,
	Team,
	TechStack,
	Contact,
	Footer,
} from './components/sections';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import SEO from './components/SEO/SEO';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';
import StickyCallBar from './components/ui/StickyCallBar';

function App() {
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
						<Pricing />
						<Testimonials />
						<FAQ />
						<Team />
						<TechStack />
						<Contact />
						<Footer />
					</main>
					<ScrollToTop />
					<StickyCallBar />
				</ThemeProvider>
			</LanguageProvider>
		</HelmetProvider>
	);
}

export default App;
