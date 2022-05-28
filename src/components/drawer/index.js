import {useState} from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import door from '../../assets/images/door.svg';
import hamburger from '../../assets/images/hamburger.svg';
import {Link} from "react-router-dom";

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
          <Link to="">{t('PROFILE')}</Link>
          <Link to="">{t('PERSONAL_DATA')}</Link>
          <Link to="">{t('TRUSTWORTHY_CONTACT')}</Link>
          <Link to="">{t('HEALTH_PLAN')}</Link>
          <Link to="">{t('BLOOD_DONATION')}</Link>
          <Link to="">{t('CHANGE_PASSWORD')}</Link>
          <Link to="">{t('DELETE_ACCOUNT')}</Link>
        </div>
        <div className={styles.exit}>
          <Link to="" className={styles.exitAnchor}>
            <img src={door} alt="Door"/>
            <span>{t('EXIT')}</span>
          </Link>
        </div>
      </div>
      <div className={isActive ? styles.hamburgerMenu : styles.none} onClick={handleClick}>
        <img src={hamburger} alt="Hamburger"/>
        <span className={styles.menu}>{t('MENU')}</span>
      </div>
    </div>
  )
}
