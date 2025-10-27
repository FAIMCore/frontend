import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
		// Brighter, more vibrant colors
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
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100vh',
				backgroundColor: '#080819',
				overflow: 'hidden',
			}}>
			{/* Logo at the top - light source */}
			<div
				style={{
					position: 'absolute',
					top: '40px',
					left: '50%',
					transform: 'translateX(-50%)',
					zIndex: 10,
					textAlign: 'center',
				}}>
				<img
					src='/logo.svg'
					alt='FAIMCore LSS'
					style={{
						width: '250px',
						height: 'auto',
					}}
				/>
			</div>

			{/* Center text content */}
			<div
				style={{
					position: 'absolute',
					top: '54%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					zIndex: 10,
					textAlign: 'center',
				}}>
				<div
					style={{
						fontFamily: "'Orbitron', sans-serif",
						fontSize: '75px',
						fontWeight: 700,
						background:
							'linear-gradient(180deg, #AFC1F7 0%, #8B99C4 50%, #8B99C4 100%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
						marginBottom: '5px',
						whiteSpace: 'nowrap',
					}}>
					WEB SOFTWARE COMPANY
				</div>
				<div
					style={{
						fontFamily: "'Orbitron', sans-serif",
						fontSize: '35px',
						fontWeight: 700,
						color: '#ffffff',
						letterSpacing: '0.05em',
					}}>
					Your Core, Our Aim
				</div>
			</div>

			{/* Pyramid/cone spotlight effect - point at top, expands downward */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: '50%',
					width: 0,
					height: 0,
					transform: 'translateX(-50%)',
					borderLeft: '40vw solid transparent',
					borderRight: '40vw solid transparent',
					borderBottom: '100vh solid rgba(255, 255, 255, 0.05)',
					pointerEvents: 'none',
					filter: 'blur(70px)',
					opacity: 0.8,
				}}
			/>

			{/* Additional soft glow layer */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: '50%',
					width: 0,
					height: 0,
					transform: 'translateX(-50%)',
					borderLeft: '35vw solid transparent',
					borderRight: '35vw solid transparent',
					borderBottom: '90vh solid rgba(255, 255, 255, 0.08)',
					pointerEvents: 'none',
					filter: 'blur(90px)',
				}}
			/>

			{/* Grid Lines */}
			<div style={{ position: 'absolute', inset: 0 }}>
				{/* Horizontal lines */}
				{Array.from({ length: gridSize.horizontal }).map((_, i) => (
					<div
						key={`h-${i}`}
						style={{
							position: 'absolute',
							width: '100%',
							height: '1px',
							backgroundColor: 'rgba(100, 100, 100, 0.2)',
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
						style={{
							position: 'absolute',
							height: '100%',
							width: '1px',
							backgroundColor: 'rgba(100, 100, 100, 0.2)',
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
			style={{
				position: 'absolute',
				width: '1px',
				height: '1px',
				borderRadius: '50%',
				transform: 'translate(-50%, -50%)',
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
