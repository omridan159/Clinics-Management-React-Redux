import { createSlice } from '@reduxjs/toolkit';
import { clinicsData } from '../../constants/Clinics';

const initialState = {
   data: clinicsData,
};

export const clinicsDataSlice = createSlice({
   name: 'clinicsData',
   initialState,
   reducers: {
      updateClinicsData: (state, action) => {
         const index = action.payload.key;
         const filed = action.payload.columnId;
         const value = action.payload.value;

         state.data[index][filed] = value;
      },
   },
   extraReducers: {},
});

export const { updateClinicsData } = clinicsDataSlice.actions;

export default clinicsDataSlice.reducer;
