import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateUserPersonalData, GetUserPersonalData } from '../../../utils/api-requester/modules/user'

function PersonalData() {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [birthdate, setBirthdate] = useState();
  const [allFieldsAreValid, setAllFieldsAreValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkIfAllFieldsAreValid();
  }, [name, phone, address, birthdate]);


  function checkIfAllFieldsAreValid( ) {
    const fields = [name, phone, address, birthdate];
    const allFieldsAreFilled = fields.every((field) => field && field !== '');
    setAllFieldsAreValid(allFieldsAreFilled);
  }

  function submit(){
    setIsLoading(true)
    new UpdateUserPersonalData()
    .call({
      body: {
        name,
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
  
    <div className={styles['personal-data']}>
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
<h1 className={styles['personal-data-title']}>{t('PERSONAL_DATA_TITLE')}</h1>

      <CInput
                id='nome'
                label={t('NAME')}
                onInput={setName}
                type='text'
                value={name}
              />

<CInput
                id='telefone'
                label={t('PHONE')}
                onInput={setPhone}
                value={phone}
              />


<CInput
                id='endereco'
                label={t('ADRESS')}
                onInput={setAddress}
                value={address}
                type='text'
              />


<CInput
                id='dataDeNascimento'
                label={t('BDAY')}
                onInput={setBirthdate}
                type='date'
                value={birthdate}
              />

            <div className={styles.botaoDadosPessoaisSalvar}>
              <CButton disabled={!allFieldsAreValid} label={t('SAVE')} onClick={submit} type='button' isLoading={isLoading}/>
            </div>
    </div>
  );
}

export default PersonalData;
