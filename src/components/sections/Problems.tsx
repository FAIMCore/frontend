import { motion } from 'framer-motion';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Problems.module.scss';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.08 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -16 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const Problems = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	return (
		<section
			id="problems"
			className={`${styles.problems} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>{t.problems.label}</span>
					<h2 className={styles.title}>{t.problems.title}</h2>
				</motion.div>

				<motion.ul
					className={styles.list}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}>
					{t.problems.items.map((item) => (
						<motion.li key={item} className={styles.item} variants={itemVariants}>
							<span className={styles.bullet} aria-hidden="true">
								<ExclamationTriangleIcon />
							</span>
							<span className={styles.text}>{item}</span>
						</motion.li>
					))}
				</motion.ul>

				<motion.p
					className={styles.footnote}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}>
					→ {t.problems.footnote}
				</motion.p>
			</div>
		</section>
	);
};

export default Problems;
