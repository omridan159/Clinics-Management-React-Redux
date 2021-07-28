import React, { useState, useCallback, useEffect } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';
import { columns } from '../constants/table';
import { updateClinicsData } from '../store/slices/clinicsDataSlice';
import { useSelector, useDispatch } from 'react-redux';

const gridStyle = { minHeight: 550 };

const Table = () => {
   const [serach, setSearch] = useState('');
   const [clinicsData, setClinicsData] = useState(null);
   const dispatch = useDispatch();



   const onEditComplete = useCallback(({ value, columnId, rowIndex }) => {
      dispatch(updateClinicsData({ value, columnId, rowIndex }));
   }, []);

   let data = useSelector((state) => state.clinicsData.data);

   useEffect(() => {
      if(serach){
         const filterData = data.filter((clinic) => {
            return clinic.HMOname.includes(serach) || clinic.neighborhood.includes(serach) ;
         });
         setClinicsData(filterData);
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
            <h4>Search Now</h4>
            <input name='search' onChange={handleChange} />
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
