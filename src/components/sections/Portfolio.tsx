import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Portfolio.module.scss';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
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

const projectKeys = ['fintrack', 'health', 'shop', 'edu', 'logi', 'event'] as const;
const projectImages = [
	'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
	'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
	'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
	'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
	'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
	'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
];
const projectTags = [
	['React', 'Node.js', 'PostgreSQL'],
	['Next.js', 'WebRTC', 'MongoDB'],
	['React', 'Stripe', 'Redis'],
	['Vue.js', 'Firebase', 'AWS'],
	['React Native', 'GraphQL', 'Maps API'],
	['Next.js', 'Prisma', 'Stripe'],
];

const Portfolio = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	const projects = projectKeys.map((key, index) => ({
		id: index + 1,
		title: t.portfolio.projects[key].title,
		category: t.portfolio.projects[key].category,
		description: t.portfolio.projects[key].description,
		tags: projectTags[index],
		image: projectImages[index],
	}));

	return (
		<section
			id="portfolio"
			className={`${styles.portfolio} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>{t.portfolio.label}</span>
					<h2 className={styles.title}>{t.portfolio.title}</h2>
					<p className={styles.subtitle}>{t.portfolio.subtitle}</p>
				</motion.div>

				<motion.div
					className={styles.grid}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className={styles.card}
							variants={cardVariants}>
							<div className={styles.imageWrapper}>
								<img
									src={project.image}
									alt={project.title}
									className={styles.image}
								/>
								<div className={styles.overlay}>
									<button className={styles.viewButton}>
										<ExternalLinkIcon />
										<span>{t.portfolio.viewProject}</span>
									</button>
								</div>
							</div>
							<div className={styles.content}>
								<span className={styles.category}>{project.category}</span>
								<h3 className={styles.cardTitle}>{project.title}</h3>
								<p className={styles.cardDescription}>{project.description}</p>
								<div className={styles.tags}>
									{project.tags.map((tag) => (
										<span key={tag} className={styles.tag}>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Portfolio;