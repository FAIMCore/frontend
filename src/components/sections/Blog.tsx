import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Blog.module.scss';

const posts = [
	{
		id: 1,
		title: 'Building Scalable React Applications in 2024',
		excerpt:
			'Learn the best practices for structuring large-scale React applications with modern tooling and patterns.',
		category: 'Development',
		date: 'Jan 15, 2024',
		readTime: '8 min read',
		image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
	},
	{
		id: 2,
		title: 'The Future of Web Design: Trends to Watch',
		excerpt:
			'Explore the emerging design trends that will shape the web in the coming years.',
		category: 'Design',
		date: 'Jan 10, 2024',
		readTime: '6 min read',
		image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
	},
	{
		id: 3,
		title: 'Optimizing Performance for Modern Web Apps',
		excerpt:
			'A comprehensive guide to improving loading times and runtime performance of your web applications.',
		category: 'Performance',
		date: 'Jan 5, 2024',
		readTime: '10 min read',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
	},
];

const Blog = () => {
	const { theme } = useTheme();

	return (
		<section
			id="blog"
			className={`${styles.blog} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>Blog</span>
					<h2 className={styles.title}>Latest insights</h2>
					<p className={styles.subtitle}>
						Stay up to date with the latest trends, tutorials, and insights from
						our team.
					</p>
				</motion.div>

				<div className={styles.grid}>
					{posts.map((post, index) => (
						<motion.article
							key={post.id}
							className={styles.card}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<div className={styles.imageWrapper}>
								<img
									src={post.image}
									alt={post.title}
									className={styles.image}
								/>
								<span className={styles.category}>{post.category}</span>
							</div>
							<div className={styles.content}>
								<div className={styles.meta}>
									<span className={styles.metaItem}>
										<CalendarIcon />
										{post.date}
									</span>
									<span className={styles.metaItem}>
										<ClockIcon />
										{post.readTime}
									</span>
								</div>
								<h3 className={styles.cardTitle}>{post.title}</h3>
								<p className={styles.excerpt}>{post.excerpt}</p>
								<a href="#" className={styles.readMore}>
									Read more
									<ArrowRightIcon />
								</a>
							</div>
						</motion.article>
					))}
				</div>

				<motion.div
					className={styles.viewAll}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}>
					<button className={styles.viewAllButton}>
						View All Articles
						<ArrowRightIcon />
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default Blog;