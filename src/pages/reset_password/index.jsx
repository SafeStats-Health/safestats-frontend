import { Link, useNavigate } from 'react-router-dom';
import pose2 from '../../assets/images/pose_2.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CButton from '../../components/core/c_button';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';
import styles from './styles.module.css';
import {RecoverPassword} from '../../utils/api-requester/modules/user'
import { useState } from 'react';

function ResetPassword() {

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState();

  const navigate = useNavigate();
  function resetPassword() {
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
        });
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
                type='password'
              />
              <CInput
                id='password'
                label={t('REPEAT_YOUR_PASSWORD')}
                placeholder='••••••••••••'
                type='password'
                onInput={setNewPassword}
              />
              <div className={styles.botaoAlterarSenha}>
                <CButton label={t('CHANGE_PASSWORD')} type='button' onClick={resetPassword} />
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
