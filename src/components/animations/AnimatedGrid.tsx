import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import Navigation from '../ui/Navigation/Navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './AnimatedGrid.module.scss';

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.3,
		},
	},
};

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
	const [gridSpacing] = useState({ horizontal: 140, vertical: 140 });
	const { theme } = useTheme();
	const { t } = useLanguage();

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;

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
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
				<Navigation />
			</motion.div>

			{/* Center text content */}
			<motion.div
				className={styles.centerContent}
				variants={staggerContainer}
				initial='initial'
				animate='animate'>
				<motion.div
					className={styles.tagline}
					variants={fadeInUp}
					transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
					{t.hero.tagline}
				</motion.div>
				<motion.h1
					className={styles.mainTitle}
					variants={fadeInUp}
					transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
					{t.hero.title} <br /> {t.hero.titleLine2}
				</motion.h1>
				<motion.p
					className={styles.subtitle}
					variants={fadeInUp}
					transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
					{t.hero.subtitle}
				</motion.p>
				<motion.div
					className={styles.ctaContainer}
					variants={fadeInUp}
					transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
					<button
						className={styles.ctaButton}
						onClick={() => scrollToSection('contact')}>
						<span>{t.hero.cta}</span>
						<div className={styles.ctaGlow} />
					</button>
					<button
						className={styles.ctaSecondary}
						onClick={() => scrollToSection('portfolio')}>
						{t.hero.ctaSecondary}
					</button>
				</motion.div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.div
				className={styles.scrollIndicator}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 0.6 }}>
				<span>{t.hero.scroll}</span>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
					<ArrowDownIcon className={styles.scrollIcon} />
				</motion.div>
			</motion.div>

			{/* Pyramid/cone spotlight effect */}
			<div className={styles.spotlightPrimary} />
			<div className={styles.spotlightSecondary} />

			{/* Grid Lines */}
			<div className={styles.gridContainer}>
				{Array.from({ length: gridSize.horizontal }).map((_, i) => (
					<div
						key={`h-${i}`}
						className={styles.horizontalLine}
						style={{
							top: `${gridSpacing.horizontal * (i + 1)}px`,
						}}
					/>
				))}

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
				<MovingElementComponent
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

const MovingElementComponent = ({ element, gridSpacing }: MovingElementProps) => {
	const isHorizontal = element.type === 'horizontal';

	const linePositionPx = isHorizontal
		? gridSpacing.horizontal * (element.lineIndex + 1)
		: gridSpacing.vertical * (element.lineIndex + 1);

	return (
		<motion.div
			className={styles.movingElement}
			style={{
				backgroundColor: element.color,
				boxShadow: `0 0 8px ${element.color}, 0 0 16px ${element.color}`,
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