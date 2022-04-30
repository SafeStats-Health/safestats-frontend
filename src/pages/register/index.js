import './style.css';
import pose6 from '../../assets/images/pose_6.png';
import safeStats from '../../assets/images/safe_stats.svg';
import t from '../../i18n/translate';
import { Link } from 'react-router-dom';
import CInput from '../../components/core/c_input'

function createUser() {}

function Register() {
  return (
    <div className='Register'>
      <div className='register-container doctor-image--container'>
        <img className='safe-stats-logo' src={safeStats} />
        <img className='doctor-image' src={pose6} />
      </div>
      <div className='register-container'>
        <div className='register-form-div'>
          <div className='register-header'>
            <h3>
              {t('DONT_HAVE_AN_ACCOUNT')}
              <br />
              {t('REGISTER_RIGHT_NOW')}
            </h3>
          </div>
          <form className='register-form'>
            <div className='register-input--div'>
              <CInput
                id='name'
                label={t('NAME')}
                placeholder='ex.: joão silva'
              />
            </div>
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
            <button className='register-button' onClick={createUser}>
              {t('REGISTER')}
            </button>
            <p className='account-text'>
              {t('ALREADY_HAVE_AN_ACCOUNT')} <Link to='/login'>{t('CLICK_HERE')}</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
