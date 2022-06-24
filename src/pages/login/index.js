import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pose5 from '../../assets/images/pose_5.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CButton from '../../components/core/c_button';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';
import styles from './styles.module.css';
import AuthService from '../../services/auth.service';
import {Context} from '../../components/wrapper'
import jwtDecode from 'jwt-decode';
import { LoginUser } from '../../utils/api-requester/modules/user';
import { LOCALES } from '../../i18n'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginWarning, setLoginWarning] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(Context)
  let navigate = useNavigate();

  function getUser() {
    setIsLoading(true);
    new LoginUser()
      .call({
        body: {
          email,
          password,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const decoded = jwtDecode(res.data.token);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('login', JSON.stringify(decoded));
          context.setLocale(getContextLanguage(decoded))
          navigate('/map');
        }
      })
      .catch((res) => {
        if (![401, 400].includes(res.response.status)) {
          navigate('/error');
        } else {
          setLoginWarning(t('EMAIL_OR_PASSWORD_IS_INVALID'));
        }
      })
      .finally(() => setIsLoading(false));
  }

  function getContextLanguage(decoded) {
    switch (decoded.user.preferredLanguage) {
      case 'PT-BR':
        return LOCALES.PORTUGUESE
      case 'EN-US':
        return LOCALES.ENGLISH
      default:
        return LOCALES.PORTUGUESE
    }
  }

  return (
    <div className='Auth'>
      <div className='auth-container doctor-image--container'>
        <img className='safe-stats-logo' src={safeStats} alt={'Logo'} />
        <img className='doctor-image' src={pose5} alt={'Doctor'} />
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
                shouldShowWarning={loginWarning}
                onInput={setEmail}
              />
            </div>
            <div className='auth-input--div' style={{ marginBottom: '10px' }}>
              <CInput
                id='password'
                label={t('PASSWORD')}
                placeholder='••••••••••••'
                type='password'
                shouldShowWarning={loginWarning}
                warningText={loginWarning}
                onInput={setPassword}
              />
            </div>
            <CButton
              label={t('ENTER')}
              onClick={getUser}
              type='button'
              isLoading={isLoading}
            />
            <div className={styles.info} style={{ marginTop: '15px' }}>
              <Link className='account-text' to='/ask_email'>
                {t('FORGOT_YOUR_PASSWORD')}
              </Link>
              <p className='account-text'>
                {t('DONT_HAVE_AN_ACCOUNT')}{' '}
                <Link className={styles.clickHere} to='/register'>
                  {t('CLICK_HERE')}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
