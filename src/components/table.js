import React, { useState, useCallback, useEffect } from 'react';
import Icon from '../components/shared/Icon';
import { columns } from '../constants/Table';
import { updateClinicsData } from '../store/slices/clinicsDataSlice';
import { useSelector, useDispatch } from 'react-redux';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';
import '@inovua/reactdatagrid-enterprise/theme/default-dark.css';

const gridStyle = { minHeight: 550, maxHeight: 700 };

const Table = () => {
   const [serach, setSearch] = useState('');
   const [clinicsData, setClinicsData] = useState(null);
   const data = useSelector((state) => state.clinicsData.data);

   const dispatch = useDispatch();

   const onEditComplete = useCallback(({ value, columnId, rowIndex }) => {
      dispatch(updateClinicsData({ value, columnId, rowIndex }));
   }, []);

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
      setSearch(e.target.value);
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
            dataSource={clinicsData ? clinicsData : data}
            theme={'default-dark'}
            style={gridStyle}
         />
      </>
   );
};

export default Table;
