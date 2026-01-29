import { motion } from 'framer-motion';
import { EnvelopeClosedIcon, ChatBubbleIcon, GlobeIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Contact.module.scss';

const contactInfo = [
	{
		icon: EnvelopeClosedIcon,
		title: 'Email Us',
		value: 'hello@faimcore.com',
		description: 'We reply within 24 hours',
	},
	{
		icon: ChatBubbleIcon,
		title: 'Live Chat',
		value: 'Start a conversation',
		description: 'Available Mon-Fri, 9am-6pm',
	},
	{
		icon: GlobeIcon,
		title: 'Location',
		value: 'Kyiv, Ukraine',
		description: 'Working worldwide',
	},
];

const Contact = () => {
	const { theme } = useTheme();

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
						<span className={styles.label}>Contact Us</span>
						<h2 className={styles.title}>
							Let's build something amazing together
						</h2>
						<p className={styles.description}>
							Ready to transform your digital presence? Get in touch with us
							today and let's discuss how we can help bring your vision to life.
						</p>

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
										Name
									</label>
									<input
										type="text"
										id="name"
										placeholder="John Doe"
										className={styles.formInput}
									/>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="email" className={styles.formLabel}>
										Email
									</label>
									<input
										type="email"
										id="email"
										placeholder="john@example.com"
										className={styles.formInput}
									/>
								</div>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor="subject" className={styles.formLabel}>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									placeholder="Project inquiry"
									className={styles.formInput}
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor="message" className={styles.formLabel}>
									Message
								</label>
								<textarea
									id="message"
									rows={5}
									placeholder="Tell us about your project..."
									className={styles.formTextarea}
								/>
							</div>
							<button type="submit" className={styles.submitButton}>
								Send Message
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;