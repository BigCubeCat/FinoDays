import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/app/store';
import {TUser} from '@/app/types.ts';

export interface IUserState {
  user: TUser;
}

// TODO add fetch
const initialState: IUserState = {
  user: {
    name: 'guest',
    age: 40,
    experience: 1323,
    count: 1,
    income: 1000000,
    consumption: 123,
    phone: '+79999999',
    region: '22',
    provision: 'none',
    inn: "2222"
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
