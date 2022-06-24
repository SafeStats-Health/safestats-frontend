import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import CSelect from '../../../components/core/c_select';
import t from '../../../i18n/translate';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateBloodDonation } from '../../../utils/api-requester/modules/user'

function BloodDonation() {

  const [didDonate, setDidDonate] = useState();
  const [bloodType, setBloodType] = useState();
  const [donationLocation, setDonationLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function submit(){
    setIsLoading(true)
    new UpdateBloodDonation()
    .call({
      body: {
        didDonate: didDonate === "sim",
        bloodType,
        donationLocation,
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
    <div className={styles['blood-donation']}>
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
     <h1 className={styles['blood-donation-title']}>{t('BLOOD_DONATION_TITLE')}</h1>

     <CSelect
        id='blood_donator'
        items={[{label: 'sim', key: 'sim'}, {label: 'nao', key: 'nao'}]}
        label={t('IS_BLOOD_DONATOR')}
        onInput={setDidDonate}
      />

      <CSelect
        id='blood-type'
        items={[{label: 'A', key: 'A'},
        {label: 'B', key: 'B'},
        {label: 'AB', key: 'AB'},
        {label: 'O', key: 'O'}]}
        label={t('BLOOD_TYPE')}
        onInput={setBloodType}
      />

      <CInput
        id='localDaDoacao'
        label={t('DONATION_LOCATION')}
        type='text'
        onInput={setDonationLocation}
      />

      <div className={styles.botaoDoacaoDeSangue}>
        <CButton label={t('SAVE')} type='button' isLoading={isLoading} onClick={submit}/>
      </div>
    </div>
  );
}

export default BloodDonation;
