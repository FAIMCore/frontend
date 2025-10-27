import AnimatedGrid from './components/animations/AnimatedGrid';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<div style={{ width: '100%', height: '100vh' }}>
				<AnimatedGrid />
			</div>
		</ThemeProvider>
	);
}

export default App;
