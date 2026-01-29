import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../../contexts/ThemeContext';
import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		const toggleVisibility = () => {
			// Show button when page is scrolled down 400px
			setIsVisible(window.scrollY > 400);
		};

		window.addEventListener('scroll', toggleVisibility, { passive: true });
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					className={`${styles.scrollToTop} ${theme === 'light' ? styles.light : styles.dark}`}
					onClick={scrollToTop}
					initial={{ opacity: 0, scale: 0.5, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.5, y: 20 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					transition={{ type: 'spring', stiffness: 300, damping: 20 }}
					aria-label="Scroll to top">
					<motion.div
						className={styles.iconWrapper}
						animate={{ y: [0, -3, 0] }}
						transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
						<ArrowUpIcon className={styles.icon} />
					</motion.div>
					<div className={styles.glow} />
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;