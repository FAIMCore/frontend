import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './TechStack.module.scss';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.03,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.3 },
	},
};

const technologies = [
	// Frontend
	{ name: 'React', category: 'frontend' },
	{ name: 'Angular', category: 'frontend' },
	{ name: 'TypeScript', category: 'frontend' },
	{ name: 'JavaScript', category: 'frontend' },
	{ name: 'HTML5', category: 'frontend' },
	{ name: 'CSS3', category: 'frontend' },
	{ name: 'SCSS', category: 'frontend' },
	// Backend
	{ name: 'Python', category: 'backend' },
	{ name: 'Django', category: 'backend' },
	{ name: 'FastAPI', category: 'backend' },
	{ name: 'REST API', category: 'backend' },
	{ name: 'GraphQL', category: 'backend' },
	// Database
	{ name: 'PostgreSQL', category: 'database' },
	{ name: 'MongoDB', category: 'database' },
	{ name: 'Redis', category: 'database' },
	// Tools
	{ name: 'Docker', category: 'tools' },
	{ name: 'Git', category: 'tools' },
	{ name: 'AWS', category: 'tools' },
	{ name: 'Linux', category: 'tools' },
	{ name: 'CI/CD', category: 'tools' },
];

const TechStack = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	return (
		<section
			id="tech"
			className={`${styles.techStack} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>{t.tech.label}</span>
					<h2 className={styles.title}>{t.tech.title}</h2>
					<p className={styles.subtitle}>{t.tech.subtitle}</p>
				</motion.div>

				<motion.div
					className={styles.techCloud}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}>
					{technologies.map((tech) => (
						<motion.span
							key={tech.name}
							className={`${styles.techBadge} ${styles[tech.category]}`}
							variants={itemVariants}>
							{tech.name}
						</motion.span>
					))}
				</motion.div>

				<motion.div
					className={styles.legend}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5, duration: 0.5 }}>
					<div className={styles.legendItem}>
						<span className={`${styles.legendDot} ${styles.frontend}`} />
						<span>{t.tech.categories.frontend}</span>
					</div>
					<div className={styles.legendItem}>
						<span className={`${styles.legendDot} ${styles.backend}`} />
						<span>{t.tech.categories.backend}</span>
					</div>
					<div className={styles.legendItem}>
						<span className={`${styles.legendDot} ${styles.database}`} />
						<span>{t.tech.categories.database}</span>
					</div>
					<div className={styles.legendItem}>
						<span className={`${styles.legendDot} ${styles.tools}`} />
						<span>{t.tech.categories.tools}</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TechStack;