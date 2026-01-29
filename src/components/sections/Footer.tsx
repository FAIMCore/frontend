import { motion } from 'framer-motion';
import {
	LinkedInLogoIcon,
	GitHubLogoIcon,
	TwitterLogoIcon,
	InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../ui/Logo';
import styles from './Footer.module.scss';

const socialLinks = [
	{ icon: LinkedInLogoIcon, href: '#', label: 'LinkedIn' },
	{ icon: GitHubLogoIcon, href: '#', label: 'GitHub' },
	{ icon: TwitterLogoIcon, href: '#', label: 'Twitter' },
	{ icon: InstagramLogoIcon, href: '#', label: 'Instagram' },
];

const Footer = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	const footerLinks = {
		company: [
			{ label: t.footer.links.about, href: '#about' },
			{ label: t.footer.links.team, href: '#team' },
			{ label: t.footer.links.careers, href: '#' },
			{ label: t.footer.links.blog, href: '#blog' },
		],
		services: [
			{ label: t.footer.links.webDev, href: '#services' },
			{ label: t.footer.links.uiux, href: '#services' },
			{ label: t.footer.links.mobile, href: '#services' },
			{ label: t.footer.links.mvp, href: '#services' },
		],
		resources: [
			{ label: t.footer.links.docs, href: '#' },
			{ label: t.footer.links.help, href: '#' },
			{ label: t.footer.links.privacy, href: '#' },
			{ label: t.footer.links.terms, href: '#' },
		],
	};

	const currentYear = new Date().getFullYear();

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
						<p className={styles.brandDescription}>{t.footer.description}</p>
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
							<h4 className={styles.linkTitle}>{t.footer.company}</h4>
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
							<h4 className={styles.linkTitle}>{t.footer.services}</h4>
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
							<h4 className={styles.linkTitle}>{t.footer.resources}</h4>
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
						{t.footer.copyright.replace('{year}', String(currentYear))}
					</p>
					<p className={styles.madeWith}>{t.footer.madeWith}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;