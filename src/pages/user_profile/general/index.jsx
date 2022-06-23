import styles from './styles.module.css';
import t from '../../../i18n/translate';
import dummyImg from '../../../assets/images/dummy_img.png';
import {useEffect, useState} from "react";

function General() {
  const [user, setUser] = useState({});
  useEffect(() => {
    return () => {
      setUser(JSON.parse(localStorage.getItem('login')).user);
    }
  }, []);

  return (
    <div className={styles.general}>
      <div className={styles['user-data']}>
        <img src={dummyImg} alt="Dummy Img" className={styles['user-data-pic']}/>
        <span className={styles['user-data-name']}>{user.name}</span>
        <span className={styles['user-data-title']}>{t('SUMMARY_TITLE')}</span>
        <span className={styles['user-data-info']}>plano de saude unimed básico enfermaria - 22 anos, natural de curitiba - gênero feminino - doa sangue, tipo A+ - responsável legal marcos lemos</span>
      </div>
    </div>
  );
}

export default General;
