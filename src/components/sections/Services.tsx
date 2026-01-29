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
import styles from './Services.module.scss';

const services = [
	{
		icon: CodeIcon,
		title: 'Web Development',
		description:
			'Custom web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance.',
	},
	{
		icon: DesktopIcon,
		title: 'UI/UX Design',
		description:
			'Beautiful, intuitive interfaces designed with user experience at the forefront, ensuring engagement and conversions.',
	},
	{
		icon: MobileIcon,
		title: 'Mobile Apps',
		description:
			'Cross-platform mobile applications using React Native that deliver native-like experiences on iOS and Android.',
	},
	{
		icon: RocketIcon,
		title: 'MVP Development',
		description:
			'Rapid prototyping and MVP development to help startups validate ideas and get to market quickly.',
	},
	{
		icon: GearIcon,
		title: 'API Integration',
		description:
			'Seamless integration with third-party services, payment gateways, and custom API development.',
	},
	{
		icon: LightningBoltIcon,
		title: 'Performance Optimization',
		description:
			'Speed optimization, SEO improvements, and technical audits to maximize your digital presence.',
	},
];

const Services = () => {
	const { theme } = useTheme();

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
					<span className={styles.label}>Our Services</span>
					<h2 className={styles.title}>What we do best</h2>
					<p className={styles.subtitle}>
						We offer a comprehensive range of web development services to help
						your business thrive in the digital landscape.
					</p>
				</motion.div>

				<div className={styles.grid}>
					{services.map((service, index) => (
						<motion.div
							key={service.title}
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