import { useTheme } from '../../../contexts/ThemeContext';
import styles from './Logo.module.scss';

const Logo = () => {
	const { theme } = useTheme();

	// Терракотовая палитра
	const primaryColor = theme === 'light' ? '#B85C38' : '#D4856A';
	const secondaryColor = theme === 'light' ? '#2D2D2D' : '#F5F5F5';

	return (
		<svg
			viewBox='0 0 340 72'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={styles.logo}>

			{/* Геометрический ромб */}
			<g className={styles.diamond}>
				<path
					d='M30 4 L56 36 L30 68 L4 36 Z'
					fill={primaryColor}
				/>
				{/* Внутренний вырез */}
				<path
					d='M30 18 L44 36 L30 54 L16 36 Z'
					fill={theme === 'light' ? '#FFF5F0' : '#1a1a1a'}
				/>
			</g>

			{/* FAIMCore текст */}
			<text
				x='68'
				y='50'
				fontFamily='Inter, system-ui, sans-serif'
				fontSize='42'
				fontWeight='600'
				fill={secondaryColor}
				letterSpacing='-0.5'>
				FAIM
			</text>
			<text
				x='176'
				y='50'
				fontFamily='Inter, system-ui, sans-serif'
				fontSize='42'
				fontWeight='700'
				fill={primaryColor}
				letterSpacing='-0.5'>
				Core
			</text>
		</svg>
	);
};

export default Logo;
