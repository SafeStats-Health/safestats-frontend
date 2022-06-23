import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import CSelect from '../../../components/core/c_select';
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

      <CSelect
        id='health-plan'
        items={[{text: 'unimed', value: 1}, 
        {text: 'clinipam', value: 2}, 
        {text: 'nossa saúde', value: 3}, 
        {text: 'sul américa', value: 4}, 
        {text: 'bradesco', value: 5},
        {text: 'paraná clínicas', value: 6},
        ]}
        label={t('HEALTH_PLAN')}
      />

      <CSelect
        id='health-plan--type'
        items={[{text: 'básico', value: 1}, 
        {text: 'flex', value: 2}, 
        {text: 'master', value: 3},
        ]}
        label={t('HEALTH_PLAN_TYPE')}
        style={{marginBottom: '10px'}}
      />

      <CSelect
        id='room'
        items={[{text: 'enfermaria', value: 1}, 
        {text: 'apartamento', value: 2}, 
        ]}
        label={t('ROOM')}
      />

      <div className={styles.botaoPlanoDeSaude}>
        <CButton label={t('SAVE')} onClick={submit} type='button'/>
      </div>
    </div>
  );
}

export default HealthPlan;
