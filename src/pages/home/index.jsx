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
import graphIcon from '../../assets/icons/graph.svg';
import markerIcon from '../../assets/icons/marker2.svg';
import { Link } from 'react-router-dom';
import Drawer from '../../components/drawer'
import Statistics from '../../components/statistics'
// import hospitals from '../../pages/map/hospitals'
import { FetchNearbyHospitals } from '../../utils/api-requester/modules/nearby-hospitals';

function goToProfile() {
  document.getElementById('profileLink').click()
}

function goToLandingPage() {
  document.getElementById('landingPageLink').click()
}

function Home(props) {

  const [selectedHospital, selectHospital] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(null);
  const [center, setCenter] = useState(false);
  const cMapRef = useRef();
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [isMap, setIsMap] = useState(true)
  const [startingPoint, setStartingPoint] = useState(null)


  async function fetchNearbyHospitals(lat, lng) {
    if (!nearbyHospitals.length) {
      try {
        const hospitals = await new FetchNearbyHospitals().call({
          body: {
            lat: lat.toString(),
            lng: lng.toString()
          }
        })
        console.log(hospitals.data.results)
        setNearbyHospitals(hospitals.data.results)
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    if (selectedHospital) {
      console.log('isMap', isMap);
      if (isMap) {
        setCenter(selectedHospital.location)
      } else {
        console.log('aaaaaaaaaaaaaa');
      }
    }
  }, [selectedHospital])

  function HomeContent(props) {

    if (props.isMap) {
      return (
        <div className={styles['home-container']} >
          <CMap
            ref={cMapRef}
            hospitals={nearbyHospitals}
            selectedHospital={selectedHospital}
            selectHospital={selectedHospital}
            selectCenter={props.center}
            isDrawerOpen={isDrawerOpen}
            userPos={fetchNearbyHospitals}
            startingPoint={startingPoint}
            currentCenter={(coord) => {console.log('coords new', coord)}}
          />
        </div>
      )
    } else {
      return (
        <div>
          <Statistics nearbyHospitals={props.nearbyHospitals} />
        </div>
      )
    }
  }
  
  function switchIsMap() {
    console.log('oi2')
    setIsMap(!isMap)
    console.log(isMap)
  }


  return (
    <div className={styles['home-page']}>
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
      <HomeContent
        isMap={isMap}
        nearbyHospitals={nearbyHospitals}
        setRenderMap={setIsMap}
        setCenter={center}
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
          onClick={() => {switchIsMap()}}
        >
          <img className={isMap ? styles['graph-icon'] : styles['map-icon']} src={isMap ? graphIcon : mapIcon} />
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
  );
}

export default Home;
