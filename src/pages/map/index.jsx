import React, {  useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import CMap from '../../components/core/c_map';
import CInput from '../../components/core/c_input';
import CButton from '../../components/core/c_button';
import logo from '../../assets/images/safe_stats_alt.svg';
import leaveIcon from '../../assets/icons/leave.svg';
import userIcon from '../../assets/icons/user.svg';
import mapIcon from '../../assets/icons/map.svg';
import markerIcon from '../../assets/icons/marker2.svg';
import { Link } from 'react-router-dom';
import Drawer from '../../components/drawer'
import hospitals from '../../pages/map/hospitals'

function goToProfile() {
  document.getElementById('profileLink').click()
}

function goToLandingPage() {
  document.getElementById('landingPageLink').click()
}

function Map(props) {

  const [selectedHospital, selectHospital] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(null);
  const [center, setCenter] = useState(false);
  const cMapRef = useRef();

  useEffect(() => {
    if (selectHospital) {
      setCenter(selectHospital.position)
    }
  }, [selectHospital])

  return (
    <div className={styles['map-page']}>
      <Link to="/user_profile" id="profileLink" />
      <Link to="/" id="landingPageLink" />
      <Drawer
        options={hospitals}
        selectOption={hospitalId => {
          selectHospital(hospitals.find(hospital => hospital.key === hospitalId))
        }}
        altButton
        searchBar
        setDrawerOpen={setDrawerOpen}
        width={500}
      />
      <div className={styles['map-container']} >
        <CMap
          ref={cMapRef}
          hospitals={hospitals}
          selectedHospital={selectedHospital}
          selectHospital={selectedHospital}
          selectCenter={center}
          isDrawerOpen={isDrawerOpen}
        />
        <div className={styles['options-box']}>
          <div
            className={`${styles['icon-container']} ${styles.clickable}`}
          >
            <img className={styles['marker-icon']} src={markerIcon} onClick={() => {cMapRef.current.goToUserPos()}} />
          </div>
          <div
            className={`${styles['icon-container']} ${styles.clickable}`}
          >
            <img className={styles['map-icon']} src={mapIcon} />
          </div>
          <div
            className={`${styles['icon-container']} ${styles.clickable}`}
            onClick={goToProfile}
          >
            <img className={styles['user-icon']} src={userIcon} />
          </div>
          <div
            className={`${styles['icon-container']} ${styles.clickable}`}
            onClick={goToLandingPage}
          >
            <img className={styles['leave-icon']} src={leaveIcon} />
          </div>
        </div>
        {/* <div className={styles['search-box']}>
          <div className={styles['logo-box']}>
            <img className={styles.logo} src={logo} />
          </div>
          <div className={styles['search-box-form']}>
            <CInput
              inverse
              id='hospital'
              label={t('HOSPITAL')}
              placeholder='ex.: hospital pequeno príncipe'
            />
            <CInput
              inverse
              id='district'
              label={t('DISTRICT')}
              placeholder='ex.: água verde'
            />
            <div className={styles['search-button']}>
              <CButton inverse label={t('GO')} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Map;
