import {useState, useEffect} from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import door from '../../assets/images/door.svg';
import hamburger from '../../assets/images/hamburger.svg';
import close from '../../assets/images/close.svg'

function DrawerMenu(props) {

  function closeDrawer() {
    props.setDrawerOpen(false);
  }

  function selectProfilePage(page) {
    props.selectProfilePage(page);
  }

  return (
    <div className={styles['drawer']}>
    <div className={styles['top-section']} onClick={closeDrawer}>
      <img src={close} alt='Close' className={`${styles.icon} ${styles.clickable}`} />
    </div>
    <div className={styles['middle-section']}>
      <div onClick={selectProfilePage('GENERAL')} className={`${styles['profile-page-link']} ${styles.clickable}`}>{t('GENERAL')}</div>
      <div onClick={selectProfilePage('PERSONAL_DATA')} className={`${styles['profile-page-link']} ${styles.clickable}`}>{t('PERSONAL_DATA')}</div>
      <div onClick={selectProfilePage('TRUSTWORTHY_CONTACT')} className={`${styles['profile-page-link']} ${styles.clickable}`}>{t('TRUSTWORTHY_CONTACT')}</div>
      <div onClick={selectProfilePage('HEALTH_PLAN')} className={`${styles['profile-page-link']} ${styles.clickable}`}>{t('HEALTH_PLAN')}</div>
      <div onClick={selectProfilePage('BLOOD_DONATION')} className={`${styles['profile-page-link']} ${styles.clickable}`}>{t('BLOOD_DONATION')}</div>
      <div onClick={selectProfilePage('CHANGE_PASSWORD')} className={`${styles['profile-page-link']} ${styles.clickable}`}>{t('CHANGE_PASSWORD')}</div>
      <div onClick={selectProfilePage('DELETE_ACCOUNT')} className={`${styles['profile-page-link']} ${styles.clickable}`}>{t('DELETE_ACCOUNT')}</div>
    </div>
    <div className={styles['bottom-section']}>
      <div className={`${styles.clickable} ${styles.logout}`}>
        <img src={door} alt="Door" className={`${styles.icon} ${styles.close}`} />
        <span>{t('EXIT')}</span>
      </div>
    </div>
  </div>
  );
}

function DrawerButton(props) {

  function openDrawer() {
    props.setDrawerOpen(true);
  }

  return (
    <div onClick={openDrawer} className={`${styles['open-drawer-button']} ${styles.clickable}`}>
      <img src={hamburger} alt="Hamburger" className={styles.hamburger}/>
      <span className={styles.menu}>{t('MENU')}</span>
    </div>
  );
}

export default function Drawer(props) {
  const [drawerOpen, setDrawerOpen] = useState(props.defaultOpen);

  function selectProfilePage(page) {
    props.selectProfilePage(page);
  }

  if (drawerOpen) {
    return <DrawerMenu setDrawerOpen={setDrawerOpen} selectProfilePage={selectProfilePage} />
  } else {
    return <DrawerButton setDrawerOpen={setDrawerOpen} />
  }
}
