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

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.5 },
	},
};

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

				<motion.div
					className={styles.grid}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}>
					{services.map((service, index) => (
						<motion.div
							key={serviceKeys[index]}
							className={styles.card}
							variants={cardVariants}>
							<div className={styles.iconWrapper}>
								<service.icon className={styles.icon} />
							</div>
							<h3 className={styles.cardTitle}>{service.title}</h3>
							<p className={styles.cardDescription}>{service.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;