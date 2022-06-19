import React, { useState, useEffect, useMemo, useRef } from 'react';
import styles from './styles.module.css';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import HospitalModal from '../../hospital_modal';
import HospitalIcon from '../../../assets/icons/hospital.svg'
import MarkerIcon from '../../../assets/icons/marker.svg'
import { useMediaQuery } from 'react-responsive';

const hospitalIcon = new Icon({
  iconUrl: HospitalIcon,
  iconSize: [35, 35],
})

const markerIcon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [50, 50],
})

function CMap(props) {

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [selectedHospital, selectHospital] = useState(null)
  const [center, setCenter] = useState({lat: -25.428360, lng: -49.273251})
  const userPos = null;
  // useEffect(console.log(props.selectedHospital), props.selectedHospital)

  function handleHospitalClick(hospital) {
    selectHospital(hospital)
    setCenter(hospital.position)
  }

  function closePopup() {
    document.getElementsByClassName('leaflet-popup-close-button')[0].click()
  }

  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(center, map.getZoom());
      });
    }, [map]);

    return position === null ? null : (
      <Marker
        position={position}
        icon={markerIcon} 
      />
    );
  }

  return (
    <div className={styles.map}>
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
          maxZoom={20}
          subdomains={['mt0','mt1','mt2','mt3']}
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {props.hospitals.map(hospital => (
          <Marker
            key={hospital.key}
            position={hospital.position}
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
                title={selectedHospital?.key}
                fullscreen={true}
              />
            </Popup>
          </Marker>
        ))}
        <LocationMarker/>
      </MapContainer>
    </div>
  );
}

export default CMap;
