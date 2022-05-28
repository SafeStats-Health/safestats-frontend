import Button from '@mui/material/Button';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import doctor from '../../assets/images/email_confirm_doctor.png';
import safeStats from '../../assets/images/safe_stats.svg';

export default function EmailConfirm() {
  return (
    <div className={styles.itemsPos}>
      <img src={safeStats} alt="Safe Stats" className={styles.safeStats}/>
      <div className={styles.textPos}>
        <span className={styles.hello}>{t('HELLO')}</span>
        <span className={styles.email}>{t('EMAIL_MESSAGE')}</span>
        <Button variant="contained" className={styles.button}>{t('BACK_TO_LOGIN')}</Button>
      </div>
      <div className={styles.doctorPos}>
        <img src={doctor} alt="Doctor" className={styles.doctor}/>
      </div>
    </div>
  );
}
