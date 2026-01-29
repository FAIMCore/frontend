import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
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

const detectLanguageFromLocation = async (): Promise<Language> => {
	try {
		const response = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
		const data = await response.json();
		return data.country_code === 'UA' ? 'uk' : 'en';
	} catch {
		// Fallback to browser language
		const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en';
		return browserLang.startsWith('uk') ? 'uk' : 'en';
	}
};

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

	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem('language');
		if (!saved) {
			detectLanguageFromLocation().then((detectedLang) => {
				setLanguageState(detectedLang);
				localStorage.setItem('language', detectedLang);
				setInitialized(true);
			});
		} else {
			setInitialized(true);
		}
	}, []);

	// Don't render until language is determined (prevents flash)
	if (!initialized && !localStorage.getItem('language')) {
		return null;
	}

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