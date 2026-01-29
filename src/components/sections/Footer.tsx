import { motion } from 'framer-motion';
import {
	LinkedInLogoIcon,
	GitHubLogoIcon,
	TwitterLogoIcon,
	InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import Logo from '../ui/Logo';
import styles from './Footer.module.scss';

const footerLinks = {
	company: [
		{ label: 'About', href: '#about' },
		{ label: 'Team', href: '#team' },
		{ label: 'Careers', href: '#' },
		{ label: 'Blog', href: '#blog' },
	],
	services: [
		{ label: 'Web Development', href: '#services' },
		{ label: 'UI/UX Design', href: '#services' },
		{ label: 'Mobile Apps', href: '#services' },
		{ label: 'MVP Development', href: '#services' },
	],
	resources: [
		{ label: 'Documentation', href: '#' },
		{ label: 'Help Center', href: '#' },
		{ label: 'Privacy Policy', href: '#' },
		{ label: 'Terms of Service', href: '#' },
	],
};

const socialLinks = [
	{ icon: LinkedInLogoIcon, href: '#', label: 'LinkedIn' },
	{ icon: GitHubLogoIcon, href: '#', label: 'GitHub' },
	{ icon: TwitterLogoIcon, href: '#', label: 'Twitter' },
	{ icon: InstagramLogoIcon, href: '#', label: 'Instagram' },
];

const Footer = () => {
	const { theme } = useTheme();

	return (
		<footer
			className={`${styles.footer} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<div className={styles.top}>
					<motion.div
						className={styles.brand}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						<Logo />
						<p className={styles.brandDescription}>
							Building exceptional digital experiences that transform businesses
							and delight users.
						</p>
						<div className={styles.social}>
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className={styles.socialLink}
									aria-label={link.label}>
									<link.icon />
								</a>
							))}
						</div>
					</motion.div>

					<div className={styles.links}>
						<motion.div
							className={styles.linkGroup}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}>
							<h4 className={styles.linkTitle}>Company</h4>
							<ul className={styles.linkList}>
								{footerLinks.company.map((link) => (
									<li key={link.label}>
										<a href={link.href} className={styles.link}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</motion.div>

						<motion.div
							className={styles.linkGroup}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}>
							<h4 className={styles.linkTitle}>Services</h4>
							<ul className={styles.linkList}>
								{footerLinks.services.map((link) => (
									<li key={link.label}>
										<a href={link.href} className={styles.link}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</motion.div>

						<motion.div
							className={styles.linkGroup}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}>
							<h4 className={styles.linkTitle}>Resources</h4>
							<ul className={styles.linkList}>
								{footerLinks.resources.map((link) => (
									<li key={link.label}>
										<a href={link.href} className={styles.link}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</motion.div>
					</div>
				</div>

				<div className={styles.bottom}>
					<p className={styles.copyright}>
						© {new Date().getFullYear()} FAIMCore. All rights reserved.
					</p>
					<p className={styles.madeWith}>
						Made with passion in Ukraine
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;