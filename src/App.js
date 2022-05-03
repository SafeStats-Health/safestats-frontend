import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom'

import t from './i18n/translate';
=======
>>>>>>> feature-frontend-02
import { I18nProvider, LOCALES } from './i18n';
import Router from './router';

function App() {
  const [locale, setLocale] = useState(LOCALES.PORTUGUESE);
  return (
    <I18nProvider locale={locale}>
      <BrowserRouter>
<<<<<<< HEAD
        <Header />
=======
>>>>>>> feature-frontend-02
        <Router />
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
