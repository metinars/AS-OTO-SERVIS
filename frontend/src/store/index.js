import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import sidebarReducer from './sidebar/sidebar-slice';
import blogReducer from './blog/blog-slice';
import modalReducer from './modal/modal-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    blog: blogReducer,
    modal: modalReducer,
  },
});

export default store;
