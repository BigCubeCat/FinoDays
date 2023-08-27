import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/app/store';
import {TLoanRate} from '@/app/types.ts';

export interface IResponseState {
  variants: TLoanRate[];
}

// TODO add fetch
const initialState: IResponseState = {
  variants: [],
};

export const responseSlice = createSlice({
  name: 'res',
  initialState,
  reducers: {
    setVariants: (state, action: PayloadAction<TLoanRate[]>) => {
      state.variants = action.payload;
    },
  },
});

export const {setVariants} = responseSlice.actions;

export const selectResults = (state: RootState) => state.res;
export default responseSlice.reducer;
