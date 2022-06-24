import { Link } from 'react-router-dom';
import pose2 from '../../assets/images/pose_2.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CButton from '../../components/core/c_button';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';
import styles from './styles.module.css';

function ResetPassword() {

  function resetPassword() {
    
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
                type='password'
              />
              <CInput
                id='password'
                label={t('REPEAT_YOUR_PASSWORD')}
                placeholder='••••••••••••'
                type='password'
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
