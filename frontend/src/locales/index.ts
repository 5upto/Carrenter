
import en from "./translations/en.json"
import hi from "./translations/hi.json"
import bn from "./translations/bn.json"

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const initialLanguage=localStorage.getItem('lang')  || navigator.language || 'en'
export const i18nInstance = i18n.use(initReactI18next)

i18nInstance.init({
    resources: {
      en: {
        translation:en
        
      },
      hi: {
        translation: hi
      },
      bn: {
        translation:bn
      },
    },
    fallbackLng: initialLanguage,

    interpolation: {
      escapeValue: false
    }});