import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const apiKey = 'RucsN9N3ZBmOZOFt9HYf0g';
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		supportedLngs: ['en', 'no'],

		lookupFromPathIndex: 0,
		lookupFromSubdomainIndex: 0,

		ns: ['navbar', 'hero', 'about', 'projects', 'contact', 'footer'],

		detection: {
			caches: [],
		},

		backend: {
			loadPath: loadPath,
		},
	});
