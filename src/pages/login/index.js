import bcrypt from 'bcryptjs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import pose5 from '../../assets/images/pose_5.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';
import { LoginUser } from '../../utils/api-requester/modules/user';
import styles from './styles.module.css';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function loginUser() {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(email, hashedPassword);
    try {
      const user = await new LoginUser().call({
        body: {
          email: email,
          password: hashedPassword,
        },
      });
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

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
                onInput={setEmail}
              />
            </div>
            <div className='auth-input--div'>
              <CInput
                id='password'
                label={t('PASSWORD')}
                placeholder='••••••••••••'
                type='password'
                onInput={setPassword}
              />
            </div>
            <button className='auth-button' onClick={loginUser} type='button'>
              {t('ENTER')}
            </button>
            <div className={styles.info}>
              <p className='account-text'>{t('FORGOT_YOUR_PASSWORD')}</p>
              <p className='account-text'>
                {t('DONT_HAVE_AN_ACCOUNT')}{' '}
                <Link to='/register'>{t('CLICK_HERE')}</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
