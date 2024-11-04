import '@/styles/globals.css'
import { DevProvider } from '@/context/DevProvider'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from '../translations/es/global.json';
import global_en from '../translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
})


export default function App({ Component, pageProps }) {
  return ( 
    <I18nextProvider i18n={i18next}>
      <DevProvider>
        <Component {...pageProps} />
      </DevProvider>
    </I18nextProvider>
    )
}
