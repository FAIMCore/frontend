import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../contexts/LanguageContext';

const seoContent = {
	uk: {
		title:
			'Розробка ERP та CRM для інтернет-магазинів | FAIMCore — кастомні системи для e-commerce',
		description:
			'FAIMCore — українська команда, що розробляє кастомні ERP, CRM та OMS-системи для інтернет-магазинів. Замовлення, склад, маркетплейси (Rozetka, Prom, Хорошоп), Нова Пошта, 1С — в одній системі. Стартова CRM від 60 000 грн, ERP від 180 000 грн. Дзвоніть: +38 098 550 77 99.',
		keywords:
			'розробка ERP, CRM для інтернет-магазину, ERP для e-commerce, автоматизація онлайн-магазину, інтеграція з Новою Поштою, синхронізація з Rozetka, інтеграція Prom, інтеграція Хорошоп, WMS система, OMS система, кастомна CRM, розробка систем обліку, інтеграція 1С, розробка під ключ Київ, FAIMCore',
		ogTitle: 'Кастомні ERP та CRM для e-commerce — FAIMCore',
		ogDescription:
			'Розробляємо ERP, CRM та OMS-системи для інтернет-магазинів, що переросли Prom, Хорошоп, OpenCart. Замовлення, склад, маркетплейси, Нова Пошта, 1С — в одній системі.',
		locale: 'uk_UA',
	},
	en: {
		title:
			'ERP & CRM Development for E-commerce | FAIMCore — Custom Systems for Online Stores',
		description:
			'FAIMCore is a Ukrainian engineering team building custom ERP, CRM and OMS systems for online stores. Orders, warehouse, marketplaces (Rozetka, Prom, Хорошоп), Nova Poshta, 1С — in one system. Starter CRM from $1,500, ERP from $4,500. Call +380 98 550 77 99.',
		keywords:
			'ERP development, CRM for online store, e-commerce ERP, online store automation, Nova Poshta integration, Rozetka API, Prom integration, Хорошоп integration, WMS, OMS, custom CRM, accounting system development, 1С integration, custom ERP Ukraine, FAIMCore',
		ogTitle: 'Custom ERP & CRM for E-commerce — FAIMCore',
		ogDescription:
			'We build custom ERP, CRM and OMS systems for online stores that outgrew Prom, Хорошоп, OpenCart. Orders, warehouse, marketplaces, Nova Poshta, 1С — in one system.',
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
