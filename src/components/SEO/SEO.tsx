import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../contexts/LanguageContext';

const seoContent = {
	uk: {
		title: 'FAIMCore - Студія веб-розробки в Києві | Створення сайтів та веб-додатків',
		description:
			'FAIMCore — професійна студія веб-розробки в Україні. Створюємо сучасні веб-сайти, веб-додатки та мобільні застосунки на React, Next.js, TypeScript. Індивідуальний підхід, якісний код, вчасна доставка.',
		keywords:
			'веб-розробка Київ, створення сайтів Україна, розробка веб-додатків, React розробка, фронтенд розробка, UI/UX дизайн, мобільні додатки, MVP розробка, веб-студія Київ, FAIMCore',
		locale: 'uk_UA',
	},
	en: {
		title: 'FAIMCore - Web Development Studio in Kyiv | Websites & Web Apps',
		description:
			'FAIMCore is a professional web development studio in Ukraine. We build modern websites, web applications and mobile apps using React, Next.js, TypeScript. Quality code, on-time delivery.',
		keywords:
			'web development Kyiv, website creation Ukraine, web app development, React development, frontend development, UI/UX design, mobile apps, MVP development, web studio Ukraine, FAIMCore',
		locale: 'en_US',
	},
};

const SEO = () => {
	const { language } = useLanguage();
	const content = seoContent[language];
	const url = 'https://faimcore.com/';
	const ogImage = 'https://faimcore.com/og-image.jpg';
	const twitterImage = 'https://faimcore.com/twitter-image.jpg';

	return (
		<Helmet>
			{/* Language */}
			<html lang={language} />

			{/* Primary Meta Tags */}
			<title>{content.title}</title>
			<meta name='title' content={content.title} />
			<meta name='description' content={content.description} />
			<meta name='keywords' content={content.keywords} />

			{/* Open Graph / Facebook */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={url} />
			<meta property='og:title' content={content.title} />
			<meta property='og:description' content={content.description} />
			<meta property='og:image' content={ogImage} />
			<meta property='og:locale' content={content.locale} />

			{/* Twitter */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:url' content={url} />
			<meta name='twitter:title' content={content.title} />
			<meta name='twitter:description' content={content.description} />
			<meta name='twitter:image' content={twitterImage} />

			{/* Canonical URL */}
			<link rel='canonical' href={url} />
		</Helmet>
	);
};

export default SEO;