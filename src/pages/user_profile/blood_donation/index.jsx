import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState} from 'react';

function BloodDonation() {

  const [jaDoouSangue, setDoacaoDeSangue] = useState();
    const [tipoSanguineo, setTipoDeSangue] = useState();
    const [localDaDoacao, setLocalDaDoacao] = useState();
  
  function submit(){
  
  }

  return (
    <div className={styles['blood-donation']}>
     

     <h1 className={styles['blood-donation-title']}>{t('BLOOD_DONATION_TITLE')}</h1>


<CInput
          id='jaDoouSangue'
          label={t('BLOOD_DONATION')}
          onInput={setDoacaoDeSangue}
          type='text'
        />


<CInput
          id='tipoSanguineo'
          label={t('BLOOD_TYPE')}
          onInput={setTipoDeSangue}
          type='text'
        />


<CInput
          id='localDaDoacao'
          label={t('DONATION_LOCATION')}
          onInput={setLocalDaDoacao}
          type='text'
        />


<div className={styles.botaoDoacaoDeSangue}>
        <CButton label={t('SAVE')} onClick={submit} type='button'/>
      </div>


    </div>
  );
}

export default BloodDonation;
