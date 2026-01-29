import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
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

// Get initial language synchronously (no async detection on first render)
const getInitialLanguage = (): Language => {
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('language') as Language;
		if (saved && (saved === 'en' || saved === 'uk')) {
			return saved;
		}
		// Check browser language synchronously
		const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'uk';
		return browserLang.startsWith('uk') ? 'uk' : 'uk'; // Default to Ukrainian
	}
	return 'uk'; // Default to Ukrainian
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguageState] = useState<Language>(getInitialLanguage);

	// Only detect from IP if no saved preference (runs once, doesn't block render)
	useEffect(() => {
		const saved = localStorage.getItem('language');
		if (!saved) {
			// Async detection - updates language if different, but doesn't block initial render
			fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) })
				.then(res => res.json())
				.then(data => {
					const detected: Language = data.country_code === 'UA' ? 'uk' : 'en';
					// Only update if different from current (Ukrainian default)
					if (detected !== 'uk') {
						setLanguageState(detected);
						localStorage.setItem('language', detected);
					} else {
						localStorage.setItem('language', 'uk');
					}
				})
				.catch(() => {
					// On error, keep Ukrainian and save it
					localStorage.setItem('language', 'uk');
				});
		}
	}, []);

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