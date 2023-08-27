import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/app/store';
import {TLoan} from '@/app/types.ts';

export interface ILoanState {
  loan: TLoan;
}

const initialState: ILoanState = {
  loan: {
    amount: undefined,
    percent: undefined,
    payment: undefined,
    purpose: '',
  },
};

export const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.loan.amount = action.payload;
    },
    setPercent: (state, action: PayloadAction<number>) => {
      state.loan.percent = action.payload;
    },
    setPayment: (state, action: PayloadAction<number>) => {
      state.loan.payment = action.payload;
    },
    setPurpose: (state, action: PayloadAction<string>) => {
      state.loan.purpose = action.payload;
    },
    clear: (state) => {
      state.loan = initialState.loan;
    },
  },
});

export const {setAmount, setPurpose, setPercent, setPayment, clear} =
  loanSlice.actions;

export const selectLoan = (state: RootState) => state.loan;
export default loanSlice.reducer;
