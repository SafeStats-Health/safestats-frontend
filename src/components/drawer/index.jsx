import {useState} from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import door from '../../assets/images/door.svg';
import hamburger from '../../assets/images/hamburger.svg';
import close from '../../assets/images/close.svg'
import {Link} from 'react-router-dom';

function DrawerMenu(props) {

  const [highlightedOption, highlightOption] = useState(props.option ?? 'GENERAL');

  function logout() {
    localStorage.clear();
    document.getElementById('logoutLink').click();
  }

  function closeDrawer() {
    props.setDrawerOpen(false);
  }

  function selectOption(pageName) {
    highlightOption(pageName)
    props.selectOption(pageName)
  }

  return (
    <div className={styles['drawer']}>
      <Link to="/" id='logoutLink'/>
      <div className={styles['top-section']} onClick={closeDrawer}>
        <img src={close} alt='Close' className={`${styles.icon} ${styles.clickable}`}/>
      </div>
      <div className={styles['middle-section']}>
        {
          props.options.map(option => (
            <div
              onClick={() => {selectOption(option.key)}}
              className={`${styles['option-link']} ${styles.clickable} ${highlightedOption === option.key ? styles.selected : ''}`}
            >
              {option.label}
            </div>
          ))
        }
      </div>
      <div className={styles['bottom-section']}>
        <div onClick={logout} className={`${styles.clickable} ${styles.logout}`}>
          <img src={door} alt="Door" className={`${styles.icon} ${styles.close}`}/>
          <span>{t('EXIT')}</span>
        </div>
      </div>
    </div>
  );
}

function DrawerButton(props) {

  function openDrawer() {
    props.setDrawerOpen(true);
  }

  return (
    <div onClick={openDrawer} className={`${styles['open-drawer-button']} ${styles.clickable}`}>
      <img src={hamburger} alt="Hamburger" className={styles.hamburger}/>
      <span className={styles.menu}>{t('MENU')}</span>
    </div>
  );
}

export default function Drawer(props) {
  const [drawerOpen, setDrawerOpen] = useState(props.defaultOpen);
  const [option, setOption] = useState(props.defaultOption);

  function selectOption(pageName) {
    setOption(pageName)
    props.selectOption(pageName);
  }

  if (drawerOpen) {
    return (
      <DrawerMenu
        setDrawerOpen={setDrawerOpen}
        selectOption={selectOption}
        option={option}
        options={props.options}
      />
    );
  } else {
    return <DrawerButton setDrawerOpen={setDrawerOpen}/>
  }
}
