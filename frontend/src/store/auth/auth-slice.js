import { createSlice } from '@reduxjs/toolkit';
import { action } from '../../pages/DashboardPage/Authentication/Authentication';

const savedUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const initialState = {
  isAuthenticated: savedUser ? true : null,
  user: {
    ...savedUser,
    avatar: savedUser ? savedUser.avatar : null,
  },
  usersList: null,
  token: localStorage.getItem('adminToken'),
  usersLength: 0,
  loading: false,
  error: null,
  email: null,
  successMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.usersLength = action.payload.result.length;
      state.usersList = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    forgotPasswordStart: (state, action) => {
      state.loading = true;
    },
    forgotPasswordSuccess: (state, action) => {
      state.loading = false;
      state.email = action.email;
      state.successMessage = action.payload.message;
    },
    forgotPasswordFaillure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordStart: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload.message;
    },
    resetPasswordFaillure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = {
        ...action.payload.result.user,
        avatar: action.payload.result.user.avatar, // Avatar bilgisini ekleyin
      };
      state.token = action.payload.result.token;
      localStorage.setItem('adminToken', action.payload.result.token);
      localStorage.setItem('user', JSON.stringify(action.payload.result.user));
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = {
        ...action.payload.result.user,
        avatar: action.payload.result.user.avatar, // Avatar bilgisini ekleyin
      };
      state.token = action.payload.result.token;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    changePasswordStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.user = {
        ...action.payload.user,
        avatar: action.payload.user.avatar, // Avatar bilgisini ekleyin
      }; // Kullanıcı bilgilerini güncelle
      state.error = null;
      alert('Şifreniz başarıyla güncellendi.');
    },
    changePasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      alert(
        'Şifre güncelleme sırasında bir hata oluştu. Lütfen tekrar deneyin.'
      );
    },
    addUserStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    addUserSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    addUserFaillure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('adminToken');
      localStorage.removeItem('user');
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  forgotPasswordStart,
  forgotPasswordSuccess,
  forgotPasswordFaillure,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFaillure,
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  changePasswordStart,
  changePasswordSuccess,
  changePasswordFailure,
  addUserSuccess,
  addUserStart,
  addUserFaillure,
} = authSlice.actions;

export default authSlice.reducer;
