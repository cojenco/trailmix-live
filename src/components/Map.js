import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({lat, lng}) => {
  
  const mapStyles = {        
    height: "50vh",
    width: "100%",
  };
  
  const defaultCenter = {
    lat: parseFloat(lat), 
    lng: parseFloat(lng),
  };
  
  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
     </LoadScript>
  )
}

export default Map;