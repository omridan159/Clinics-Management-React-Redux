import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '@inovua/reactdatagrid-enterprise/index.css';
import '@inovua/reactdatagrid-enterprise/theme/default-dark.css';
import Icon from '../components/shared/Icon';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import { updateClinicsData } from '../store/slices/clinicsDataSlice';
import { gridStyle, columns } from '../constants/Table';

const Table = ({ data }) => {
   const [serach, setSearch] = useState('');
   const [clinicsData, setClinicsData] = useState(data);

   const dispatch = useDispatch();

   useEffect(() => {
      if (serach) {
         const filterClinicsData = clinicsData.filter((clinic) => {
            return (
               clinic.HMOname.includes(serach) ||
               clinic.neighborhood.includes(serach)
            );
         });

         const delayTheSerachExecution = setTimeout(() => {
            setClinicsData(filterClinicsData);
         }, 500);

         return () => clearTimeout(delayTheSerachExecution);
      }
      // eslint-disable-next-line
   }, [serach]);

   const handleChange = (e) => {
      setSearch(e.target.value);

      if (!e.target.value) {
         setTimeout(() => {
            setClinicsData(data);
         }, 500);
      }
   };
   
   const onEditComplete = ({ value, columnId, rowIndex, data }) => {
      const key = data.key;
      dispatch(updateClinicsData({ value, columnId, key }));

      let newClinicsData = clinicsData.map(clinic => 
         {
           if (clinic.key === key){
             return {...clinic, [columnId]: value};
           }
           return clinic; 
         });

      setClinicsData(newClinicsData);
   };

   return (
      <>
         <div className='bg-white shadow p-4 mb-4 flex'>
            <input
               dir='rtl'
               className='w-full rounded p-2 focus:outline-none focus:ring focus:border-blue-300 '
               type='text'
               placeholder="נסה 'מכבי'"
               onChange={handleChange}
            />
            <span className='w-auto flex justify-start items-center text-gray-500 p-2'>
               <Icon name={'serach'} />
            </span>
         </div>

         <ReactDataGrid
            idProperty='id'
            onEditComplete={onEditComplete}
            editable
            rtl={true}
            columns={columns}
            dataSource={clinicsData}
            theme={'default-dark'}
            style={gridStyle}
         />
      </>
   );
};

export default Table;
