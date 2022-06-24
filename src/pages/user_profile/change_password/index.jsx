import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState, useEffect} from 'react';
import { UpdatePasswordAuthenticated } from '../../../utils/api-requester/modules/user'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChangePassword() {

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState();
  const [oldPasswordWarning, setOldPasswordWarning] = useState();
  const [passwordWarning, setPasswordWarning] = useState();
  const [allFieldsAreValid, setAllFieldsAreValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  function submit(){
    setIsLoading(true)
    new UpdatePasswordAuthenticated()
    .call({
      body: {
        oldPassword,
        newPassword,
        newPasswordConfirmation,
      },
    }).then((res) => {
      if (res.status === 200) {
        const notify = () => toast.success(t('DATA_UPDATED_SUCCESSFUL'), {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        notify()
        setOldPasswordWarning(null)
      }
    }).catch((res) => {
      if (res.response.status !== 400) {
        navigate('/error');
      } else {
        setOldPasswordWarning(t('INVALID_PASSWORD'))
      }

    }).finally(() => { setIsLoading(false) });
  }

  useEffect(() => {
    checkIfPasswordsMatch();
    checkIfAllFieldAreValid();
  }, [oldPassword, newPassword, newPasswordConfirmation]);

  function checkIfAllFieldAreValid() {
    const validations = [!!passwordWarning];
    const fields = [oldPassword, newPassword, newPasswordConfirmation];
    const allFieldsAreFilled = fields.every((field) => field && field !== '');
    const someFieldIsInvalid = validations.some((field) => field === false);
    setAllFieldsAreValid(allFieldsAreFilled && !someFieldIsInvalid);
  }

  function checkIfPasswordsMatch() {
    if (
      newPassword &&
      newPassword !== '' &&
      newPasswordConfirmation &&
      newPasswordConfirmation !== ''
    ) {
      if (newPassword !== newPasswordConfirmation) {
        setPasswordWarning(t('PASSWORDS_DONT_MATCH'));
      } else {
        setPasswordWarning(null);
        const minCaracters = 8;
        if (
          newPassword.length < minCaracters ||
          newPasswordConfirmation.length < minCaracters
        ) {
          setPasswordWarning(t('PASSWORD_MUST_CONTAIN_AT_LEAST_8'));
        }
      }
    } else {
      setPasswordWarning(null);
    }
  }

  return (
    <div className={styles['change-password']}>
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className={styles['change-password-title']}>{t('CHANGE_PASSWORD_TITLE')}</h1>
      <CInput
          id='current-password'
          label={t('TYPE_YOUR_CURRENT_PASSWORD')}
          onInput={setOldPassword}
          shouldShowWarning={oldPasswordWarning}
          warningText={oldPasswordWarning}
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
          onInput={setNewPasswordConfirmation}
          type='password'
          shouldShowWarning={passwordWarning}
          warningText={passwordWarning}
        />

        <CButton disabled={!allFieldsAreValid} label={t('SAVE')} isLoading={isLoading} onClick={submit} type='button'/>
    </div>
    
  );
}

export default ChangePassword;
