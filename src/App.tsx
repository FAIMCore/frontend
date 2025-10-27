import { HelmetProvider } from 'react-helmet-async';
import AnimatedGrid from './components/animations/AnimatedGrid';
import { ThemeProvider } from './contexts/ThemeContext';
import SEO from './components/SEO/SEO';

function App() {
	return (
		<HelmetProvider>
			<ThemeProvider>
				<SEO />
				<div style={{ width: '100%', height: '100vh' }}>
					<AnimatedGrid />
				</div>
			</ThemeProvider>
		</HelmetProvider>
	);
}

export default App;
