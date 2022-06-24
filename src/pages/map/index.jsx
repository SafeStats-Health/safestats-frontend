import React, {  useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import t from '../../i18n/translate';
import CMap from '../../components/core/c_map';
import CInput from '../../components/core/c_input';
import CButton from '../../components/core/c_button';
import logo from '../../assets/images/safe_stats_alt.svg';
import leaveIcon from '../../assets/icons/leave.svg';
import userIcon from '../../assets/icons/user.svg';
import graphIcon from '../../assets/icons/graph.svg';
import markerIcon from '../../assets/icons/marker2.svg';
import { Link } from 'react-router-dom';
import Drawer from '../../components/drawer'
// import hospitals from '../../pages/map/hospitals'
import { FetchNearbyHospitals } from '../../utils/api-requester/modules/nearby-hospitals';

function goToProfile() {
  sessionStorage.setItem('statistics', false)
  document.getElementById('profileLink').click()
}

function goToLandingPage() {
  document.getElementById('landingPageLink').click()
}

function goToStatistics() {
  sessionStorage.setItem('statistics', true)
  document.getElementById('profileLink').click()
}

function Map(props) {

  const [selectedHospital, selectHospital] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(null);
  const [center, setCenter] = useState(false);
  const cMapRef = useRef();
  const [nearbyHospitals, setNearbyHospitals] = useState([]);

  useEffect(() => {
    if (selectedHospital) {
      setCenter(selectedHospital.location)
    }
  }, [selectedHospital])

  async function fetchNearbyHospitals(lat, lng) {
    if (!nearbyHospitals.length) {
      try {
        const hospitals = await new FetchNearbyHospitals().call({
          body: {
            lat: lat.toString(),
            lng: lng.toString()
          }
        })
        setNearbyHospitals(hospitals.data.results)
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <div className={styles['map-page']}>
      <Link to="/user_profile" id="profileLink" />
      <Link to="/" id="landingPageLink" />
      <Drawer
        options={nearbyHospitals}
        selectOption={hospitalId => {
          selectHospital(nearbyHospitals.find((hospital, index) => index === hospitalId))
        }}
        altButton
        searchBar
        setDrawerOpen={setDrawerOpen}
        width={500}
      />
      <div className={styles['map-container']} >
        <CMap
          ref={cMapRef}
          hospitals={nearbyHospitals}
          selectedHospital={selectedHospital}
          selectHospital={selectedHospital}
          selectCenter={center}
          isDrawerOpen={isDrawerOpen}
          userPos={fetchNearbyHospitals}
          currentCenter={(a) => {}}
        />
        <div className={styles['options-box']}>
          <div
            className={`${styles['icon-container']} ${styles.clickable}`}
            onClick={() => {cMapRef.current.goToUserPos()}} 
          >
            <img className={styles['marker-icon']} src={markerIcon} />
          </div>
          <div
            className={`${styles['icon-container']} ${styles.clickable}`}
            onClick={goToStatistics}
          >
            <img className={styles['map-icon']} src={graphIcon} />
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
      </div>
    </div>
  );
}

export default Map;
