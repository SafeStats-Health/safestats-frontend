import {useState, useEffect} from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import door from '../../assets/images/door.svg';
import hamburger from '../../assets/images/hamburger.svg';
import whiteHamburger from '../../assets/images/white_hamburger.svg';
import close from '../../assets/images/close.svg'
import {Link} from 'react-router-dom';
import CInput from '../core/c_input';



function DrawerMenu(props) {

  const [highlightedOption, highlightOption] = useState(props.option ?? 'GENERAL');
  const [filteredOptions, setFilteredOptions] = useState(props.options)

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
  
  function filterHospitals(text) {
    const filter = text.toUpperCase()
    const filteredOptions = []
    props.options.forEach(option => {
      if (option.name.toUpperCase().indexOf(filter) > -1) {
        filteredOptions.push(option)
      }
    })
    setFilteredOptions(filteredOptions)
  }

  return (
    <div className={styles['drawer']} style={{width: props.width}}>
      <Link to="/" id='logoutLink' />
      <div className={styles['top-section']}>
        <img src={close} alt='Close' className={`${styles.icon} ${styles.clickable}`} onClick={closeDrawer}/>
      </div>
      {
        props.searchBar &&  (
          <CInput
            inverse
            id='district'
            placeholder='ex.: hospital pequeno príncipe'
            invertMargin
            onInput={filterHospitals}
          />
        )
      }
      <div className={styles['middle-section']}>
        {
          filteredOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => {selectOption(index)}}
              className={`${styles['option-link']} ${styles.clickable} ${highlightedOption === index ? styles.selected : ''}`}
            >
              {option.name}
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

  function DefaultButton() {
    return (
      <div onClick={openDrawer} className={`${styles['button']} ${styles['default-button']} ${styles.clickable}`}>
        <img src={hamburger} alt="Hamburger" className={styles.hamburger}/>
        <span className={styles.menu}>{t('MENU')}</span>
      </div>
    );
  }

  function AltButton() {
    return (
      <div className={`${styles['button']} ${styles['alt-button']}`}>
        <div onClick={openDrawer} className={styles.clickable}>
          <img src={whiteHamburger} alt="Hamburger" className={styles.hamburger}/>
        </div>
      </div>
    );
  }

  function Button(props) {
    if (props.altButton) {
      return <AltButton />
    }
    return <DefaultButton />
  }

  return (
    <div>
      <Button altButton={props.altButton} />
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

  useEffect(() => {
    if (props.setDrawerOpen) {
      props.setDrawerOpen(drawerOpen)
    }
  }, [drawerOpen])

  if (drawerOpen) {
    return (
      <DrawerMenu
        setDrawerOpen={setDrawerOpen}
        selectOption={selectOption}
        option={option}
        options={props.options}
        searchBar={props.searchBar}
        width={props.width}
      />
    );
  } else {
    return (
      <DrawerButton
        setDrawerOpen={setDrawerOpen}
        altButton={props.altButton}
      />
    );
  }
}
