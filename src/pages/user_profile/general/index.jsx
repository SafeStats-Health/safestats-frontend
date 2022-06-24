import styles from './styles.module.css';
import t from '../../../i18n/translate';
import dummyImg from '../../../assets/images/dummy_img.png';
import {useEffect, useState} from "react";

function General() {
  const [user, setUser] = useState({});
  useEffect(() => {
    return () => {
      setUser(JSON.parse(localStorage.getItem('login')).user);
    }
  }, []);

  return (
    <div className={styles.general}>
      <div className={styles['user-data']}>
        <img src={dummyImg} alt="Dummy Img" className={styles['user-data-pic']}/>
        <span className={styles['user-data-name']}>{user.name}</span>
        { user.healthPlanInstitution
          || user.healthPlanInstitution
          || user.age 
          || user.didDonateBlood
          || user.legalRepresentative
          &&
          <span className={styles['user-data-title']}>{t('SUMMARY_TITLE')}</span>
        }
        <ul className={styles['user-data-info']}> 
          {
            user.healthPlanInstitution && <li><li>{t('HEALTH_PLAN')} {user.healthPlanInstitution} {user.healthPlanType} {user.healthPlanAccomodation}</li></li>
          }
          {
            user.age && <li>{user.age} {t('YEARS')}</li>
          }
          {
            user.didDonateBlood && <li>{t('DONATES_BLOOD')} {t('TYPE')} {user.bloodType}</li>
          }
          {
            user.legalRepresentative && <li>{t('LEGAL_REPRESENTATIVE')}: {user.legalRepresentative}</li>
          }
        </ul>
      </div>
    </div>
  );
}

export default General;
