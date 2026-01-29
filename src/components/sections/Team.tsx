import { motion } from 'framer-motion';
import { LinkedInLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Team.module.scss';

const team = [
	{
		id: 1,
		name: 'Igor Fedianin',
		role: 'Founder & Lead Developer',
		bio: 'Full-stack developer with 5+ years of experience building scalable web applications.',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
		social: { linkedin: '#', github: '#', twitter: '#' },
	},
	{
		id: 2,
		name: 'Maria Kovalenko',
		role: 'UI/UX Designer',
		bio: 'Creative designer passionate about crafting intuitive and beautiful user experiences.',
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
		social: { linkedin: '#', github: '#', twitter: '#' },
	},
	{
		id: 3,
		name: 'Oleksandr Petrenko',
		role: 'Backend Developer',
		bio: 'Expert in building robust APIs and database architectures for high-traffic applications.',
		image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
		social: { linkedin: '#', github: '#', twitter: '#' },
	},
	{
		id: 4,
		name: 'Anna Shevchenko',
		role: 'Frontend Developer',
		bio: 'React specialist focused on creating performant and accessible web interfaces.',
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
		social: { linkedin: '#', github: '#', twitter: '#' },
	},
];

const Team = () => {
	const { theme } = useTheme();

	return (
		<section
			id="team"
			className={`${styles.team} ${theme === 'light' ? styles.light : styles.dark}`}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}>
					<span className={styles.label}>Our Team</span>
					<h2 className={styles.title}>Meet the experts</h2>
					<p className={styles.subtitle}>
						A talented team of developers and designers committed to delivering
						exceptional digital solutions.
					</p>
				</motion.div>

				<div className={styles.grid}>
					{team.map((member, index) => (
						<motion.div
							key={member.id}
							className={styles.card}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<div className={styles.imageWrapper}>
								<img
									src={member.image}
									alt={member.name}
									className={styles.image}
								/>
							</div>
							<div className={styles.content}>
								<h3 className={styles.name}>{member.name}</h3>
								<span className={styles.role}>{member.role}</span>
								<p className={styles.bio}>{member.bio}</p>
								<div className={styles.social}>
									<a href={member.social.linkedin} className={styles.socialLink}>
										<LinkedInLogoIcon />
									</a>
									<a href={member.social.github} className={styles.socialLink}>
										<GitHubLogoIcon />
									</a>
									<a href={member.social.twitter} className={styles.socialLink}>
										<TwitterLogoIcon />
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Team;