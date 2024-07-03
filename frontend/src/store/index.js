import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/auth-slice';
import sidebarSlice from './sidebar/sidebar-slice';

const store = configureStore({
  reducer: { auth: authSlice, sidebar: sidebarSlice },
});

export default store;
