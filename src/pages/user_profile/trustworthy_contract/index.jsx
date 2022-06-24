import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateTrustedContact } from '../../../utils/api-requester/modules/user'

function TrustworthyContract() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [birthdate, setBirthdate] = useState();
  const [address, setAddress] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function submit(){
    setIsLoading(true)
    new UpdateTrustedContact()
    .call({
      body: {
        name,
        email,
        phone,
        birthdate,
        address,
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
    <div>
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
      <h1 className={styles['trustworthy-contract']}>{t('TRUSTWORTHY_CONTACT_TITLE')}</h1>

      <CInput
        id='nome'
        label={t('NAME')}
        onInput={setName}
        type='text'
      />


      <CInput
        id='email'
        label={t('EMAIL')}
        onInput={setEmail}
        type='email'
      />


      <CInput
        id='telefone'
        label={t('PHONE')}
        onInput={setPhone}
      />


      <CInput
        id='endereco'
        label={t('ADRESS')}
        onInput={setAddress}
        type='text'
      />


      <CInput
        id='dataDeNascimento'
        label={t('BDAY')}
        onInput={setBirthdate}
        type='date'
      />

      <div className={styles.botaoContatoDeConfianca}>
        <CButton label={t('SAVE')} onClick={submit} type='button' isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default TrustworthyContract;
