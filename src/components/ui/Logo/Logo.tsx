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

			{/* Элегантный шестиугольник с тонкими линиями */}
			<g className={`${styles.diamond} ${isSpinning ? styles.spinning : ''}`}>
				{/* Внешний шестиугольник */}
				<path
					d='M30 6 L54 20 L54 48 L30 62 L6 48 L6 20 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='2.5'
				/>
				{/* Внутренний шестиугольник */}
				<path
					d='M30 18 L44 27 L44 41 L30 50 L16 41 L16 27 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='1.5'
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
