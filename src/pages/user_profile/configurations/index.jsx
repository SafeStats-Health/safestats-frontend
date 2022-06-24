import {useState, useContext} from 'react';
import styles from './styles.module.css';
import CButton from '../../../components/core/c_button';
import CSelect from '../../../components/core/c_select';
import t from '../../../i18n/translate';
import {Context} from '../../../components/wrapper'
import { LOCALES } from '../../../i18n';
import { useEffect } from 'react';
import { UpdatePreferrableLanguage } from '../../../utils/api-requester/modules/language'

function Configurations() {

  const languages = [
    {key: 1, label: 'Português', abbreviation: 'pt-br', locale: LOCALES.PORTUGUESE},
    {key: 2, label: 'English', abbreviation: 'en-us', locale: LOCALES.ENGLISH},
  ]

  const context = useContext(Context)
  const login = JSON.parse(localStorage.getItem('login'))
  const [language, setLanguage] = useState(getUserPreferredLanguage())

  function getUserPreferredLanguage() {
    const userPreferredLanguage = login.user.preferredLanguage.toLowerCase()
    return languages.find(lang => lang.abbreviation === userPreferredLanguage)
  }

  function submit(){
    if (+language.key === 1) {
      context.setLocale(LOCALES.PORTUGUESE)
    }
    if (+language.key === 2) {
      context.setLocale(LOCALES.ENGLISH)
    }

    const preferredLanguageString = language.abbreviation.toLocaleUpperCase()
    new UpdatePreferrableLanguage().call({
      body: {
        language: preferredLanguageString
      }
    })

    login.user.preferredLanguage = preferredLanguageString
    localStorage.setItem("login", JSON.stringify(login))
  }

  return (
    <div className={styles['configurations-container']}>
      <h1 className={styles.configurations}>{t('CONFIGURATIONS')}</h1>

      <CSelect
        id='health-plan'
        items={languages}
        label={t('LANGUAGE')}
        selected={language.key}
        onInput={(key) => {setLanguage(languages.find(lang => lang.key === +key))}}
      />

      <div className={styles.save}>
        <CButton label={t('SAVE')} onClick={submit} type='button'/>
      </div>
    </div>
  );
}

export default Configurations;
