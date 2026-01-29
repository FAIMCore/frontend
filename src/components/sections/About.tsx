import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './About.module.scss';

const stats = [
	{ number: '50+', label: 'Projects Delivered' },
	{ number: '30+', label: 'Happy Clients' },
	{ number: '5+', label: 'Years Experience' },
	{ number: '99%', label: 'Client Satisfaction' },
];

const About = () => {
	const { theme } = useTheme();

	return (
		<section
			id="about"
			className={`${styles.about} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.content}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>About Us</span>
					<h2 className={styles.title}>
						We craft digital experiences that drive business growth
					</h2>
					<p className={styles.description}>
						FAIMCore is a web development studio founded with a mission to help
						businesses establish a powerful digital presence. We combine creative
						design with cutting-edge technology to build web applications that
						not only look stunning but also perform exceptionally.
					</p>
					<p className={styles.description}>
						Our team of passionate developers and designers work closely with
						clients to understand their unique needs and deliver tailored
						solutions that exceed expectations. From startups to enterprises,
						we've helped businesses across industries achieve their digital goals.
					</p>
				</motion.div>

				<motion.div
					className={styles.stats}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6, delay: 0.2 }}>
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							className={styles.statItem}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.1 * index }}>
							<span className={styles.statNumber}>{stat.number}</span>
							<span className={styles.statLabel}>{stat.label}</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default About;