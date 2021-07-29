import React from 'react';
import styled from 'styled-components';

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

const Header = () => {
   return (
      <div>
         <Title>ניהול קופות חולים</Title>
      </div>
   );
};

export default Header;
