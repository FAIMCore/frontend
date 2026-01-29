import { useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import styles from './Logo.module.scss';

const Logo = () => {
	const { theme } = useTheme();
	const [isSpinning, setIsSpinning] = useState(false);

	const primaryColor = theme === 'light' ? '#B85C38' : '#D4856A';
	const secondaryColor = theme === 'light' ? '#2D2D2D' : '#F5F5F5';

	const triggerSpin = () => {
		if (isSpinning) return;
		setIsSpinning(true);
		setTimeout(() => setIsSpinning(false), 600);
	};

	// Spin on page load
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsSpinning(true);
			setTimeout(() => setIsSpinning(false), 600);
		}, 300);
		return () => clearTimeout(timer);
	}, []);

	return (
		<svg
			viewBox='0 0 340 72'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={styles.logo}
			onMouseEnter={triggerSpin}
			onClick={triggerSpin}>

			{/* Фрактальный шестиугольник */}
			<g className={`${styles.diamond} ${isSpinning ? styles.spinning : ''}`}>
				{/* 1 - внешний */}
				<path
					d='M30 6 L54 20 L54 48 L30 62 L6 48 L6 20 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='2.5'
				/>
				{/* 2 */}
				<path
					d='M42 13 L54 34 L42 55 L18 55 L6 34 L18 13 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='1.5'
				/>
				{/* 3 */}
				<path
					d='M30 13 L48 24 L48 44 L30 55 L12 44 L12 24 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.8'
				/>
				{/* 4 */}
				<path
					d='M39 18 L48 34 L39 50 L21 50 L12 34 L21 18 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.5'
				/>
				{/* 5 */}
				<path
					d='M30 18 L44 26 L44 42 L30 50 L16 42 L16 26 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.3'
				/>
				{/* 6 */}
				<path
					d='M37 22 L44 34 L37 46 L23 46 L16 34 L23 22 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.2'
				/>
				{/* 7 */}
				<path
					d='M30 22 L40 28 L40 40 L30 46 L20 40 L20 28 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.15'
				/>
				{/* 8 */}
				<path
					d='M35 25 L40 34 L35 43 L25 43 L20 34 L25 25 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.1'
				/>
				{/* 9 */}
				<path
					d='M30 25 L38 30 L38 38 L30 43 L22 38 L22 30 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.08'
				/>
				{/* 10 */}
				<path
					d='M34 27 L38 34 L34 41 L26 41 L22 34 L26 27 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.06'
				/>
				{/* 11 */}
				<path
					d='M30 27 L36 31 L36 37 L30 41 L24 37 L24 31 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.05'
				/>
				{/* 12 */}
				<path
					d='M33 29 L36 34 L33 39 L27 39 L24 34 L27 29 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.04'
				/>
				{/* 13 */}
				<path
					d='M30 29 L34 32 L34 36 L30 39 L26 36 L26 32 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.03'
				/>
				{/* 14 - внутренний */}
				<path
					d='M32 30 L34 34 L32 38 L28 38 L26 34 L28 30 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.02'
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
