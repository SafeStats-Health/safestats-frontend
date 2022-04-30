import styles from './styles.module.css';
import pose6 from '../../assets/images/pose_6.png';
import safeStats from '../../assets/images/safe_stats.svg';
import t from '../../i18n/translate';
import { Link } from 'react-router-dom';
import CInput from '../../components/core/c_input'

function createUser() {}

function auth() {
  return (
    <div className='Auth'>
      <div className='auth-container doctor-image--container'>
        <img className='safe-stats-logo' src={safeStats} />
        <img className='doctor-image' src={pose6} />
      </div>
      <div className='auth-container'>
        <div className='auth-form-div'>
          <div className='auth-header'>
            <h3>
              {t('DONT_HAVE_AN_ACCOUNT')}
              <br />
              {t('REGISTER_RIGHT_NOW')}
            </h3>
          </div>
          <form className='auth-form'>
            <div className='auth-input--div'>
              <CInput
                id='name'
                label={t('NAME')}
                placeholder='ex.: joão silva'
              />
            </div>
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
            <button className='auth-button' onClick={createUser}>
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

export default auth;
