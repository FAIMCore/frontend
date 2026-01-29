import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navigation from '../ui/Navigation/Navigation';
import { useTheme } from '../../contexts/ThemeContext';
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
	const [gridSize, setGridSize] = useState({ horizontal: 8, vertical: 12 });
	const [gridSpacing] = useState({ horizontal: 140, vertical: 140 }); // Fixed spacing in pixels
	const { theme } = useTheme();

	useEffect(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		// Calculate number of lines based on viewport size and fixed spacing
		const horizontalLines = Math.floor(height / gridSpacing.horizontal);
		const verticalLines = Math.floor(width / gridSpacing.vertical);

		setGridSize({
			horizontal: Math.max(6, horizontalLines),
			vertical: Math.max(8, verticalLines),
		});
	}, []);

	useEffect(() => {
		const generatedElements: MovingElement[] = [];
		const colors = ['#ffffff'];

		// Adjust number of elements based on grid size
		const totalLines = gridSize.horizontal + gridSize.vertical;
		const elementCount = Math.min(Math.floor(totalLines * 0.9), 15);

		for (let i = 0; i < elementCount; i++) {
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
	}, [gridSize]);

	return (
		<div
			className={`${styles.container} ${
				theme === 'light' ? styles.light : styles.dark
			}`}>
			{/* Navigation menu */}
			<Navigation />

			{/* Center text content */}
			<div className={styles.centerContent}>
				<div className={styles.mainTitle}>
					Building the foundation <br /> of your core business
				</div>
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
							top: `${gridSpacing.horizontal * (i + 1)}px`,
						}}
					/>
				))}

				{/* Vertical lines */}
				{Array.from({ length: gridSize.vertical }).map((_, i) => (
					<div
						key={`v-${i}`}
						className={styles.verticalLine}
						style={{
							left: `${gridSpacing.vertical * (i + 1)}px`,
						}}
					/>
				))}
			</div>

			{/* Moving Elements */}
			{elements.map((element) => (
				<MovingElement
					key={element.id}
					element={element}
					gridSpacing={gridSpacing}
				/>
			))}
		</div>
	);
};

interface MovingElementProps {
	element: MovingElement;
	gridSpacing: { horizontal: number; vertical: number };
}

const MovingElement = ({ element, gridSpacing }: MovingElementProps) => {
	const isHorizontal = element.type === 'horizontal';

	// Calculate line position in pixels
	const linePositionPx = isHorizontal
		? gridSpacing.horizontal * (element.lineIndex + 1)
		: gridSpacing.vertical * (element.lineIndex + 1);

	return (
		<motion.div
			className={styles.movingElement}
			style={{
				backgroundColor: element.color,
				boxShadow: `0 0 30px ${element.color}, 0 0 60px ${element.color}, 0 0 90px ${element.color}`,
				left: isHorizontal ? '0px' : `${linePositionPx}px`,
				top: isHorizontal ? `${linePositionPx}px` : '0px',
			}}
			animate={{
				left: isHorizontal ? '100%' : `${linePositionPx}px`,
				top: isHorizontal ? `${linePositionPx}px` : '100%',
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
