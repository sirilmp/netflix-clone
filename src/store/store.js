import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import planReduser from '../features/planSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
plan:planReduser
  },
});
