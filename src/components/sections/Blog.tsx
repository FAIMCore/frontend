import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Blog.module.scss';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
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

const postKeys = ['react', 'design', 'performance'] as const;
const postImages = [
	'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
	'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
	'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
];
const postDates = ['Jan 15, 2024', 'Jan 10, 2024', 'Jan 5, 2024'];
const postReadTimes = [8, 6, 10];

const Blog = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	const posts = postKeys.map((key, index) => ({
		id: index + 1,
		title: t.blog.posts[key].title,
		excerpt: t.blog.posts[key].excerpt,
		category: t.blog.posts[key].category,
		date: postDates[index],
		readTime: `${postReadTimes[index]} ${t.blog.minRead}`,
		image: postImages[index],
	}));

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
					<span className={styles.label}>{t.blog.label}</span>
					<h2 className={styles.title}>{t.blog.title}</h2>
					<p className={styles.subtitle}>{t.blog.subtitle}</p>
				</motion.div>

				<motion.div
					className={styles.grid}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}>
					{posts.map((post) => (
						<motion.article
							key={post.id}
							className={styles.card}
							variants={cardVariants}>
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
									{t.blog.readMore}
									<ArrowRightIcon />
								</a>
							</div>
						</motion.article>
					))}
				</motion.div>

				<motion.div
					className={styles.viewAll}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<button className={styles.viewAllButton}>
						{t.blog.viewAll}
						<ArrowRightIcon />
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default Blog;