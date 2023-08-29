import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/app/store';
import {TResult} from '@/app/types.ts';

export interface IResultState {
  variants: TResult[];
}

// TODO add fetch
const initialState: IResultState = {
  variants: [],
};

export const responseSlice = createSlice({
  name: 'res',
  initialState,
  reducers: {
    setVariants: (state, action: PayloadAction<TResult[]>) => {
      state.variants = action.payload;
    },
  },
});

export const {setVariants} = responseSlice.actions;

export const selectResults = (state: RootState) => state.res.variants;
export default responseSlice.reducer;
