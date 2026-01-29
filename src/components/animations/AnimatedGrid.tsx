import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import Navigation from '../ui/Navigation/Navigation';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './AnimatedGrid.module.scss';

// Slide up + fade animation for hero
const heroVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
	},
};

const navVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
	},
};

const AnimatedGrid = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number | undefined>(undefined);
	const { theme } = useTheme();
	const { t } = useLanguage();

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		const isLight = theme === 'light';

		// Network nodes with depth
		interface Node {
			x: number;
			y: number;
			vx: number;
			vy: number;
			depth: number; // 0 = far, 1 = close
			size: number;
			pulse: number;
		}

		interface Pulse {
			fromNode: number;
			toNode: number;
			progress: number;
			speed: number;
			type: 'normal' | 'fast' | 'bright'; // Different pulse types
		}

		const nodeCount = 100;
		const connectionDistance = 160;
		const nodes: Node[] = [];
		const pulses: Pulse[] = [];

		// Initialize nodes with pronounced depth - 3D brain effect
		for (let i = 0; i < nodeCount; i++) {
			const depth = Math.random();
			nodes.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * (0.02 + depth * 0.15), // More parallax difference
				vy: (Math.random() - 0.5) * (0.02 + depth * 0.15),
				depth,
				size: 1 + depth * 3, // Smaller base, bigger range for 3D effect
				pulse: 0,
			});
		}

		// Find connections once and cache them
		const getConnections = () => {
			const connections: [number, number, number][] = [];
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const dx = nodes[i].x - nodes[j].x;
					const dy = nodes[i].y - nodes[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < connectionDistance) {
						connections.push([i, j, dist]);
					}
				}
			}
			return connections;
		};

		// Spawn new pulse with random type - fewer pulses
		const spawnPulse = (connections: [number, number, number][]) => {
			if (connections.length === 0 || pulses.length > 8) return;
			const [from, to] = connections[Math.floor(Math.random() * connections.length)];

			// Random pulse type
			const rand = Math.random();
			let type: 'normal' | 'fast' | 'bright' = 'normal';
			let speed = 0.012 + Math.random() * 0.008;

			if (rand > 0.85) {
				type = 'bright'; // 15% chance - bright important pulse
				speed = 0.01 + Math.random() * 0.005;
			} else if (rand > 0.6) {
				type = 'fast'; // 25% chance - fast pulse
				speed = 0.025 + Math.random() * 0.015;
			}

			pulses.push({
				fromNode: Math.random() > 0.5 ? from : to,
				toNode: Math.random() > 0.5 ? to : from,
				progress: 0,
				speed,
				type,
			});
		};

		let frameCount = 0;

		const animate = () => {
			if (!ctx || !canvas) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			frameCount++;

			// Update nodes
			nodes.forEach(node => {
				node.x += node.vx;
				node.y += node.vy;

				if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
				if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
				node.x = Math.max(0, Math.min(canvas.width, node.x));
				node.y = Math.max(0, Math.min(canvas.height, node.y));

				// Decay pulse glow
				node.pulse *= 0.95;
			});

			const connections = getConnections();

			// Spawn pulses less frequently
			if (frameCount % 40 === 0) {
				spawnPulse(connections);
			}

			// Draw connections - BLUE neural network with subtle pulse
			const time = frameCount * 0.02;
			connections.forEach(([i, j, dist], idx) => {
				const avgDepth = (nodes[i].depth + nodes[j].depth) / 2;
				const depthFade = 0.3 + avgDepth * 0.7;

				// Subtle wave pulse along connections
				const wavePhase = (idx * 0.1 + time) % (Math.PI * 2);
				const wavePulse = 0.7 + Math.sin(wavePhase) * 0.3;

				const baseOpacity = (1 - dist / connectionDistance) * (isLight ? 0.12 : 0.1) * depthFade;
				const opacity = baseOpacity * wavePulse;

				ctx.beginPath();
				ctx.moveTo(nodes[i].x, nodes[i].y);
				ctx.lineTo(nodes[j].x, nodes[j].y);
				ctx.strokeStyle = isLight
					? `rgba(70, 130, 180, ${opacity})` // Steel blue
					: `rgba(100, 149, 237, ${opacity})`; // Cornflower blue
				ctx.lineWidth = 0.5 + avgDepth * 0.5;
				ctx.stroke();
			});

			// Update and draw pulses - YELLOW/ORANGE activity
			for (let i = pulses.length - 1; i >= 0; i--) {
				const pulse = pulses[i];
				pulse.progress += pulse.speed;

				if (pulse.progress >= 1) {
					// Pulse reached destination - light up node
					nodes[pulse.toNode].pulse = pulse.type === 'bright' ? 1.5 : 1;
					pulses.splice(i, 1);
					continue;
				}

				const fromNode = nodes[pulse.fromNode];
				const toNode = nodes[pulse.toNode];
				const x = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
				const y = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;

				// Different styles based on type - warm colors
				let glowSize = 4;
				let coreSize = 1.5;
				let glowColor: string;
				let coreColor: string;

				if (pulse.type === 'bright') {
					// Bright yellow - important signal
					glowSize = 8;
					coreSize = 2;
					glowColor = isLight ? 'rgba(255, 200, 50, 0.9)' : 'rgba(255, 220, 100, 0.85)';
					coreColor = isLight ? 'rgba(255, 240, 150, 1)' : 'rgba(255, 250, 200, 1)';
				} else if (pulse.type === 'fast') {
					// Orange - fast signal
					glowSize = 3;
					coreSize = 1;
					glowColor = isLight ? 'rgba(255, 140, 50, 0.7)' : 'rgba(255, 160, 80, 0.65)';
					coreColor = isLight ? 'rgba(255, 180, 100, 1)' : 'rgba(255, 200, 130, 1)';
				} else {
					// Normal amber
					glowColor = isLight ? 'rgba(255, 180, 60, 0.8)' : 'rgba(255, 190, 90, 0.7)';
					coreColor = isLight ? 'rgba(255, 210, 120, 1)' : 'rgba(255, 220, 150, 1)';
				}

				// Glow effect
				const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
				gradient.addColorStop(0, glowColor);
				gradient.addColorStop(0.5, glowColor.replace(/[\d.]+\)$/, '0.2)'));
				gradient.addColorStop(1, 'rgba(255, 180, 60, 0)');

				ctx.beginPath();
				ctx.arc(x, y, glowSize, 0, Math.PI * 2);
				ctx.fillStyle = gradient;
				ctx.fill();

				// Core
				ctx.beginPath();
				ctx.arc(x, y, coreSize, 0, Math.PI * 2);
				ctx.fillStyle = coreColor;
				ctx.fill();
			}

			// Sort nodes by depth for proper layering (far nodes first)
			const sortedNodes = [...nodes].sort((a, b) => a.depth - b.depth);

			// Draw nodes - BLUE base, YELLOW when activated
			sortedNodes.forEach(node => {
				const glowIntensity = node.pulse;
				const depthOpacity = 0.15 + node.depth * 0.6; // More 3D contrast
				const baseOpacity = (isLight ? 0.5 : 0.4) * depthOpacity;
				const size = node.size + glowIntensity * 2;

				// Yellow glow when pulsed (activated neuron)
				if (glowIntensity > 0.1) {
					const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 4);
					glowGradient.addColorStop(0, isLight
						? `rgba(255, 200, 80, ${glowIntensity * 0.6})`
						: `rgba(255, 210, 100, ${glowIntensity * 0.5})`);
					glowGradient.addColorStop(1, 'rgba(255, 200, 80, 0)');
					ctx.beginPath();
					ctx.arc(node.x, node.y, size * 4, 0, Math.PI * 2);
					ctx.fillStyle = glowGradient;
					ctx.fill();
				}

				// Node core - blue base, shifts to yellow when activated
				ctx.beginPath();
				ctx.arc(node.x, node.y, size, 0, Math.PI * 2);

				if (glowIntensity > 0.3) {
					// Activated - yellow/white
					ctx.fillStyle = isLight
						? `rgba(255, 220, 120, ${baseOpacity + glowIntensity * 0.5})`
						: `rgba(255, 230, 150, ${baseOpacity + glowIntensity * 0.5})`;
				} else {
					// Resting - blue
					ctx.fillStyle = isLight
						? `rgba(70, 130, 180, ${baseOpacity})`
						: `rgba(100, 149, 237, ${baseOpacity})`;
				}
				ctx.fill();
			});

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [theme]);

	return (
		<div
			className={`${styles.container} ${
				theme === 'light' ? styles.light : styles.dark
			}`}>
			{/* Canvas for aurora */}
			<canvas ref={canvasRef} className={styles.particleCanvas} />

			{/* Navigation menu */}
			<motion.div
				variants={navVariants}
				initial='hidden'
				animate='visible'>
				<Navigation />
			</motion.div>

			{/* Center text content - slide up animation */}
			<motion.div
				className={styles.centerContent}
				variants={heroVariants}
				initial='hidden'
				animate='visible'>
				<div className={styles.tagline}>
					{t.hero.tagline}
				</div>
				<h1 className={styles.mainTitle}>
					{t.hero.title} <br /> {t.hero.titleLine2}
				</h1>
				<p className={styles.subtitle}>
					{t.hero.subtitle}
				</p>
				<div className={styles.ctaContainer}>
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
				</div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.div
				className={styles.scrollIndicator}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 0.6 }}>
				<span>{t.hero.scroll}</span>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
					<ArrowDownIcon className={styles.scrollIcon} />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default AnimatedGrid;