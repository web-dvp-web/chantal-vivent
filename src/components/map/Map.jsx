import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import './map.css';

const Map = () =>  {

  return (
    <div className="map-container">
      <GoogleMap

      >
        <Marker position={center} icon={{ url: '/marker.png' }} className="marker" />
      </GoogleMap>
    </div>
  );
}

export default Map