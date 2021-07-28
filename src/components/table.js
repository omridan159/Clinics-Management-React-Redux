import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';
import { columns } from '../constants/table';
import { updateClinicsData } from '../store/slices/clinicsDataSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const gridStyle = { minHeight: 550 };

const Input = styled.input.attrs()`
   position: relative;
   font-size: 1.5em;
   background: linear-gradient(21deg, #10abff, #1beabd);
   padding: 3px;
   margin-bottom: 4vh;
   display: inline-block;
   border-radius: 9999em;
   :focus {
      outline: none;
   }
`;

const Table = () => {
   const [serach, setSearch] = useState('');
   const [clinicsData, setClinicsData] = useState(null);
   const dispatch = useDispatch();

   const onEditComplete = useCallback(({ value, columnId, rowIndex }) => {
      dispatch(updateClinicsData({ value, columnId, rowIndex }));
   }, []);

   let data = useSelector((state) => state.clinicsData.data);

   useEffect(() => {
      if (serach) {
         const filterData = data.filter((clinic) => {
            return (
               clinic.HMOname.includes(serach) ||
               clinic.neighborhood.includes(serach)
            );
         });
         setTimeout(function () {
            setClinicsData(filterData);
         }, 700);
      }
   }, [serach]);

   const handleChange = (e) => {
      console.log(data);
      setSearch(e.target.value);
   };

   return (
      <>
         <div>
            <h1>Clinics Management Tool</h1>
            <button class='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
               <Link to='/map'>ClinicsMap</Link>
            </button>

            <h4>Search Now</h4>
            <input
               dir='rtl'
               name='search'
               class='bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500 justify-center w-4/12'
               type='text'
               onChange={handleChange}
            />
         </div>

         <ReactDataGrid
            idProperty='id'
            onEditComplete={onEditComplete}
            editable
            columns={columns}
            dataSource={clinicsData ? clinicsData : data}
            style={gridStyle}
         />
      </>
   );
};

export default Table;
