import { Link } from 'react-router-dom';
import pose2 from '../../assets/images/pose_2.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CButton from '../../components/core/c_button';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';
import styles from './styles.module.css';
import { SendRecoverPasswordEmail } from '../../utils/api-requester/modules/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AskEmail() {
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [emailWarning, setEmailWarning] = useState();

  function sendEmail() {
    setIsLoading(true);
    new SendRecoverPasswordEmail()
    .call({
      body: {
        email,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        navigate('/email_confirm');
      }
    })
    .catch((res) => {
      if (res.response.status !== 404) {
        navigate('/error');
      } else {
        setEmailWarning(t('EMAIL_NOT_FOUND'));
      }
    })
    .finally(() => setIsLoading(false));
  }
  const navigate = useNavigate();
  return (
    <div className='Auth'>
      <Link to='/login' id='login-link' />
      <div className='auth-container doctor-image--container'>
        <img className='safe-stats-logo' src={safeStats} />
        <img className='doctor-image' src={pose2} />
      </div>
      <div className='auth-container'>
        <div className='auth-form-div'>
          <form className={styles['form-content']}>
            <div className={styles['form-centralizer']}>
              <div className={styles["title-container"]}>
                <span className={styles.title}>{t('TYPE_YOUR_EMAIL')}</span>
              </div>
              <CInput
                id='password'
                label={t('EMAIL')}
                type='email'
                onInput={setEmail}
                shouldShowWarning={emailWarning}
                warningText={emailWarning}
              />
              <div className={styles.botaoAlterarSenha}>
                <CButton label={t('SEND_EMAIL')} type='button' onClick={sendEmail} isLoading={isLoading} />
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AskEmail;
