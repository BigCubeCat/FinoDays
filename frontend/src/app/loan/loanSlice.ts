import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/app/store';
import {TLoan} from '@/app/types.ts';

export interface ILoanState {
  loan: TLoan;
}

const initialState: ILoanState = {
  loan: {
    sum: 0,
    duration: 1,
    purpose: '',
  },
};

export const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    setSum: (state, action: PayloadAction<number>) => {
      state.loan.sum = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.loan.duration = action.payload;
    },
    setPurpose: (state, action: PayloadAction<string>) => {
      state.loan.purpose = action.payload;
    },
  },
});

export const {
  setSum,
  setDuration,
  setPurpose,
} =
  loanSlice.actions;

export const selectLoan = (state: RootState) => state.loan;
export default loanSlice.reducer;
