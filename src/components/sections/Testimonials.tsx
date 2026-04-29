import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Testimonials.module.scss';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const reviewKeys = ['one', 'two', 'three', 'four'] as const;

const Stars = ({ count, className }: { count: number; className?: string }) => (
	<span className={className} aria-label={`${count} out of 5 stars`}>
		{'★'.repeat(count)}
		<span style={{ opacity: 0.25 }}>{'★'.repeat(5 - count)}</span>
	</span>
);

const Testimonials = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	const items = reviewKeys.map((key) => ({ key, ...t.testimonials.items[key] }));

	return (
		<section
			id="testimonials"
			className={`${styles.testimonials} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>{t.testimonials.label}</span>
					<h2 className={styles.title}>{t.testimonials.title}</h2>
					<div className={styles.ratingRow}>
						<Stars count={5} className={styles.stars} />
					</div>
					<p className={styles.subtitle}>{t.testimonials.subtitle}</p>
				</motion.div>

				<motion.div
					className={styles.grid}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}>
					{items.map((item) => (
						<motion.article
							key={item.key}
							className={styles.card}
							variants={cardVariants}
							itemScope
							itemType="https://schema.org/Review">
							<meta itemProp="itemReviewed" content="FAIMCore" />
							<div
								className={styles.cardStars}
								itemProp="reviewRating"
								itemScope
								itemType="https://schema.org/Rating"
								aria-label={`${item.rating} out of 5 stars`}>
								<meta itemProp="ratingValue" content={String(item.rating)} />
								<meta itemProp="bestRating" content="5" />
								{'★'.repeat(item.rating)}
							</div>
							<p className={styles.text} itemProp="reviewBody">"{item.text}"</p>
							<div
								className={styles.author}
								itemProp="author"
								itemScope
								itemType="https://schema.org/Person">
								<span className={styles.name} itemProp="name">{item.name}</span>
								<span className={styles.role} itemProp="jobTitle">{item.role}</span>
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonials;
