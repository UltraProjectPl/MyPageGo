import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            security: {
                login: 'Login',
                password: 'Password',
            }
        }
    },
    pl: {
        translation: {
            security: {
                login: 'Login',
                password: 'Hasło',
            }
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;