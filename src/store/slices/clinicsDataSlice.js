import { createSlice, current } from '@reduxjs/toolkit';
import { clinicsData } from '../../constants/dashboard';

const initialState = {
   data: clinicsData,
};

export const clinicsDataSlice = createSlice({
   name: 'clinicsData',
   initialState,
   reducers: {
      updateClinicsData: (state, action) => {

         const index = action.payload.rowIndex;
         const filed = action.payload.columnId;
         const value = action.payload.value;

         state.data[index][filed] = value;
      },
   },
   extraReducers: {},
});

export const { updateClinicsData } = clinicsDataSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default clinicsDataSlice.reducer;
