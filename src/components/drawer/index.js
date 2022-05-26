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
          <span>{t('PROFILE')}</span>
          <span>{t('PERSONAL_DATA')}</span>
          <span>{t('TRUSTWORTHY_CONTACT')}</span>
          <span>{t('HEALTH_PLAN')}</span>
          <span>{t('BLOOD_DONATION')}</span>
          <span>{t('CHANGE_PASSWORD')}</span>
          <span>{t('DELETE_ACCOUNT')}</span>
        </div>
        <div className={styles.exit}>
          <img src={door} alt="door"/>
          <span>{t('EXIT')}</span>
        </div>
      </div>
      <div className={isActive ? styles.hamburgerMenu : styles.none} onClick={handleClick}>
        <img src={hamburger} alt="hamburger"/>
        <span className={styles.menu}>{t('MENU')}</span>
      </div>
    </div>
  )
}
