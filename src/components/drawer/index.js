import {useState} from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import door from '../../assets/images/door.svg';


export default function Drawer() {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(current => !current);
    };
  
    return (
        <div className={isActive ? '' : styles.drawerPos} onClick={handleClick}>
            <div className={styles.x}>
            <span>{t('X')}</span>
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
                <img src={door}></img>
                <span>{t('EXIT')}</span>
            </div>
        </div>
    );
}
