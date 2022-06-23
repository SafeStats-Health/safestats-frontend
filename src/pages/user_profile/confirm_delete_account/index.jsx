import { Link, useNavigate } from 'react-router-dom';
import doctor from '../../../assets/images/pose_9.svg';
import safeStats from '../../../assets/images/safe_stats.svg';
import CButton from '../../../components/core/c_button';
import t from '../../../i18n/translate';
import styles from './styles.module.css';
import { useState } from 'react';
import { DeleteUser } from '../../../utils/api-requester/modules/user';

export default function ConfirmDeleteAccount() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  function goBack() {
    navigate('/user_profile')
  }

  function deleteAccount() {
    const password = JSON.parse(sessionStorage.getItem('password'));
    const passwordConfirmation = JSON.parse(sessionStorage.getItem('confirmPassword'));
    setIsLoading(true);
      new DeleteUser()
        .call({
          body: {
            password,
            passwordConfirmation,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.clear();
            navigate('/login');
          }
        })
        .catch((res) => {
          console.log('a', res)
          if (res.response.status !== 400) {
            navigate('/error');
          } else {
            navigate('/user_profile')
          }
        })
        .finally(() => setIsLoading(false));
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
              onClick={deleteAccount}
              isLoading={isLoading}
            />
            </div>

            <div className={styles.buttonSpacing}>
              <CButton
                label={t('NO_DELETE_ACCOUNT')}
                buttonContainer={styles['button-container']}
                onClick={goBack}
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
