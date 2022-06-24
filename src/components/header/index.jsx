import React from 'react';
import { Link } from 'react-router-dom';
import t from '../../i18n/translate';
import styles from './styles.module.css';
import SafeStats from '../../assets/images/landing_page/safe_stats.png';
import SafeStatsAlt from '../../assets/images/landing_page/safe_stats_alt.png';
import User from '../../assets/images/landing_page/user.png';
import UserAlt from '../../assets/images/landing_page/user_alt.png';

export default function Header(props) {

  function goToLogin () {
    document.getElementById('loginLink').click();
  }

  return (
    <div className={styles.header}>
      <Link to='/' className={styles['logo-link']}>
        <img className={styles['img-safe-stats']} src={props.alt ? SafeStatsAlt : SafeStats} />
      </Link>
      <div className={styles.links}>
        <Link
          to='/about_us'
          className={props.alt ? styles['text-white'] : styles['text-blue']}
        > {t('ABOUT_US')} </Link>

        <Link
          to='/contact'
          className={props.alt ? styles['text-white'] : styles['text-blue']}
        > {t('CONTACT')} </Link>

        <Link
          to='/register'
          className={props.alt ? styles['text-white'] : styles['text-blue']}
        > {t('REGISTER')} </Link>
        <img className={styles['img-user']} src={props.alt ? UserAlt : User} onClick={goToLogin}/>
        
        <Link to='/login' id="loginLink" />
      </div>
    </div>
  );
}
