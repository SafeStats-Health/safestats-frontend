import React from 'react';
import './style.css';

import t from '../../i18n/translate';

export default function Header() {
  return (
    <header className='header'>
      <h3>{t('WELCOME_TO_SAFESTATS')}</h3>
    </header>
  );
}
