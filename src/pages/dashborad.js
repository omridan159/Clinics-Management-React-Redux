import React from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import ClinicsMap from '../components/ClinicsMap';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
   className: '',
})`
   margin: auto;
   width: 65%;
   padding: 10px;
`;

const MapWrapper = styled.div.attrs({
   className: '',
})`
   margin-top: 5vh;
   padding-bottom: 5vh;
`;

const Dashboard = () => {
   return (
      <>
         <Header />
         <Wrapper>
            <Table />
            <MapWrapper>
               <ClinicsMap />
            </MapWrapper>
         </Wrapper>
      </>
   );
};

export default Dashboard;
