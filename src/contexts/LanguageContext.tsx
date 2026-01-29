import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { en, uk, type Translations } from '../i18n';

type Language = 'en' | 'uk';

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	toggleLanguage: () => void;
	t: Translations;
}

const translations: Record<Language, Translations> = { en, uk };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguageState] = useState<Language>(() => {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('language') as Language;
			if (saved && (saved === 'en' || saved === 'uk')) {
				return saved;
			}
		}
		return 'en';
	});

	const setLanguage = useCallback((lang: Language) => {
		setLanguageState(lang);
		localStorage.setItem('language', lang);
	}, []);

	const toggleLanguage = useCallback(() => {
		setLanguageState((prev) => {
			const next = prev === 'en' ? 'uk' : 'en';
			localStorage.setItem('language', next);
			return next;
		});
	}, []);

	const t = translations[language];

	return (
		<LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};