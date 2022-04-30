import styles from './styles.module.css';
import pose5 from '../../assets/images/pose_5.png';
import safeStats from '../../assets/images/safe_stats.svg';
import t from '../../i18n/translate';
import CInput from '../../components/core/c_input';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='Auth'>
      <div className='auth-container doctor-image--container'>
        <img className='safe-stats-logo' src={safeStats} />
        <img className='doctor-image' src={pose5} />
      </div>
      <div className='auth-container'>
        <div className='auth-form-div'>
          <div className='auth-header'>
            <h3>{t('WELCOME')}</h3>
          </div>
          <form className='auth-form'>
            <div className='auth-input--div'>
              <CInput
                id='email'
                label={t('EMAIL')}
                placeholder='ex.: joão.silva@email.coim'
              />
            </div>
            <div className='auth-input--div'>
              <CInput
                id='password'
                label={t('PASSWORD')}
                placeholder='••••••••••••'
              />
            </div>
            <button className='auth-button'>{t('ENTER')}</button>
            <div className={styles.info}>
              <p className='account-text'>
                {t('FORGOT_YOUR_PASSWORD')}
              </p>
              <p className='account-text'>
                {t('DONT_HAVE_AN_ACCOUNT')} <Link to='/register'>{t('CLICK_HERE')}</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;