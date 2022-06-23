import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState} from 'react';

function HealthPlan() {

    const [planoDeSaude, setPlano] = useState();
    const [tipo, setTipoDePlano] = useState();
    const [hospegem, setHospedagem] = useState();
  
  function submit(){
  
  }

  return (
    <div className={styles['health-plan']}>
      
      <h1 className={styles['health-plan-title']}>{t('HEALTH_PLAN_TITLE')}</h1>


      <CInput
                id='planoDeSaude'
                label={t('HEALTH_PLAN')}
                onInput={setPlano}
                type='text'
              />


      <CInput
                id='tipo'
                label={t('HEALTH_PLAN_TYPE')}
                onInput={setTipoDePlano}
                type='text'
              />


<CInput
                id='hospedagem'
                label={t('ROOM')}
                onInput={setHospedagem}
                type='text'
              />


<div className={styles.botaoPlanoDeSaude}>
              <CButton label={t('SAVE')} onClick={submit} type='button'/>
            </div>
    </div>
  );
}

export default HealthPlan;
