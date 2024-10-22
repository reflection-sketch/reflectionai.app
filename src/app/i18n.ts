import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import zh from '../locales/zh.json'
import ko from '../locales/ko.json'

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    zh: zh,
    ko: ko
  },
  lng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false
  }
})

export default i18n
