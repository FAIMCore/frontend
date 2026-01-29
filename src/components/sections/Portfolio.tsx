import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Portfolio.module.scss';

const projects = [
	{
		id: 1,
		title: 'FinTrack Pro',
		category: 'FinTech',
		description:
			'A comprehensive financial management platform with real-time analytics, budget tracking, and investment insights.',
		tags: ['React', 'Node.js', 'PostgreSQL'],
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
	},
	{
		id: 2,
		title: 'HealthConnect',
		category: 'Healthcare',
		description:
			'Telemedicine platform connecting patients with healthcare providers through secure video consultations.',
		tags: ['Next.js', 'WebRTC', 'MongoDB'],
		image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
	},
	{
		id: 3,
		title: 'ShopFlow',
		category: 'E-commerce',
		description:
			'Modern e-commerce solution with AI-powered recommendations and seamless checkout experience.',
		tags: ['React', 'Stripe', 'Redis'],
		image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
	},
	{
		id: 4,
		title: 'EduLearn',
		category: 'EdTech',
		description:
			'Interactive learning platform with video courses, quizzes, and progress tracking for students.',
		tags: ['Vue.js', 'Firebase', 'AWS'],
		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
	},
	{
		id: 5,
		title: 'LogiTrack',
		category: 'Logistics',
		description:
			'Real-time fleet management and delivery tracking system with route optimization.',
		tags: ['React Native', 'GraphQL', 'Maps API'],
		image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
	},
	{
		id: 6,
		title: 'EventHub',
		category: 'Events',
		description:
			'Event management platform with ticketing, scheduling, and attendee engagement features.',
		tags: ['Next.js', 'Prisma', 'Stripe'],
		image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
	},
];

const Portfolio = () => {
	const { theme } = useTheme();

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
					<span className={styles.label}>Portfolio</span>
					<h2 className={styles.title}>Our recent work</h2>
					<p className={styles.subtitle}>
						Explore some of our latest projects that showcase our expertise in
						building powerful digital solutions.
					</p>
				</motion.div>

				<div className={styles.grid}>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className={styles.card}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<div className={styles.imageWrapper}>
								<img
									src={project.image}
									alt={project.title}
									className={styles.image}
								/>
								<div className={styles.overlay}>
									<button className={styles.viewButton}>
										<ExternalLinkIcon />
										<span>View Project</span>
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
				</div>
			</div>
		</section>
	);
};

export default Portfolio;