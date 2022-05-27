import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pose6 from '../../assets/images/pose_6.png';
import safeStats from '../../assets/images/safe_stats.svg';
import CButton from '../../components/core/c_button';
import CInput from '../../components/core/c_input';
import t from '../../i18n/translate';

async function createUser() {}

function auth() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [allFieldsAreValid, setAllFieldsAreValid] = useState(false);
  const [
    shouldShowPasswordsDontMatchWarning,
    setShouldShowPasswordsDontMatchWarning,
  ] = useState();

  useEffect(checkIfAllFieldsAreValid, [
    name,
    email,
    password,
    confirmPassword,
    shouldShowPasswordsDontMatchWarning,
  ]);
  useEffect(checkIfPasswordsMatch, [password, confirmPassword]);

  function checkIfAllFieldsAreValid() {
    const validations = [shouldShowPasswordsDontMatchWarning];
    const fields = [name, email, password, confirmPassword];
    const allFieldsAreFilled = fields.every((field) => field && field !== '');
    const allFieldsAreValidF = validations.every((field) => !field);
    console.log(validations);
    setAllFieldsAreValid(allFieldsAreFilled && allFieldsAreValidF);
  }

  function checkIfPasswordsMatch() {
    if (
      password &&
      password !== '' &&
      confirmPassword &&
      confirmPassword !== ''
    ) {
      setShouldShowPasswordsDontMatchWarning(password !== confirmPassword);
    } else {
      setShouldShowPasswordsDontMatchWarning(false);
    }
  }

  async function createUser() {
    await new CreateUser().call({
      body: {
        name,
        email,
        password,
        confirmPassword,
      },
    });
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
                onInput={setEmail}
              />
            </div>
            <div className='auth-input--div'>
              <CInput
                id='password'
                label={t('PASSWORD')}
                placeholder='••••••••••••'
                shouldShowWarning={shouldShowPasswordsDontMatchWarning}
                onInput={setPassword}
              />
            </div>
            <div className='auth-input--div'>
              <CInput
                id='confirm-password'
                label={t('CONFIRM_PASSWORD')}
                placeholder='••••••••••••'
                shouldShowWarning={shouldShowPasswordsDontMatchWarning}
                warningText={t('PASSWORDS_DONT_MATCH')}
                onInput={setConfirmPassword}
              />
            </div>
            <button
              className={`
              auth-button
              ${!allFieldsAreValid ? 'disabled-button' : 'auth-button'}
            `}
              onClick={createUser}
              type='button'
            >
              {t('REGISTER')}
            </button>
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
