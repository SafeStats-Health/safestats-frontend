import {useState} from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import door from '../../assets/images/door.svg';
import hamburger from '../../assets/images/hamburger.svg';
import close from '../../assets/images/close.svg'
import {Link} from 'react-router-dom';

function DrawerMenu(props) {

  const [highlightedPage, highlightPage] = useState(props.selectedPage ?? 'GENERAL');

  function logout() {
    document.getElementById('logoutLink').click();
  }

  function closeDrawer() {
    props.setDrawerOpen(false);
  }

  function selectProfilePage(pageName) {
    highlightPage(pageName)
    props.selectProfilePage(pageName)
  }

  return (
    <div className={styles['drawer']}>
      <Link to="/" id='logoutLink'/>
      <div className={styles['top-section']} onClick={closeDrawer}>
        <img src={close} alt='Close' className={`${styles.icon} ${styles.clickable}`}/>
      </div>
      <div className={styles['middle-section']}>
        <div
          onClick={() => {
            selectProfilePage('GENERAL')
          }}
          className={`${styles['profile-page-link']} ${styles.clickable} ${highlightedPage === "GENERAL" ? styles.selected : ''}`}
        >
          {t('GENERAL')}
        </div>
        <div
          onClick={() => {
            selectProfilePage('PERSONAL_DATA')
          }}
          className={`${styles['profile-page-link']} ${styles.clickable} ${highlightedPage === "PERSONAL_DATA" ? styles.selected : ''}`}
        >
          {t('PERSONAL_DATA')}
        </div>
        <div
          onClick={() => {
            selectProfilePage('TRUSTWORTHY_CONTACT')
          }}
          className={`${styles['profile-page-link']} ${styles.clickable} ${highlightedPage === "TRUSTWORTHY_CONTACT" ? styles.selected : ''}`}
        >
          {t('TRUSTWORTHY_CONTACT')}
        </div>
        <div
          onClick={() => {
            selectProfilePage('HEALTH_PLAN')
          }}
          className={`${styles['profile-page-link']} ${styles.clickable} ${highlightedPage === "HEALTH_PLAN" ? styles.selected : ''}`}
        >
          {t('HEALTH_PLAN')}
        </div>
        <div
          onClick={() => {
            selectProfilePage('BLOOD_DONATION')
          }}
          className={`${styles['profile-page-link']} ${styles.clickable} ${highlightedPage === "BLOOD_DONATION" ? styles.selected : ''}`}
        >
          {t('BLOOD_DONATION')}
        </div>
        <div
          onClick={() => {
            selectProfilePage('STATISTICS')
          }}
          className={`${styles['profile-page-link']} ${styles.clickable} ${highlightedPage === "STATISTICS" ? styles.selected : ''}`}
        >
          {t('STATISTICS')}
        </div>
        <div
          onClick={() => {
            selectProfilePage('CHANGE_PASSWORD')
          }}
          className={`${styles['profile-page-link']} ${styles.clickable} ${highlightedPage === "CHANGE_PASSWORD" ? styles.selected : ''}`}
        >
          {t('CHANGE_PASSWORD')}
        </div>
        <div
          onClick={() => {
            selectProfilePage('DELETE_ACCOUNT')
          }}
          className={`${styles['profile-page-link']} ${styles.clickable} ${highlightedPage === "DELETE_ACCOUNT" ? styles.selected : ''}`}
        >
          {t('DELETE_ACCOUNT')}
        </div>
      </div>
      <div className={styles['bottom-section']}>
        <div onClick={logout} className={`${styles.clickable} ${styles.logout}`}>
          <img src={door} alt="Door" className={`${styles.icon} ${styles.close}`}/>
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
  const [selectedPage, selectPage] = useState('GENERAL');

  function selectProfilePage(pageName) {
    selectPage(pageName)
    props.selectProfilePage(pageName);
  }

  if (drawerOpen) {
    return <DrawerMenu setDrawerOpen={setDrawerOpen} selectProfilePage={selectProfilePage} selectedPage={selectedPage}/>
  } else {
    return <DrawerButton setDrawerOpen={setDrawerOpen}/>
  }
}
