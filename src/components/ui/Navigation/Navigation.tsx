import { useState } from 'react';
import { GlobeIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../../contexts/ThemeContext';
import Logo from '../Logo';
import styles from './Navigation.module.scss';

const Navigation = () => {
	const [language, setLanguage] = useState<'en' | 'uk'>('en');
	const { theme, toggleTheme } = useTheme();

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === 'en' ? 'uk' : 'en'));
	};

	const leftMenuItems = [
		{ label: 'About', href: '#about' },
		{ label: 'Services', href: '#services' },
		{ label: 'Portfolio', href: '#portfolio' },
	];

	const rightMenuItems = [
		{ label: 'Team', href: '#team' },
		{ label: 'Blog', href: '#blog' },
		{ label: 'Contact', href: '#contact' },
	];

	return (
		<nav
			className={`${styles.navigation} ${
				theme === 'light' ? 'light' : 'dark'
			}`}>
			{/* Left menu items */}
			<div className={styles.leftMenu}>
				{leftMenuItems.map((item) => (
					<a
						key={item.href}
						href={item.href}
						className={styles.menuItem}>
						{item.label}
					</a>
				))}
			</div>

			{/* Logo space (centered) */}
			<div className={styles.logoSpace}>
				<Logo />
			</div>

			{/* Right menu items */}
			<div className={styles.rightMenu}>
				{rightMenuItems.map((item) => (
					<a
						key={item.href}
						href={item.href}
						className={styles.menuItem}>
						{item.label}
					</a>
				))}
			</div>

			{/* Divider */}
			<div className={styles.divider} />

			{/* Control buttons container */}
			<div className={styles.controlButtons}>
				{/* Theme toggle button */}
				<button
					onClick={toggleTheme}
					className={styles.themeToggle}
					aria-label='Toggle theme'>
					{theme === 'light' ? (
						<MoonIcon className={styles.icon} />
					) : (
						<SunIcon className={styles.icon} />
					)}
				</button>

				{/* Language toggle button */}
				<button
					onClick={toggleLanguage}
					className={styles.languageToggle}
					aria-label='Toggle language'>
					<GlobeIcon className={styles.icon} />
					<span className={styles.languageText}>
						{language === 'en' ? 'EN' : 'UA'}
					</span>
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
