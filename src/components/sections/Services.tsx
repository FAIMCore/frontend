import { motion } from 'framer-motion';
import {
	CodeIcon,
	DesktopIcon,
	MobileIcon,
	RocketIcon,
	GearIcon,
	LightningBoltIcon,
} from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Services.module.scss';

const serviceIcons = [CodeIcon, DesktopIcon, MobileIcon, RocketIcon, GearIcon, LightningBoltIcon];
const serviceKeys = ['webDev', 'uiux', 'mobile', 'mvp', 'api', 'performance'] as const;

const Services = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	const services = serviceKeys.map((key, index) => ({
		icon: serviceIcons[index],
		title: t.services.items[key].title,
		description: t.services.items[key].description,
	}));

	return (
		<section
			id="services"
			className={`${styles.services} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>{t.services.label}</span>
					<h2 className={styles.title}>{t.services.title}</h2>
					<p className={styles.subtitle}>{t.services.subtitle}</p>
				</motion.div>

				<div className={styles.grid}>
					{services.map((service, index) => (
						<motion.div
							key={serviceKeys[index]}
							className={styles.card}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<div className={styles.iconWrapper}>
								<service.icon className={styles.icon} />
							</div>
							<h3 className={styles.cardTitle}>{service.title}</h3>
							<p className={styles.cardDescription}>{service.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;