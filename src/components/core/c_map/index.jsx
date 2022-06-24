import React, { useState, useEffect, useImperativeHandle } from 'react';
import styles from './styles.module.css';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import HospitalModal from '../../hospital_modal';
import HospitalIcon from '../../../assets/icons/hospital.svg'
import MarkerIcon from '../../../assets/icons/marker.svg'
import { useMediaQuery } from 'react-responsive';
import { forwardRef } from 'react';
import 'leaflet/dist/leaflet.css';

const hospitalIcon = new Icon({
  iconUrl: HospitalIcon,
  iconSize: [35, 35],
})

const markerIcon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [45, 45],
})

const CMap = forwardRef((props, ref) => {
  
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [selectedHospital, selectHospital] = useState(null)
  const [center, setCenter] = useState({lat: -25.428360, lng: -49.273251})
  let foundUserLocation = false;
  let userPos = null;

  function handleHospitalClick(hospital) {
    selectHospital(hospital)
    setCenter(hospital.location)
  }

  function closePopup() {
    document.getElementsByClassName('leaflet-popup-close-button')[0].click()
  }

  useImperativeHandle(ref, () => ({
    goToUserPos() {
      if (userPos) {
        setCenter(userPos)
      }
    }
  }))

  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        if (!foundUserLocation) {
          props.userPos(e.latlng.lat, e.latlng.lng)
          foundUserLocation = true
        }
        setPosition(e.latlng);
        map.flyTo(center, map.getZoom());
      });
    }, [map]);

    if (position) {
      userPos = position
    }

    return position === null ? null : (
      <Marker
        position={position}
        icon={markerIcon} 
        eventHandlers={{
          click: () => {
            setCenter(userPos)
          },
        }}
      />
    );
  }

  useEffect(() => {
    if (props.selectHospital) {
      handleHospitalClick(props.selectHospital)
    }
  }, [props.selectHospital])

  return (
    <div className={`${styles.map} ${!props.isDrawerOpen ? 'control-zoom-margin-top' : ''}`}>
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
          maxZoom={20}
          subdomains={['mt0','mt1','mt2','mt3']}
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {props.hospitals.map((hospital, i) => (
          <Marker
            key={i}
            position={hospital.location}
            icon={hospitalIcon}
            eventHandlers={{
              click: () => {
                handleHospitalClick(hospital)
              },
            }}
          >
            <Popup>
              <HospitalModal
                show={!!selectedHospital}
                close={closePopup}
                hospital={selectedHospital}
              />
            </Popup>
          </Marker>
        ))}
        <LocationMarker/>
      </MapContainer>
    </div>
  );
})

export default CMap;
