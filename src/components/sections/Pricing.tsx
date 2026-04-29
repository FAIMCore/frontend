import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Pricing.module.scss';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.12 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const planKeys = ['landing', 'corporate', 'webapp'] as const;

const Pricing = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	return (
		<section
			id="pricing"
			className={`${styles.pricing} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>{t.pricing.label}</span>
					<h2 className={styles.title}>{t.pricing.title}</h2>
					<p className={styles.subtitle}>{t.pricing.subtitle}</p>
				</motion.div>

				<motion.div
					className={styles.grid}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}>
					{planKeys.map((key, idx) => {
						const plan = t.pricing.plans[key];
						const featured = idx === 1;
						return (
							<motion.div
								key={key}
								className={`${styles.card} ${featured ? styles.featured : ''}`}
								variants={cardVariants}
								itemScope
								itemType="https://schema.org/Offer">
								{featured && (
									<span className={styles.popularBadge}>{t.pricing.mostPopular}</span>
								)}
								<h3 className={styles.planName} itemProp="name">{plan.name}</h3>
								<p className={styles.planDescription} itemProp="description">{plan.description}</p>
								<div className={styles.priceRow}>
									<span className={styles.priceFrom}>{t.pricing.from}</span>
									<span className={styles.priceValue} itemProp="price" content={plan.price.replace(/\s/g, '')}>
										{plan.price}
									</span>
									<span className={styles.priceCurrency}>{t.pricing.currency}</span>
									<meta itemProp="priceCurrency" content="UAH" />
								</div>
								<div className={styles.timeline}>⏱ {plan.timeline}</div>
								<ul className={styles.features}>
									{plan.features.map((feat, idx) => (
										<li key={idx} className={styles.feature}>{feat}</li>
									))}
								</ul>
								<a
									className={styles.cta}
									href="tel:+380985507799"
									aria-label={`${t.pricing.ctaCall} — ${plan.name}`}>
									{t.pricing.ctaCall}
								</a>
							</motion.div>
						);
					})}
				</motion.div>

				<motion.p
					className={styles.note}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					{t.pricing.note}
				</motion.p>
			</div>
		</section>
	);
};

export default Pricing;
