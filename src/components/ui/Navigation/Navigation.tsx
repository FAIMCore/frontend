import { useState } from 'react';
import { GlobeIcon } from '@radix-ui/react-icons';
import styles from './Navigation.module.scss';

const Navigation = () => {
	const [language, setLanguage] = useState<'en' | 'uk'>('en');

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
		<nav className={styles.navigation}>
			{/* Left menu items */}
			<div className={styles.leftMenu}>
				{leftMenuItems.map((item) => (
					<a key={item.href} href={item.href} className={styles.menuItem}>
						{item.label}
					</a>
				))}
			</div>

			{/* Logo space (centered) */}
			<div className={styles.logoSpace} />

			{/* Right menu items */}
			<div className={styles.rightMenu}>
				{rightMenuItems.map((item) => (
					<a key={item.href} href={item.href} className={styles.menuItem}>
						{item.label}
					</a>
				))}
			</div>

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
		</nav>
	);
};

export default Navigation;