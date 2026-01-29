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
				{/* Средний шестиугольник (вершины касаются сторон внешнего) */}
				<path
					d='M42 13 L54 34 L42 55 L18 55 L6 34 L18 13 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='1.5'
				/>
				{/* Внутренний шестиугольник (вершины касаются сторон среднего) */}
				<path
					d='M30 13 L48 24 L48 44 L30 55 L12 44 L12 24 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.8'
				/>
				{/* Четвертый шестиугольник */}
				<path
					d='M39 19 L48 34 L39 50 L21 50 L12 34 L21 19 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.5'
				/>
				{/* Пятый шестиугольник */}
				<path
					d='M30 19 L44 27 L44 42 L30 50 L16 42 L16 27 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.3'
				/>
				{/* Шестой шестиугольник */}
				<path
					d='M37 23 L44 34 L37 46 L23 46 L16 34 L23 23 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.2'
				/>
				{/* Седьмой шестиугольник */}
				<path
					d='M30 23 L40 28 L40 40 L30 46 L20 40 L20 28 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.15'
				/>
				{/* Восьмой шестиугольник */}
				<path
					d='M35 26 L40 34 L35 43 L25 43 L20 34 L25 26 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.1'
				/>
				{/* Девятый шестиугольник */}
				<path
					d='M30 26 L38 30 L38 38 L30 43 L22 38 L22 30 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.08'
				/>
				{/* Десятый шестиугольник */}
				<path
					d='M34 28 L38 34 L34 40 L26 40 L22 34 L26 28 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.06'
				/>
				{/* 11-й шестиугольник */}
				<path
					d='M30 28 L36 31 L36 37 L30 40 L24 37 L24 31 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.05'
				/>
				{/* 12-й шестиугольник */}
				<path
					d='M33 30 L36 34 L33 38 L27 38 L24 34 L27 30 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.04'
				/>
				{/* 13-й шестиугольник */}
				<path
					d='M30 30 L34 32 L34 36 L30 38 L26 36 L26 32 Z'
					fill='none'
					stroke={primaryColor}
					strokeWidth='0.03'
				/>
				{/* 14-й шестиугольник (самый внутренний) */}
				<path
					d='M32 31 L34 34 L32 37 L28 37 L26 34 L28 31 Z'
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
