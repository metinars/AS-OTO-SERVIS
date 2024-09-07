import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addUserFaillure,
  addUserStart,
  addUserSuccess,
  changePasswordFailure,
  changePasswordStart,
  changePasswordSuccess,
  fetchUsersFailure,
  fetchUsersStart,
  fetchUsersSuccess,
  forgotPasswordFaillure,
  forgotPasswordStart,
  forgotPasswordSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  logout as logoutAction,
  resetPasswordFaillure,
  resetPasswordStart,
  resetPasswordSuccess,
} from './auth-slice';

const API_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

export const fetchUsers = createAsyncThunk(
  '/user/userGetAll',
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(fetchUsersStart());
      const response = await fetch(API_URL + '/user/userGetAll');
      const data = await response.json();
      thunkAPI.dispatch(fetchUsersSuccess(data));
    } catch (error) {
      thunkAPI.dispatch(fetchUsersFailure(error.message));
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      thunkAPI.dispatch(loginStart());

      const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed!');
      }

      const data = await response.json();
      console.log(data);
      thunkAPI.dispatch(loginSuccess(data));
      return data;
    } catch (error) {
      thunkAPI.dispatch(loginFailure(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  thunkAPI.dispatch(logoutAction());
});

export const forgotPasswordPost = createAsyncThunk(
  'auth/forgot',
  async (email, thunkAPI) => {
    try {
      thunkAPI.dispatch(forgotPasswordStart());
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      };

      const response = await fetch(
        API_URL + '/user/forgotPassword',
        requestOptions
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Forgot password request failed!');
      }

      const res = await response.json();
      thunkAPI.dispatch(forgotPasswordSuccess(res));
      return res;
    } catch (error) {
      return thunkAPI.dispatch(forgotPasswordFaillure(error.message));
    }
  }
);

export const resetPassPost = createAsyncThunk(
  'auth/reset',
  async (params, thunkAPI) => {
    try {
      thunkAPI.dispatch(resetPasswordStart());
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: params.password }),
      };

      const response = await fetch(
        `${API_URL}/user/reset/${params.token.token}`,
        requestOptions
      );
      let res = await response.json();
      thunkAPI.dispatch(resetPasswordSuccess(res));
      return res;
    } catch (error) {
      thunkAPI.dispatch(resetPasswordFaillure(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ userName, nowPassword, newPassword }, thunkAPI) => {
    try {
      console.log('action grdi');
      console.log(`${API_URL}/user/changePassword`);
      thunkAPI.dispatch(changePasswordStart());

      const response = await fetch(`${API_URL}/user/changePassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, nowPassword, newPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Change password failed!');
      }

      const data = await response.json();
      thunkAPI.dispatch(changePasswordSuccess(data));
      return data;
    } catch (error) {
      thunkAPI.dispatch(changePasswordFailure(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'auth/addUser',
  async (userData, thunkAPI) => {
    try {
      thunkAPI.dispatch(addUserStart());
      const token = thunkAPI.getState().auth.token;

      if (!token) {
        throw new Error('Token not found');
      }

      const formData = new FormData();
      for (const key in userData) {
        if (userData.hasOwnProperty(key)) {
          formData.append(key, userData[key]);
        }
      }

      const response = await fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Kullanıcı ekleme başarısız oldu!');
      }

      const data = await response.json();
      thunkAPI.dispatch(addUserSuccess());
      return data;
    } catch (error) {
      thunkAPI.dispatch(addUserFaillure(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
