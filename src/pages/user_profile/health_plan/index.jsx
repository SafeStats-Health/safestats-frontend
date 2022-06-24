import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import CSelect from '../../../components/core/c_select';
import t from '../../../i18n/translate';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { UpdateHealthPlan } from '../../../utils/api-requester/modules/user'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function HealthPlan() {

  const [institution, setInstitution] = useState();
  const [type, setType] = useState();
  const [accomodation, setAccomodation] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function submit(){
    setIsLoading(true)
    new UpdateHealthPlan()
    .call({
      body: {
        institution,
        type,
        accomodation,
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
      }
    }).catch(() => {
      navigate('/error');
    }).finally(() => { setIsLoading(false) });
  }

  return (
    <div className={styles['health-plan']}>
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
      <h1 className={styles['health-plan-title']}>{t('HEALTH_PLAN_TITLE')}</h1>

      <CSelect
        id='health-plan'
        items={[{label: 'unimed', key: 'unimed'},
        {label: 'clinipam', key: 'clinipam'},
        {label: 'nossa saúde', key: 'nossa saúde'},
        {label: 'sul américa', key: 'sul américa'},
        {label: 'bradesco', key: 'bradesco'},
        {label: 'paraná clínicas', key: 'paraná clínicas'},
        ]}
        label={t('HEALTH_PLAN')}
        onInput={setInstitution}
      />

      <CSelect
        id='health-plan--type'
        items={[
          {label: 'básico', key: 'básico'},
          {label: 'flex ', key: 'flex'},
          {label: 'master ', key: 'master '}, 
        ]}
        label={t('HEALTH_PLAN_TYPE')}
        style={{marginBottom: '10px'}}
        onInput={setType}
      />

      <CSelect
        id='room'
        items={[
          {label: 'enfermaria ', key: 'enfermaria '},
          {label: 'apartamento ', key: 'apartamento '}]}
        label={t('ROOM')}
        onInput={setAccomodation}
      />

      <div className={styles.botaoPlanoDeSaude}>
        <CButton label={t('SAVE')} onClick={submit} type='button' isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default HealthPlan;
