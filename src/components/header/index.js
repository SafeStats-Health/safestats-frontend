import React from 'react';
import './style.css';

import t from '../../i18n/translate';

export default function Header() {
  return <div className='main-div'>{t('WELCOME_TO_SAFESTATS')}</div>;
}
