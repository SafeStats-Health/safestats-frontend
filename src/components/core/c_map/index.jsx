import React, { useState, useEffect } from 'react';
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
import hospitals from './hospitals'


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
  const [center, setCenter] = useState({lat: -25.428360, lng: -49.273251})

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
      <Marker position={position} icon={markerIcon} />
    );
  }

  // DEFAULT
  // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

  // GOOGLE_STREETS
  // url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
  // maxZoom={20}
  // subdomains={['mt0','mt1','mt2','mt3']}

  // GOOGLE_HYBRID
  // url='http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'
  // maxZoom={20}
  // subdomains={['mt0','mt1','mt2','mt3']}

  // GOOGLE_SAT
  // url='http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
  // maxZoom={20}
  // subdomains={['mt0','mt1','mt2','mt3']}

  // GOOGLE_TERRAIN
  // url='http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
  // maxZoom={20}
  // subdomains={['mt0','mt1','mt2','mt3']}
  
  return (
    <div className={styles.map}>
      <MapContainer
        className={styles['']}
        center={center}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
          maxZoom={20}
          subdomains={['mt0','mt1','mt2','mt3']}
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
        <LocationMarker/>
      </MapContainer>
    </div>
  );
}

export default CMap;
