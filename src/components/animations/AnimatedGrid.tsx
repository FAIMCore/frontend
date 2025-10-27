import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navigation from '../ui/Navigation/Navigation';
import styles from './AnimatedGrid.module.scss';

interface MovingElement {
	id: number;
	type: 'horizontal' | 'vertical';
	lineIndex: number;
	delay: number;
	duration: number;
	color: string;
}

const AnimatedGrid = () => {
	const [elements, setElements] = useState<MovingElement[]>([]);

	// Grid configuration
	const gridSize = { horizontal: 6, vertical: 10 };

	useEffect(() => {
		// Generate random moving elements
		const generatedElements: MovingElement[] = [];
		const colors = ['#ffffff'];

		for (let i = 0; i < 15; i++) {
			const type = Math.random() > 0.5 ? 'horizontal' : 'vertical';
			const lineIndex =
				type === 'horizontal'
					? Math.floor(Math.random() * gridSize.horizontal)
					: Math.floor(Math.random() * gridSize.vertical);

			generatedElements.push({
				id: i,
				type,
				lineIndex,
				delay: Math.random() * 5,
				duration: 3 + Math.random() * 4,
				color: colors[Math.floor(Math.random() * colors.length)],
			});
		}

		setElements(generatedElements);
	}, []);

	return (
		<div className={styles.container}>
			{/* Navigation menu */}
			<Navigation />

			{/* Logo at the top - light source */}
			<div className={styles.logo}>
				<img
					src='/logo.svg'
					alt='FAIMCore LSS'
				/>
			</div>

			{/* Center text content */}
			<div className={styles.centerContent}>
				<div className={styles.mainTitle}>WEB SOFTWARE COMPANY</div>
				<div className={styles.subtitle}>Your Core, Our Aim</div>
			</div>

			{/* Pyramid/cone spotlight effect - point at top, expands downward */}
			<div className={styles.spotlightPrimary} />

			{/* Additional soft glow layer */}
			<div className={styles.spotlightSecondary} />

			{/* Grid Lines */}
			<div className={styles.gridContainer}>
				{/* Horizontal lines */}
				{Array.from({ length: gridSize.horizontal }).map((_, i) => (
					<div
						key={`h-${i}`}
						className={styles.horizontalLine}
						style={{
							top: `${
								(100 / (gridSize.horizontal + 1)) * (i + 1)
							}%`,
						}}
					/>
				))}

				{/* Vertical lines */}
				{Array.from({ length: gridSize.vertical }).map((_, i) => (
					<div
						key={`v-${i}`}
						className={styles.verticalLine}
						style={{
							left: `${
								(100 / (gridSize.vertical + 1)) * (i + 1)
							}%`,
						}}
					/>
				))}
			</div>

			{/* Moving Elements */}
			{elements.map((element) => (
				<MovingElement
					key={element.id}
					element={element}
					gridSize={gridSize}
				/>
			))}
		</div>
	);
};

interface MovingElementProps {
	element: MovingElement;
	gridSize: { horizontal: number; vertical: number };
}

const MovingElement = ({ element, gridSize }: MovingElementProps) => {
	const isHorizontal = element.type === 'horizontal';

	// Calculate line position
	const linePosition = isHorizontal
		? `${(100 / (gridSize.horizontal + 1)) * (element.lineIndex + 1)}%`
		: `${(100 / (gridSize.vertical + 1)) * (element.lineIndex + 1)}%`;

	return (
		<motion.div
			className={styles.movingElement}
			style={{
				backgroundColor: element.color,
				boxShadow: `0 0 30px ${element.color}, 0 0 60px ${element.color}, 0 0 90px ${element.color}`,
				left: isHorizontal ? '0%' : linePosition,
				top: isHorizontal ? linePosition : '0%',
			}}
			animate={{
				left: isHorizontal ? '100%' : linePosition,
				top: isHorizontal ? linePosition : '100%',
			}}
			transition={{
				duration: element.duration,
				delay: element.delay,
				repeat: Infinity,
				ease: 'linear',
			}}
		/>
	);
};

export default AnimatedGrid;
