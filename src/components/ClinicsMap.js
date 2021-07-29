import React from 'react';
import mapStyles from '../constants/MapStyles';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
   height: '60vh',
   width: '60vw',
   margin: 'auto',
};

const options = {
   styles: mapStyles,
   disableDefaultUI: true,
   zoomControl: true,
};

const center = { lat: 31.2540165064844, lng: 34.7907892544368 };

const libraries = ['places'];

const ClinicsMap = ({ data }) => {
   const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
   });

   console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

   if (loadError) return 'Error while loading maps';
   if (!isLoaded) return 'Loading Maps';

   return (
      <GoogleMap
         id='map'
         mapContainerStyle={mapContainerStyle}
         zoom={13}
         center={center}
         options={options}
         defaultZoom={15}
         defaultCenter={{ lat: 31.2540165064844, lng: 34.7907892544368 }}
         defaultOptions={{ styles: mapStyles }}
      >
         {data.map((clinic) => (
            <Marker
               key={clinic.Name}
               position={{
                  lat: Number(clinic.Y),
                  lng: Number(clinic.X),
               }}
            />
         ))}
      </GoogleMap>
   );
};

export default ClinicsMap;
