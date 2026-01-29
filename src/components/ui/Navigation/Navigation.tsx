import { useState, useEffect } from 'react';
import { GlobeIcon, SunIcon, MoonIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import Logo from '../Logo';
import styles from './Navigation.module.scss';

const Navigation = () => {
	const { theme, toggleTheme } = useTheme();
	const { language, toggleLanguage, t } = useLanguage();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Close menu on resize to desktop
	useEffect(() => {
		if (!isMobile && isMenuOpen) {
			setIsMenuOpen(false);
		}
	}, [isMobile, isMenuOpen]);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	const menuItems = [
		{ label: t.nav.about, href: '#about' },
		{ label: t.nav.services, href: '#services' },
		{ label: t.nav.portfolio, href: '#portfolio' },
		{ label: t.nav.team, href: '#team' },
		{ label: t.nav.blog, href: '#blog' },
		{ label: t.nav.contact, href: '#contact' },
	];

	const handleMenuClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<nav
				className={`${styles.navigation} ${
					theme === 'light' ? styles.light : styles.dark
				}`}>
				{/* Mobile: Hamburger button */}
				{isMobile && (
					<button
						className={styles.hamburger}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu">
						{isMenuOpen ? (
							<Cross1Icon className={styles.hamburgerIcon} />
						) : (
							<HamburgerMenuIcon className={styles.hamburgerIcon} />
						)}
					</button>
				)}

				{/* Desktop: Left menu */}
				{!isMobile && (
					<div className={styles.leftMenu}>
						{menuItems.slice(0, 3).map((item) => (
							<a key={item.href} href={item.href} className={styles.menuItem}>
								{item.label}
							</a>
						))}
					</div>
				)}

				{/* Logo */}
				<div className={styles.logoSpace}>
					<Logo />
				</div>

				{/* Desktop: Right menu */}
				{!isMobile && (
					<div className={styles.rightMenu}>
						{menuItems.slice(3).map((item) => (
							<a key={item.href} href={item.href} className={styles.menuItem}>
								{item.label}
							</a>
						))}
					</div>
				)}

				{/* Divider (desktop only) */}
				{!isMobile && <div className={styles.divider} />}

				{/* Control buttons */}
				<div className={styles.controlButtons}>
					<button
						onClick={toggleTheme}
						className={styles.themeToggle}
						aria-label="Toggle theme">
						{theme === 'light' ? (
							<MoonIcon className={styles.icon} />
						) : (
							<SunIcon className={styles.icon} />
						)}
					</button>

					<button
						onClick={toggleLanguage}
						className={styles.languageToggle}
						aria-label="Toggle language">
						<GlobeIcon className={styles.icon} />
						<span className={styles.languageText}>
							{language === 'en' ? 'EN' : 'UA'}
						</span>
					</button>
				</div>
			</nav>

			{/* Mobile menu overlay */}
			<AnimatePresence>
				{isMenuOpen && isMobile && (
					<motion.div
						className={`${styles.mobileOverlay} ${
							theme === 'light' ? styles.light : styles.dark
						}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}>
						<motion.div
							className={styles.mobileMenu}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3, delay: 0.1 }}>
							{menuItems.map((item, index) => (
								<motion.a
									key={item.href}
									href={item.href}
									className={styles.mobileMenuItem}
									onClick={handleMenuClick}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}>
									{item.label}
								</motion.a>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navigation;