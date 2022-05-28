import {useState} from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import door from '../../assets/images/door.svg';
import hamburger from '../../assets/images/hamburger.svg';

export default function Drawer() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <div>
      <div className={isActive ? styles.none : styles.drawerPos}>
        <div className={styles.xPos}>
          <button className={styles.xButton} onClick={handleClick}>
            <span>{t('X')}</span>
          </button>
        </div>
        <div className={styles.optionsPos}>
          <a href="">{t('PROFILE')}</a>
          <a href="">{t('PERSONAL_DATA')}</a>
          <a href="">{t('TRUSTWORTHY_CONTACT')}</a>
          <a href="">{t('HEALTH_PLAN')}</a>
          <a href="">{t('BLOOD_DONATION')}</a>
          <a href="">{t('CHANGE_PASSWORD')}</a>
          <a href="">{t('DELETE_ACCOUNT')}</a>
        </div>
        <div className={styles.exit}>
          <a href="" className={styles.exitAnchor}>
            <img src={door} alt="Door"/>
            <span>{t('EXIT')}</span>
          </a>
        </div>
      </div>
      <div className={isActive ? styles.hamburgerMenu : styles.none} onClick={handleClick}>
        <img src={hamburger} alt="Hamburger"/>
        <span className={styles.menu}>{t('MENU')}</span>
      </div>
    </div>
  )
}
