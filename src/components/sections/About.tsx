import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './About.module.scss';

const About = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	const stats = [
		{ number: '50+', label: t.about.stats.projects },
		{ number: '30+', label: t.about.stats.clients },
		{ number: '5+', label: t.about.stats.experience },
		{ number: '99%', label: t.about.stats.satisfaction },
	];

	return (
		<section
			id="about"
			className={`${styles.about} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.content}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>{t.about.label}</span>
					<h2 className={styles.title}>{t.about.title}</h2>
					<p className={styles.description}>{t.about.description1}</p>
					<p className={styles.description}>{t.about.description2}</p>
				</motion.div>

				<motion.div
					className={styles.stats}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6, delay: 0.2 }}>
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							className={styles.statItem}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.1 * index }}>
							<span className={styles.statNumber}>{stat.number}</span>
							<span className={styles.statLabel}>{stat.label}</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default About;