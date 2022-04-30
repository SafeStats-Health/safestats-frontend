import { useState } from 'react';
import './App.css';

import { I18nProvider, LOCALES } from './i18n';

import { BrowserRouter } from 'react-router-dom';
import Router from './router';

function App() {
  const [locale, setLocale] = useState(LOCALES.PORTUGUESE);
  return (
    <I18nProvider locale={locale}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
