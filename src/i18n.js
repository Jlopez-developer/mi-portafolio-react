import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es.json";
import en from "./locales/en.json";

i18n
  .use(LanguageDetector) // detecta idioma del sistema
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    supportedLngs: ["es", "en"],   // idiomas disponibles
    load: "languageOnly",           // en-US → en, es-419 → es
    fallbackLng: "es",              // si el idioma no es es/en → español
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
