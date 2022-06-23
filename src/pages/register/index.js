import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pose6 from '../../assets/images/pose_6.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';
import { CreateUser } from '../../utils/api-requester/modules/user';
import CButton from '../../components/core/c_button';

function auth() {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState();
  const [allFieldsAreValid, setAllFieldsAreValid] = useState(false);
  const [emailWarning, setEmailWarning] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [emailIsValid, setEmailIsValid] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [passwordWarning, setPasswordWarning] = useState();

  useEffect(checkIfAllFieldsAreValid, [name, email, password, confirmPassword]);
  useEffect(checkIfPasswordsMatch, [password, confirmPassword]);
  useEffect(checkIfEmailIsValid, [email]);

  function checkIfAllFieldsAreValid() {
    console.log(passwordIsValid, emailIsValid);
    const validations = [passwordIsValid, emailIsValid];
    const fields = [name, email, password, confirmPassword];
    const allFieldsAreFilled = fields.every((field) => field && field !== '');
    const allFieldsAreValidF = validations.every((field) => field);
    setAllFieldsAreValid(allFieldsAreFilled && allFieldsAreValidF);
  }

  function checkIfEmailIsValid() {
    const regex = /\S+@\S+\.\S+/;
    if (email && email !== '' && !regex.test(email)) {
      setEmailIsValid(true);
      setEmailWarning(t('INVALID_EMAIL'));
    } else {
      setEmailIsValid(false);
      setEmailWarning(null);
    }
  }

  function checkIfPasswordsMatch() {
    if (
      password &&
      password !== '' &&
      confirmPassword &&
      confirmPassword !== ''
    ) {
      if (password !== confirmPassword) {
        setPasswordIsValid(false);
        setPasswordWarning(t('PASSWORDS_DONT_MATCH'));
      } else {
        setPasswordIsValid(true);
        setPasswordWarning(null);
        const minCaracters = 8;
        if (
          password.length < minCaracters ||
          confirmPassword.length < minCaracters
        ) {
          setPasswordIsValid(false);
          setPasswordWarning(t('PASSWORD_MUST_CONTAIN_AT_LEAST_8'));
        }
      }
    } else {
      setPasswordWarning(null);
    }
  }
  const navigate = useNavigate();
  async function createUser() {
    if (allFieldsAreValid) {
      setIsLoading(true);
      new CreateUser()
        .call({
          body: {
            name,
            email,
            password,
            confirmPassword,
          },
        })
        .then((res) => {
          if (res.status === 201) {
            navigate('/email_confirm');
          }
        })
        .catch((res) => {
          if (res.response.status !== 400) {
            navigate('/error');
          } else {
            if (res.response.data.code === 'ERR_INVALID_EMAIL') {
              setEmailWarning(t('INVALID_EMAIL'));
            }
            if (res.response.data.code === 'ERR_EMAIL_ALREADY_USED') {
              setEmailWarning(t('EMAIL_ALREADY_IN_USE'));
            }
          }
        })
        .finally(() => setIsLoading(false));
    }
  }
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
                onInput={setName}
              />
            </div>
            <div className='auth-input--div'>
              <CInput
                id='email'
                label={t('EMAIL')}
                placeholder='ex.: joão.silva@email.com'
                shouldShowWarning={emailWarning}
                warningText={emailWarning}
                onInput={setEmail}
              />
            </div>
            <div className='auth-input--div'>
              <CInput
                id='password'
                label={t('PASSWORD')}
                placeholder='••••••••••••'
                shouldShowWarning={passwordWarning}
                onInput={setPassword}
                type='password'
              />
            </div>
            <div className='auth-input--div'>
              <CInput
                id='confirm-password'
                label={t('CONFIRM_PASSWORD')}
                placeholder='••••••••••••'
                shouldShowWarning={passwordWarning}
                warningText={passwordWarning}
                onInput={setConfirmPassword}
                type='password'
              />
            </div>
            <CButton
              disabled={!allFieldsAreValid}
              label={t('REGISTER')}
              onClick={createUser}
              type='button'
              isLoading={isLoading}
            />
            <p className='account-text'>
              {t('ALREADY_HAVE_AN_ACCOUNT')}{' '}
              <Link to='/login'>{t('CLICK_HERE')}</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default auth;
