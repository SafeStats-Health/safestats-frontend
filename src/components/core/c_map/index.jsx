import React, { useState, useRef, useMemo, useCallback } from 'react';
import styles from './styles.module.css';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import CMapPopup from './c_map_popup'
import 'leaflet/dist/leaflet.css';
import HospitalModal from '../../hospital_modal';
import HospitalIcon from '../../../assets/icons/hospital.svg'
import UserIcon from '../../../assets/icons/close.svg'
import { useMediaQuery } from 'react-responsive';

const position = [-25.428360, -49.273251];

const hospitalIcon = new Icon({
  iconUrl: HospitalIcon,
  iconSize: [35, 35],
})

const userIcon = new Icon({
  iconUrl: UserIcon,
  iconSize: [50, 50],
})

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });


  return position === null ? null : (
    <Marker
      position={position}
      zoom={8}
      icon={userIcon}
      onClick={ (a) => {console.log(a)} }
    />
  );
}

function CMap(props) {

  const hospitals = [
    {
      key: 1,
      position: {lat: -25.415679294326377, lng: -49.306983947753906}
    },
    {
      key: 2,
      position: {lat: -25.403895099133745, lng: -49.23934936523438}
    },
    {
      key: 3,
      position: {lat: -25.457224895210622, lng: -49.185104370117195}
    },
    {
      key: 4,
      position: {lat: -25.481711480835024, lng: -49.23591613769532}
    },
    {
      key: 5,
      position: {lat: -25.451954978323936, lng: -49.24243927001953}
    },
    {
      key: 6,
      position: {lat: -25.47458298927692, lng: -49.27642822265626}
    },
    {
      key: 7,
      position: {lat: -25.5114606200392, lng: -49.27608489990235}
    },
    {
      key: 8,
      position: {lat: -25.486360269367438, lng: -49.32552337646485}
    },
    {
      key: 9,
      position: {lat: -25.508671951202857, lng: -49.203300476074226}
    },
  ]

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [draggable, setDraggable] = useState(false)
  const [selectedHospital, selectHospital] = useState(null)

  function handleHospitalClick(hospital) {
    selectHospital(hospital)
  }

  return (
    <div>
      <div className={styles.map}>
      <span>{isMobile}</span>
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
          />
        ))}
        <LocationMarker />
      </MapContainer>
    </div>
      <HospitalModal
        show={!!selectedHospital}
        close={() => {selectHospital(null)}}
        title={selectedHospital?.key}
        fullscreen={true}
      />
    </div>
  );
}

export default CMap;
