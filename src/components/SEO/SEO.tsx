import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../contexts/LanguageContext';

const seoContent = {
	uk: {
		title:
			'Розробка сайтів та веб-додатків в Києві | Студія FAIMCore — від 18 000 грн',
		description:
			'FAIMCore — студія веб-розробки в Києві. Розробка сайтів під ключ за 2–6 тижнів: лендінги від 18 000 грн, корпоративні сайти від 45 000 грн, веб-застосунки від 90 000 грн. Фікс-ціна, ФОП, повний код у вас. Дзвоніть: +38 098 550 77 99.',
		keywords:
			'розробка сайтів Київ, створення сайтів Україна, веб-розробка Київ, ціна сайту, замовити сайт, розробка веб-додатків, веб-студія Київ, лендінг пейдж Київ, корпоративний сайт, інтернет-магазин розробка, MVP розробка, React розробник, FAIMCore',
		ogTitle: 'Розробка сайтів в Києві — FAIMCore | Лендінги, веб-додатки, MVP',
		ogDescription:
			'Студія веб-розробки FAIMCore у Києві. Сайти під ключ за 2–6 тижнів. Фіксована ціна, ФОП, повний код у вас. Лендінг від 18 000 грн.',
		locale: 'uk_UA',
	},
	en: {
		title:
			'Web Development Studio in Kyiv | FAIMCore — Websites & Web Apps from $500',
		description:
			'FAIMCore is a web development studio in Kyiv, Ukraine. Turnkey websites in 2–6 weeks: landing pages from $500, corporate websites from $1,200, custom web apps from $2,500. Fixed price, full source code yours. Call +380 98 550 77 99.',
		keywords:
			'web development Kyiv, website development Ukraine, Ukrainian web studio, hire React developer Ukraine, web app development, landing page development, MVP development Ukraine, custom web application, FAIMCore',
		ogTitle: 'Web Development Studio in Kyiv — FAIMCore',
		ogDescription:
			'Turnkey websites and web apps in 2–6 weeks. Fixed price, full source. Landing from $500.',
		locale: 'en_US',
	},
};

const SEO = () => {
	const { language } = useLanguage();
	const content = seoContent[language];
	const url =
		language === 'en' ? 'https://faimcore.com/?lang=en' : 'https://faimcore.com/';
	const ogImage = 'https://faimcore.com/og-image.jpg';

	return (
		<Helmet>
			<html lang={language} />

			<title>{content.title}</title>
			<meta name="title" content={content.title} />
			<meta name="description" content={content.description} />
			<meta name="keywords" content={content.keywords} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={content.ogTitle} />
			<meta property="og:description" content={content.ogDescription} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:locale" content={content.locale} />
			<meta
				property="og:locale:alternate"
				content={language === 'uk' ? 'en_US' : 'uk_UA'}
			/>

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:url" content={url} />
			<meta name="twitter:title" content={content.ogTitle} />
			<meta name="twitter:description" content={content.ogDescription} />
			<meta name="twitter:image" content={ogImage} />

			<link rel="canonical" href={url} />
		</Helmet>
	);
};

export default SEO;
