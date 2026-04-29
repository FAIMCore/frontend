import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './FAQ.module.scss';

const faqKeys = [
	'price',
	'timeline',
	'payment',
	'ownership',
	'support',
	'region',
	'tech',
	'seo',
] as const;

const FAQ = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	const items = faqKeys.map((key) => ({ key, ...t.faq.items[key] }));

	return (
		<section
			id="faq"
			className={`${styles.faq} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>{t.faq.label}</span>
					<h2 className={styles.title}>{t.faq.title}</h2>
					<p className={styles.subtitle}>{t.faq.subtitle}</p>
				</motion.div>

				<motion.div
					className={styles.list}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.5 }}
					itemScope
					itemType="https://schema.org/FAQPage">
					{items.map(({ key, q, a }, idx) => (
						<details
							key={key}
							className={styles.item}
							open={idx === 0}
							itemScope
							itemProp="mainEntity"
							itemType="https://schema.org/Question">
							<summary className={styles.question}>
								<span itemProp="name">{q}</span>
								<span className={styles.toggle} aria-hidden="true">+</span>
							</summary>
							<div
								className={styles.answer}
								itemScope
								itemProp="acceptedAnswer"
								itemType="https://schema.org/Answer">
								<span itemProp="text">{a}</span>
							</div>
						</details>
					))}
				</motion.div>

				<motion.div
					className={styles.bottomCta}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<span className={styles.bottomCtaText}>
						{t.faq.subtitle.split('?')[0]}?
					</span>
					<a className={styles.bottomCtaButton} href="tel:+380985507799">
						📞 +38 098 550 77 99
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default FAQ;
