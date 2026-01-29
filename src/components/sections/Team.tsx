import { motion } from 'framer-motion';
import { LinkedInLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Team.module.scss';

const memberKeys = ['igor', 'anna', 'alex'] as const;
const memberImages = [
	'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
];

const Team = () => {
	const { theme } = useTheme();
	const { t } = useLanguage();

	const team = memberKeys.map((key, index) => ({
		id: index + 1,
		key,
		name: t.team.members[key].name,
		role: t.team.members[key].role,
		bio: t.team.members[key].bio,
		image: memberImages[index],
		social: { linkedin: '#', github: '#', twitter: '#' },
	}));

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
					<span className={styles.label}>{t.team.label}</span>
					<h2 className={styles.title}>{t.team.title}</h2>
					<p className={styles.subtitle}>{t.team.subtitle}</p>
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
								{member.social && (
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
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Team;