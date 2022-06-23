import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import pose5 from '../../assets/images/pose_5.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CButton from '../../components/core/c_button';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';
import styles from './styles.module.css';
import AuthService from "../../services/auth.service";
import jwtDecode from "jwt-decode";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate()

  function getUser() {
    AuthService.loginUser(email, password).then(r => {
      if (!r) {
        return
      }
      const decoded = jwtDecode(r.data.token);
      localStorage.setItem('login', JSON.stringify(decoded));
      navigate('/user_profile');
    });
  }

  return (
    <div className='Auth'>
      <div className='auth-container doctor-image--container'>
        <img className='safe-stats-logo' src={safeStats} alt={'Logo'}/>
        <img className='doctor-image' src={pose5} alt={'Doctor'}/>
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
                placeholder='ex.: joão.silva@email.com'
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

            <div className={styles.info}>
              <p className='account-text'>
                <Link className={styles.clickHere} to='/reset_password'>{t('FORGOT_YOUR_PASSWORD')}</Link>
              </p>
              <p className='account-text'>
                {t('DONT_HAVE_AN_ACCOUNT')}{' '}
                <Link className={styles.clickHere} to='/register'>{t('CLICK_HERE')}</Link>
              </p>
            </div>

            <div className={styles.botaoEntrar}>
              <CButton label={t('ENTER')} onClick={getUser} type='button'/>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
