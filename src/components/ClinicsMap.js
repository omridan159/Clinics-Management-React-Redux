import React from 'react';
import styled from 'styled-components';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { mapContainerStyle, options, mapCenter, libraries } from '../constants/ClinicsMap';

const Title = styled.h1.attrs()`
   position: relative;
   width: 100%;
   font-size: 2.1em;
   background: linear-gradient(90deg, rgba(187,225,232,1) 0%, rgba(228,228,228,1) 50%, rgba(187,225,232,1) 100%);   padding: 15px;
   margin-bottom: 4vh;
   display: inline-block;
   font-weight: 600;
   font-family: 'Righteous';
`;

const ClinicsMap = ({ data }) => {
   const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
   });

   if (loadError) return 'An error occurred while loading maps';
   if (!isLoaded) return 'Loading Maps...';

   return (
      <>
         <Title>מפת קופות החולים בבאר שבע</Title>
         <GoogleMap
            id='map'
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={mapCenter}
            options={options}
            defaultZoom={15}
            defaultCenter={{ lat: 31.2540165064844, lng: 34.7907892544368 }}
         >
            {data.map((clinic) => (
               <Marker
                  key={clinic.key}
                  position={{
                     lat: Number(clinic.Y),
                     lng: Number(clinic.X),
                  }}
               />
            ))}
         </GoogleMap>
      </>
   );
};

export default ClinicsMap;
