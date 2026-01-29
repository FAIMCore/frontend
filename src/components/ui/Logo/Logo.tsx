import { useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import styles from './Logo.module.scss';

const Logo = () => {
	const { theme } = useTheme();
	const [isSpinning, setIsSpinning] = useState(false);

	const primaryColor = theme === 'light' ? '#B85C38' : '#D4856A';
	const secondaryColor = theme === 'light' ? '#2D2D2D' : '#F5F5F5';

	// Spin on page load
	useEffect(() => {
		const timer = setTimeout(() => setIsSpinning(true), 300);
		return () => clearTimeout(timer);
	}, []);

	return (
		<svg
			viewBox='0 0 340 72'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={styles.logo}>

			{/* Вариант 2: Только контур шестиугольника */}
			<g className={`${styles.diamond} ${isSpinning ? styles.spinning : ''}`}>
				<path
					d='M30 12 L51 24 L51 48 L30 60 L9 48 L9 24 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='4'
				/>
			</g>

			{/* FAIMCore текст */}
			<text
				x='68'
				y='50'
				fontFamily='Inter, system-ui, sans-serif'
				fontSize='42'
				fontWeight='700'
				letterSpacing='-0.5'>
				<tspan fill={secondaryColor}>FAIM</tspan>
				<tspan fill={primaryColor}>Core</tspan>
			</text>
		</svg>
	);
};

export default Logo;
