import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState} from 'react';

function DeleteAccount() {

  const [deletarConta, setDeletarConta] = useState();
  const [deletarContaNovamente, setDeletarContaNovamente] = useState();

function submit(){

}


  return (
    <div className={styles['delete-account']}>
     

     <h1 className={styles['delete-account-title']}>{t('DELETE_ACCOUNT_TITLE_PAGE')}</h1>


        <CInput
          id='deletarConta'
          label={t('DELETE_ACCOUNT_TITLE')}
          onInput={setDeletarConta}
          type='text'
        />


        <CInput
          id='deletarContaNovamente'
          label={t('REPEAT_DELETE_ACCOUNT_TITLE')}
          onInput={setDeletarContaNovamente}
          type='text'
        />


      <div className={styles.botaoChangePassword}>
        <CButton label={t('SAVE')} onClick={submit} type='button'/>
      </div>
    </div>
  );
}

export default DeleteAccount;
