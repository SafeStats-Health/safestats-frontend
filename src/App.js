import { useState } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom'

import t from './i18n/translate';
import { I18nProvider, LOCALES } from './i18n';

import Router from './router';

function App() {
  const [locale, setLocale] = useState(LOCALES.PORTUGUESE);
  return (
    <I18nProvider locale={locale}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
