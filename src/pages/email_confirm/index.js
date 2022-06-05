import { Link } from 'react-router-dom';
import doctor from '../../assets/images/email_confirm_doctor.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CButton from '../../components/core/c_button';
import t from '../../i18n/translate';
import styles from './styles.module.css';

export default function EmailConfirm() {
  function goToLogin() {
    document.getElementById('loginLink').click();
  }

  return (
    <div className={styles['email-confirm']}>
      <Link to='/login' id='loginLink' />
      <img src={safeStats} alt='Safe Stats' className={styles.logo} />
      <div className={styles.text}>
        <div className={styles['text-container']}>
          <span className={styles.title}>{t('HELLO')}</span>
          <span className={styles.subtitle}>{t('EMAIL_MESSAGE')}</span>
          <CButton
            label={t('BACK_TO_LOGIN')}
            buttonContainer={styles['button-container']}
            onClick={goToLogin}
          />
        </div>
      </div>
      <div>
        <img src={doctor} alt='Doctor' className={styles.doctor} />
      </div>
    </div>
  );
}
