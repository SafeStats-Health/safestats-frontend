import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState, useEffect} from 'react';

function ChangePassword() {

  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPasswordConfirm, setnewPasswordConfirm] = useState();
  const [passwordWarning, setPasswordWarning] = useState();
  const [allFieldsAreValid, setAllFieldsAreValid] = useState(true);

  useEffect(() => {
    checkIfPasswordsMatch();
    checkIfAllFieldAreValid();
  }, [currentPassword, newPassword, newPasswordConfirm]);

  function checkIfAllFieldAreValid() {
    const validations = [!!passwordWarning];
    const fields = [currentPassword, newPassword, newPasswordConfirm];
    const allFieldsAreFilled = fields.every((field) => field && field !== '');
    const someFieldIsInvalid = validations.some((field) => field === false);
    setAllFieldsAreValid(allFieldsAreFilled && !someFieldIsInvalid);
  }

  function checkIfPasswordsMatch() {
    if (
      newPassword &&
      newPassword !== '' &&
      newPasswordConfirm &&
      newPasswordConfirm !== ''
    ) {
      if (newPassword !== newPasswordConfirm) {
        setPasswordWarning(t('PASSWORDS_DONT_MATCH'));
      } else {
        setPasswordWarning(null);
        const minCaracters = 8;
        if (
          newPassword.length < minCaracters ||
          newPasswordConfirm.length < minCaracters
        ) {
          setPasswordWarning(t('PASSWORD_MUST_CONTAIN_AT_LEAST_8'));
        }
      }
    } else {
      setPasswordWarning(null);
    }
  }

function submit(){

}

  return (
    <div className={styles['change-password']}>

      <h1 className={styles['change-password-title']}>{t('CHANGE_PASSWORD_TITLE')}</h1>
      <CInput
          id='current-password'
          label={t('TYPE_YOUR_CURRENT_PASSWORD')}
          onInput={setCurrentPassword}
          type='password'
        />

<CInput
          id='new-password'
          label={t('NEW_PASSWORD')}
          onInput={setNewPassword}
          type='password'
          shouldShowWarning={passwordWarning}
        />


<CInput
          id='novaSenha'
          label={t('CONFIRM_PASSWORD')}
          onInput={setnewPasswordConfirm}
          type='password'
          shouldShowWarning={passwordWarning}
          warningText={passwordWarning}
        />




<div className={styles.botaoChangePassword}>
              <CButton disabled={!allFieldsAreValid} label={t('SAVE')} onClick={submit} type='button'/>
            </div>
    </div>
    
  );
}

export default ChangePassword;
