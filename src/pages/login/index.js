import './style.css';
import pose5 from '../../assets/images/pose_5.png';
import safeStats from '../../assets/images/safe_stats.svg';
import t from '../../i18n/translate';
import CInput from '../../components/core/c_input';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='Register'>
      <div className='register-container doctor-image--container'>
        <img className='safe-stats-logo' src={safeStats} />
        <img className='doctor-image' src={pose5} />
      </div>
      <div className='register-container'>
        <div className='register-form-div'>
          <div className='register-header'>
            <h3>{t('WELCOME')}</h3>
          </div>
          <form className='register-form'>
            <div className='register-input--div'>
                <CInput
                id='email'
                label={t('EMAIL')}
                placeholder='ex.: joão.silva@email.coim'
              />
            </div>
            <div className='register-input--div'>
              <CInput
                id='password'
                label={t('PASSWORD')}
                placeholder='••••••••••••'
              />
            </div>
            <button className='register-button'>{t('ENTER')}</button>
            <p className='account-text'>
              {t('DONT_HAVE_AN_ACCOUNT')} <Link to='/register'>{t('CLICK_HERE')}</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;