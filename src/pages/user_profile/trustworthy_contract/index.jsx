import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CInput from '../../../components/core/c_input';
import t from '../../../i18n/translate';
import {useState} from 'react';

function TrustworthyContract() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [endereco, setEndereco] = useState();
  const [dataDeNascimento, setNascimento] = useState();

function submit(){

}

  return (
    <div>
      <h1 className={styles['trustworthy-contract']}>{t('TRUSTWORTHY_CONTACT_TITLE')}</h1>

<CInput
          id='nome'
          label={t('NAME')}
          onInput={setNome}
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
          onInput={setTelefone}
        />


<CInput
          id='endereco'
          label={t('ADRESS')}
          onInput={setEndereco}
          type='text'
        />


<CInput
          id='dataDeNascimento'
          label={t('BDAY')}
          onInput={setNascimento}
          type='date'
        />

<div className={styles.botaoContatoDeConfianca}>
        <CButton label={t('SAVE')} onClick={submit} type='button'/>
      </div>
    </div>
  );
}

export default TrustworthyContract;
