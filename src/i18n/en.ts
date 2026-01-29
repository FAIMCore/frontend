export const en = {
	nav: {
		about: 'About',
		services: 'Services',
		portfolio: 'Portfolio',
		team: 'Team',
		blog: 'Blog',
		contact: 'Contact',
	},
	hero: {
		tagline: 'Foundation • Aim • Core',
		title: 'We build digital',
		titleLine2: 'foundations that last',
		subtitle: 'Strong foundation. Clear aim. Solid core.',
		cta: 'Get Started',
		ctaSecondary: 'View Portfolio',
		scroll: 'Scroll to explore',
	},
	about: {
		label: 'About Us',
		title: 'Foundation. Aim. Core.',
		description1:
			'FAIMCore stands for what we believe in: Foundation — we build solid groundwork for your business. Aim — your success is our goal. Core — we become the heart of your digital operations.',
		description2:
			'Our process is straightforward: we listen, we plan, we execute. No unnecessary complexity, no missed deadlines. Just reliable development that delivers what you need, when you need it.',
		stats: {
			projects: 'Projects Delivered',
			clients: 'Satisfied Clients',
			experience: 'Years Experience',
			satisfaction: 'Client Satisfaction',
		},
	},
	services: {
		label: 'Our Services',
		title: 'What we do',
		subtitle:
			'Comprehensive web development services designed to help your business succeed in the digital space.',
		items: {
			webDev: {
				title: 'Web Development',
				description:
					'Custom web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance and scalability.',
			},
			uiux: {
				title: 'UI/UX Design',
				description:
					'User-centered design that balances aesthetics with functionality, ensuring intuitive experiences that drive engagement.',
			},
			mobile: {
				title: 'Mobile Apps',
				description:
					'Cross-platform mobile applications using React Native, delivering consistent experiences across iOS and Android.',
			},
			mvp: {
				title: 'MVP Development',
				description:
					'Rapid prototyping and MVP development to help you validate ideas and reach the market efficiently.',
			},
			api: {
				title: 'API Integration',
				description:
					'Seamless integration with third-party services, payment systems, and custom API development.',
			},
			performance: {
				title: 'Performance Optimization',
				description:
					'Speed optimization, SEO improvements, and technical audits to maximize your digital presence.',
			},
		},
	},
	portfolio: {
		label: 'Portfolio',
		title: 'Recent projects',
		subtitle:
			'A selection of projects that demonstrate our expertise in building effective digital solutions.',
		viewProject: 'View Project',
		projects: {
			fintrack: {
				title: 'FinTrack Pro',
				category: 'FinTech',
				description:
					'Financial management platform with real-time analytics, budget tracking, and investment insights.',
			},
			health: {
				title: 'HealthConnect',
				category: 'Healthcare',
				description:
					'Telemedicine platform connecting patients with healthcare providers through secure video consultations.',
			},
			shop: {
				title: 'ShopFlow',
				category: 'E-commerce',
				description:
					'E-commerce solution with AI-powered recommendations and optimized checkout experience.',
			},
			edu: {
				title: 'EduLearn',
				category: 'EdTech',
				description:
					'Interactive learning platform with video courses, assessments, and progress tracking.',
			},
			logi: {
				title: 'LogiTrack',
				category: 'Logistics',
				description:
					'Fleet management and delivery tracking system with route optimization capabilities.',
			},
			event: {
				title: 'EventHub',
				category: 'Events',
				description:
					'Event management platform with ticketing, scheduling, and attendee management features.',
			},
		},
	},
	team: {
		label: 'Our Team',
		title: 'The people behind FAIMCore',
		subtitle:
			'A dedicated team of professionals committed to delivering excellence in every project.',
		members: {
			igor: {
				name: 'Igor Fedianin',
				role: 'Founder & Lead Developer',
				bio: 'Full-stack developer with expertise in React, Node.js, and cloud architecture. Focused on building scalable, maintainable solutions.',
			},
			anna: {
				name: 'Anna Fedianina',
				role: 'Creative Director',
				bio: 'Designer with a keen eye for detail and user experience. Specializes in creating interfaces that are both beautiful and functional.',
			},
			alex: {
				name: 'Alex Kovalenko',
				role: 'Backend Developer',
				bio: 'Backend specialist with deep knowledge of databases, APIs, and system architecture. Ensures robust and efficient server-side solutions.',
			},
		},
	},
	blog: {
		label: 'Blog',
		title: 'Insights & Articles',
		subtitle:
			'Technical insights, industry trends, and practical knowledge from our team.',
		readMore: 'Read more',
		viewAll: 'View All Articles',
		posts: {
			react: {
				title: 'Building Scalable React Applications',
				excerpt:
					'Best practices for structuring large-scale React applications with modern tooling and patterns.',
				category: 'Development',
			},
			design: {
				title: 'Web Design Trends to Watch',
				excerpt:
					'Emerging design trends that are shaping the future of web interfaces.',
				category: 'Design',
			},
			performance: {
				title: 'Performance Optimization Guide',
				excerpt:
					'A practical guide to improving loading times and runtime performance of web applications.',
				category: 'Performance',
			},
		},
		minRead: 'min read',
	},
	contact: {
		label: 'Contact',
		title: 'Let\'s talk',
		description:
			'Choose a convenient way to contact us. We respond quickly and are always ready to discuss your project.',
		info: {
			email: {
				title: 'Email',
				value: 'hello@faimcore.com',
			},
			phone: {
				title: 'Phone',
				value: '+38 098 550 77 99',
			},
			location: {
				title: 'Location',
				value: 'Kyiv, Ukraine',
			},
		},
		cta: {
			telegram: 'Telegram',
			telegramDesc: 'Popular in Ukraine',
			whatsapp: 'WhatsApp',
			whatsappDesc: 'International clients',
			response: 'Usually respond within 5 minutes',
		},
	},
	footer: {
		description:
			'Foundation • Aim • Core — Building digital foundations for your business success.',
		company: 'Company',
		services: 'Services',
		resources: 'Resources',
		links: {
			about: 'About',
			team: 'Team',
			careers: 'Careers',
			blog: 'Blog',
			webDev: 'Web Development',
			uiux: 'UI/UX Design',
			mobile: 'Mobile Apps',
			mvp: 'MVP Development',
			docs: 'Documentation',
			help: 'Help Center',
			privacy: 'Privacy Policy',
			terms: 'Terms of Service',
		},
		copyright: '© {year} FAIMCore. All rights reserved.',
		madeWith: 'Based in Ukraine',
	},
};

export type Translations = typeof en;