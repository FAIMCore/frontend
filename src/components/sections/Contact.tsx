import { motion } from 'framer-motion';
import { EnvelopeClosedIcon, ChatBubbleIcon, GlobeIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Contact.module.scss';

const contactIcons = [EnvelopeClosedIcon, ChatBubbleIcon, GlobeIcon];
const contactKeys = ['email', 'chat', 'location'] as const;

const Contact = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	const contactInfo = contactKeys.map((key, index) => ({
		icon: contactIcons[index],
		title: t.contact.info[key].title,
		value: t.contact.info[key].value,
		description: t.contact.info[key].description,
	}));

	return (
		<section
			id="contact"
			className={`${styles.contact} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<div className={styles.grid}>
					<motion.div
						className={styles.info}
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.6 }}>
						<span className={styles.label}>{t.contact.label}</span>
						<h2 className={styles.title}>{t.contact.title}</h2>
						<p className={styles.description}>{t.contact.description}</p>

						<div className={styles.contactItems}>
							{contactInfo.map((item) => (
								<div key={item.title} className={styles.contactItem}>
									<div className={styles.iconWrapper}>
										<item.icon className={styles.icon} />
									</div>
									<div className={styles.contactText}>
										<span className={styles.contactTitle}>{item.title}</span>
										<span className={styles.contactValue}>{item.value}</span>
										<span className={styles.contactDescription}>
											{item.description}
										</span>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						className={styles.formWrapper}
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<form className={styles.form}>
							<div className={styles.formRow}>
								<div className={styles.formGroup}>
									<label htmlFor="name" className={styles.formLabel}>
										{t.contact.form.name}
									</label>
									<input
										type="text"
										id="name"
										placeholder={t.contact.form.namePlaceholder}
										className={styles.formInput}
									/>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="email" className={styles.formLabel}>
										{t.contact.form.email}
									</label>
									<input
										type="email"
										id="email"
										placeholder={t.contact.form.emailPlaceholder}
										className={styles.formInput}
									/>
								</div>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor="subject" className={styles.formLabel}>
									{t.contact.form.subject}
								</label>
								<input
									type="text"
									id="subject"
									placeholder={t.contact.form.subjectPlaceholder}
									className={styles.formInput}
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor="message" className={styles.formLabel}>
									{t.contact.form.message}
								</label>
								<textarea
									id="message"
									rows={5}
									placeholder={t.contact.form.messagePlaceholder}
									className={styles.formTextarea}
								/>
							</div>
							<button type="submit" className={styles.submitButton}>
								{t.contact.form.submit}
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;