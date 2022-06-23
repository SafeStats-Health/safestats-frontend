import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState} from 'react';

function ChangePassword() {

  const [novaSenha, setNovaSenha] = useState();
  const [repitaSuaSenha, setRepitaSuaSenha] = useState();

function submit(){

}

  return (
    <div className={styles['change-password']}>

      <h1 className={styles['change-password-title']}>{t('CHANGE_PASSWORD_TITLE')}</h1>


<CInput
          id='novaSenha'
          label={t('CHANGE_PASSWORD')}
          onInput={setNovaSenha}
          type='text'
        />


<CInput
          id='repitaSuaSenha'
          label={t('REPEAT_YOUR_PASSWORD')}
          onInput={setRepitaSuaSenha}
          type='text'
        />

<div className={styles.botaoChangePassword}>
              <CButton label={t('SAVE')} onClick={submit} type='button'/>
            </div>
    </div>
    
  );
}

export default ChangePassword;
