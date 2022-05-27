import React from 'react';
import { Link } from 'react-router-dom';
import t from '../../i18n/translate';

export default function Header() {
  return (
    <header className='header'>
      <h3>{t('WELCOME_TO_SAFESTATS')}</h3>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </header>
  );
}
