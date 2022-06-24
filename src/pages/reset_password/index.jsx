import { Link, useNavigate } from 'react-router-dom';
import pose2 from '../../assets/images/pose_2.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CButton from '../../components/core/c_button';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';
import styles from './styles.module.css';
import {RecoverPassword} from '../../utils/api-requester/modules/user'
import { useState, useEffect } from 'react';

function ResetPassword() {

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState();

  const navigate = useNavigate();
  function resetPassword() {
    setIsLoading(true)
    const params = (new URL(document.location)).searchParams;
    const token = params.get("token");
    new RecoverPassword()
        .call({
          body: {
            token,
            newPassword,
            newPasswordConfirmation,
          },
          headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
          if (res.status === 200) {
            navigate('/login');
          }
        }).catch(() => {
          navigate('/error');
        }).finally(() => { setIsLoading(false) });
  }

  useEffect(() => {
    checkIfPasswordsMatch();
  }, [newPassword, newPasswordConfirmation]);

  function checkIfPasswordsMatch() {
    if (
      newPassword &&
      newPassword !== '' &&
      newPasswordConfirmation &&
      newPasswordConfirmation !== ''
    ) {
      if (newPassword !== newPasswordConfirmation) {
        setPasswordWarning(t('PASSWORDS_DONT_MATCH'));
      } else {
        setPasswordWarning(null);
        const minCaracters = 8;
        if (
          newPassword.length < minCaracters ||
          newPasswordConfirmation.length < minCaracters
        ) {
          setPasswordWarning(t('PASSWORD_MUST_CONTAIN_AT_LEAST_8'));
        }
      }
    } else {
      setPasswordWarning(null);
    }
  }

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
                <span className={styles.title}>{t('IT_SEEMS_THAT_YOU_FORGOT_YOUR_PASSWORD')}</span>
              </div>
              <CInput
                id='password'
                label={t('NEW_PASSWORD')}
                placeholder='••••••••••••'
                onInput={setNewPasswordConfirmation}
                shouldShowWarning={passwordWarning}
                type='password'
              />
              <CInput
                id='password'
                label={t('REPEAT_YOUR_PASSWORD')}
                placeholder='••••••••••••'
                type='password'
                shouldShowWarning={passwordWarning}
                warningText={passwordWarning}
                onInput={setNewPassword}
              />
              <div className={styles.botaoAlterarSenha}>
                <CButton disabled={!!passwordWarning || !newPassword || !newPasswordConfirmation} label={t('CHANGE_PASSWORD')} type='button' onClick={resetPassword}
                isLoading={isLoading} />
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
