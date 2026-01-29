import { useTheme } from '../../../contexts/ThemeContext';
import styles from './Logo.module.scss';

const Logo = () => {
	const { theme } = useTheme();

	// Терракотовая палитра
	const primaryColor = theme === 'light' ? '#B85C38' : '#D4856A';
	const secondaryColor = theme === 'light' ? '#2D2D2D' : '#F5F5F5';

	return (
		<svg
			viewBox='0 0 230 50'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={styles.logo}>

			{/* Геометрический ромб */}
			<g className={styles.diamond}>
				<path
					d='M20 4 L36 25 L20 46 L4 25 Z'
					fill={primaryColor}
				/>
				{/* Внутренний вырез */}
				<path
					d='M20 12 L28 25 L20 38 L12 25 Z'
					fill={theme === 'light' ? '#FFF5F0' : '#1a1a1a'}
				/>
			</g>

			{/* FAIMCore текст */}
			<text
				x='48'
				y='33'
				fontFamily='Inter, system-ui, sans-serif'
				fontSize='24'
				fontWeight='600'
				fill={secondaryColor}
				letterSpacing='-0.5'>
				FAIM
			</text>
			<text
				x='110'
				y='33'
				fontFamily='Inter, system-ui, sans-serif'
				fontSize='24'
				fontWeight='700'
				fill={primaryColor}
				letterSpacing='-0.5'>
				Core
			</text>
		</svg>
	);
};

export default Logo;
