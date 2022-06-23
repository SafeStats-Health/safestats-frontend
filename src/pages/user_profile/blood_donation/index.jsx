import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import CSelect from '../../../components/core/c_select';
import t from '../../../i18n/translate';
import {useState} from 'react';

function BloodDonation() {

  return (
    <div className={styles['blood-donation']}>
     
     <h1 className={styles['blood-donation-title']}>{t('BLOOD_DONATION_TITLE')}</h1>

     <CSelect
        id='blood_donator'
        items={[{text: 'sim', value: 1}, 
        {text: 'nao', value: 2}, 
        ]}
        label={t('IS_BLOOD_DONATOR')}
      />

      <CSelect
        id='blood-type'
        items={[{text: 'A', value: 1}, 
        {text: 'B', value: 2}, 
        {text: 'AB', value: 3}, 
        {text: 'O', value: 4}, 
        ]}
        label={t('BLOOD_TYPE')}
      />

      <CInput
        id='localDaDoacao'
        label={t('DONATION_LOCATION')}
        type='text'
      />

      <div className={styles.botaoDoacaoDeSangue}>
        <CButton label={t('SAVE')} type='button'/>
      </div>
    </div>
  );
}

export default BloodDonation;
