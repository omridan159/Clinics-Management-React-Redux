import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';
import { useSelector, useDispatch } from 'react-redux'


const columns = [
   { name: 'HMOname', header: 'HMOname', minWidth: 50, defaultFlex: 1 },
   { name: 'ID', header: 'ID', minWidth: 50, defaultFlex: 1 },
   { name: 'Name', header: 'Name', minWidth: 50, defaultFlex: 1 },
   { name: 'X', header: 'X', minWidth: 50, defaultFlex: 1 },
   { name: 'Y', header: 'Y', minWidth: 50, defaultFlex: 1 },
   { name: 'Z', header: 'Z', minWidth: 50, defaultFlex: 1 },
   { name: 'address', header: 'address', minWidth: 50, defaultFlex: 1 },
   { name: 'neighborhood', header: 'neighborhood', minWidth: 50, defaultFlex: 1 },
];

const gridStyle = { minHeight: 550 };

const Table = () => {

    const data = useSelector((state) => state.clinicsData.clinicsData);

   return (
      <>
         <div>
            <h1>123</h1>
            <h1>123</h1>
            <input></input>
            <input></input>
         </div>
         <ReactDataGrid
            idProperty='id'
            columns={columns}
            dataSource={data}
            style={gridStyle}
         />
      </>
   );
};

export default Table;
