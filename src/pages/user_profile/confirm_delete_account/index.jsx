import { Link } from 'react-router-dom';
import doctor from '../../../assets/images/pose_9.svg';
import safeStats from '../../../assets/images/safe_stats.svg';
import CButton from '../../../components/core/c_button';
import t from '../../../i18n/translate';
import styles from './styles.module.css';

export default function ConfirmDeleteAccount() {
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
          <span className={styles.subtitle}>{t('CONFIRM_DELETE_ACCOUNT_MESSAGE')}</span>
          <span className={styles.subtitle2}>{t('CONFIRM_DELETE_ACCOUNT_MESSAGE2')}</span>

          <div>
            <div className={styles.buttonSpacing}>
            <CButton
              label={t('YES_DELETE_ACCOUNT')}
              backgroundColor='red'
              buttonContainer={styles['button-containerRed']}
              onClick={goToLogin}
            />
            </div>

            <div className={styles.buttonSpacing}>
              <CButton
                label={t('NO_DELETE_ACCOUNT')}
                buttonContainer={styles['button-container']}
                onClick={goToLogin}
              />
            </div>
          </div>

        </div>
      </div>
      <div>
        <img src={doctor} alt='Doctor' className={styles.doctor} />
      </div>
    </div>
  );
}
