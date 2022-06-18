import React, { useState } from 'react';
import styles from './styles.module.css';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import CMapPopup from './c_map_popup'
import 'leaflet/dist/leaflet.css';
import HospitalModal from '../../hospital_modal';
import HospitalIcon from '../../../assets/icons/hospital.svg'
import MarkerIcon from '../../../assets/icons/marker.svg'
import { useMediaQuery } from 'react-responsive';
import hospitals from './hospitals'

const position = [-25.428360, -49.273251];

const hospitalIcon = new Icon({
  iconUrl: HospitalIcon,
  iconSize: [35, 35],
})

const markerIcon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [50, 50],
})

function CMap() {

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [selectedHospital, selectHospital] = useState(null)

  function handleHospitalClick(hospital) {
    selectHospital(hospital)
  }

  function closePopup() {
    document.getElementsByClassName('leaflet-popup-close-button')[0].click()
  }
  
  return (
    <div>
      <div className={styles.map}>
        <MapContainer
          className={styles['']}
          center={[-25.428360, -49.273251]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {hospitals.map(hospital => (
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
        </MapContainer>
      </div>
    </div>
  );
}

export default CMap;
