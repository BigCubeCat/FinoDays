import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import loanReducer from '@/app/loan/loanSlice';
import resReducer from '@/app/response/responseSlice';
import userReducer from '@/app/user/userSlice';

export const store = configureStore({
  reducer: {
    loan: loanReducer,
    res: resReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
