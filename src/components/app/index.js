import { useState } from 'react';
import logo from '../../assets/logo.svg';
import './style.css';
import Header from '../header';

import { I18nProvider, LOCALES } from '../../i18n';

function App() {
  const [locale, setLocale] = useState(LOCALES.PORTUGUESE);
  return (
    <I18nProvider locale={locale}>
      <div className='App'>
        <header className='App-header'>
          <Header />
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
