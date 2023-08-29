import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/app/store';
import {TProvisionVariant} from '@/app/types.ts';

export interface IUserState {
  name: string;
  experience: number;
  count: number;
  income: number;
  consumption: number;
  age: number;
  phone: string;
  provision: TProvisionVariant;
}

// TODO add fetch
const initialState: IUserState = {
  name: 'guest',
  experience: 0,
  count: 0,
  income: 0,
  consumption: 0,
  phone: '',
  provision: 'none',
  age: 18,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.consumption = action.payload.consumption;
      state.income = action.payload.income;
      state.count = action.payload.count;
      state.experience = action.payload.experience;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.provision = action.payload.provision;
      state.phone = action.payload.phone;
    },
  },
});

export const {setUser} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
