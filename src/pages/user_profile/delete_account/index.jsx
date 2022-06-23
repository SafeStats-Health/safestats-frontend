import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState, useEffect} from 'react';

function DeleteAccount() {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordWarning, setPasswordWarning] = useState();

function submit(){

}


useEffect(() => {
  checkIfPasswordsMatch();
}, [password, confirmPassword]);

function checkIfPasswordsMatch() {
  if (
    password &&
    password !== '' &&
    confirmPassword &&
    confirmPassword !== ''
  ) {
    if (password !== confirmPassword) {
      setPasswordWarning(t('PASSWORDS_DONT_MATCH'));
    } else {
      setPasswordWarning(null);
    }
  } else {
    setPasswordWarning(null);
  }
}

  return (
    <div className={styles['delete-account']}>

     <h1 className={styles['delete-account-title']}>{t('DELETE_ACCOUNT_TITLE_PAGE')}</h1>

        <CInput
          id='password'
          label={t('DELETE_ACCOUNT_TITLE')}
          onInput={setPassword}
          type='password'
          shouldShowWarning={passwordWarning}
        />


        <CInput
          id='confirm-password'
          label={t('REPEAT_DELETE_ACCOUNT_TITLE')}
          onInput={setConfirmPassword}
          type='password'
          shouldShowWarning={passwordWarning}
          warningText={passwordWarning}
        />


      <div className={styles.botaoChangePassword}>
        <CButton disabled={!!passwordWarning || !password || !confirmPassword} backgroundColor='red' label={t('DELETE_ACCOUNT')} onClick={submit} type='button'/>
      </div>
    </div>
  );
}

export default DeleteAccount;
