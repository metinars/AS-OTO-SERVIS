import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addWorkFailure,
  addWorkStart,
  addWorkSuccess,

  deleteWorkFailure,
  deleteWorkStart,
  deleteWorkSuccess,

  fetchWorkDetailFailure,
  fetchWorkDetailStart,
  fetchWorkDetailSuccess,

  fetchWorksFailure,
  fetchWorksStart,
  fetchWorksSuccess,

  searchWorkFailure,
  searchWorkStart,
  searchWorkSuccess,

  updateWorkFailure,
  updateWorkStart,
  updateWorkSuccess,
} from './work-slice';

const API_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

/*
|--------------------------------------------------------------------------
| TÜM İŞLER
|--------------------------------------------------------------------------
*/

export const fetchWorks = createAsyncThunk(
  'work/getAll',

  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(fetchWorksStart());

      const response = await fetch(`${API_URL}/work/getAll`);

      if (!response.ok) {
        throw new Error('İşler getirilemedi!');
      }

      const data = await response.json();

      thunkAPI.dispatch(fetchWorksSuccess(data));

      return data;
    } catch (error) {
      thunkAPI.dispatch(fetchWorksFailure(error.message));

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
|--------------------------------------------------------------------------
| İŞ DETAYI
|--------------------------------------------------------------------------
*/

export const fetchWorkDetail = createAsyncThunk(
  'work/detail',

  async (titleUrl, thunkAPI) => {
    try {
      thunkAPI.dispatch(fetchWorkDetailStart());

      const response = await fetch(
        `${API_URL}/work/${titleUrl}`
      );

      if (!response.ok) {
        throw new Error('İş bulunamadı!');
      }

      const data = await response.json();

      thunkAPI.dispatch(fetchWorkDetailSuccess(data));

      return data;
    } catch (error) {
      thunkAPI.dispatch(fetchWorkDetailFailure(error.message));

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
|--------------------------------------------------------------------------
| YENİ İŞ EKLE
|--------------------------------------------------------------------------
*/

export const addWork = createAsyncThunk(
  'work/add',

  async (workData, thunkAPI) => {
    try {
      thunkAPI.dispatch(addWorkStart());

      const token = thunkAPI.getState().auth.token;

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(`${API_URL}/work/new`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(workData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'İş ekleme başarısız oldu!'
        );
      }

      thunkAPI.dispatch(addWorkSuccess(data));

      return data;
    } catch (error) {
      thunkAPI.dispatch(addWorkFailure(error.message));

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
|--------------------------------------------------------------------------
| İŞ SİL
|--------------------------------------------------------------------------
*/

export const deleteWork = createAsyncThunk(
  'work/delete',

  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(deleteWorkStart());

      const token = thunkAPI.getState().auth.token;

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(
        `${API_URL}/work/delete/${id}`,
        {
          method: 'DELETE',

          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'İş silme başarısız oldu!'
        );
      }

      /*
        Reducer'ın hangi kaydı sileceğini bilmesi için
        MongoDB id'sini gönderiyoruz.
      */

      thunkAPI.dispatch(deleteWorkSuccess(id));

      return data;
    } catch (error) {
      thunkAPI.dispatch(deleteWorkFailure(error.message));

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
|--------------------------------------------------------------------------
| İŞ GÜNCELLE
|--------------------------------------------------------------------------
*/

export const updateWork = createAsyncThunk(
  'work/update',

  async (workData, thunkAPI) => {
    try {
      thunkAPI.dispatch(updateWorkStart());

      const token = thunkAPI.getState().auth.token;

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(
        `${API_URL}/work/edit/${workData.titleUrl}`,
        {
          method: 'PUT',

          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(workData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'İş güncelleme başarısız oldu!'
        );
      }

      thunkAPI.dispatch(updateWorkSuccess(data));

      return data;
    } catch (error) {
      thunkAPI.dispatch(updateWorkFailure(error.message));

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
|--------------------------------------------------------------------------
| İŞ ARA
|--------------------------------------------------------------------------
*/

export const searchWorkFetch = createAsyncThunk(
  'work/search',

  async (title, thunkAPI) => {
    try {
      thunkAPI.dispatch(searchWorkStart());

      const response = await fetch(
        `${API_URL}/work/search/${encodeURIComponent(title)}`
      );

      if (!response.ok) {
        throw new Error('Arama başarısız oldu!');
      }

      const data = await response.json();

      thunkAPI.dispatch(searchWorkSuccess(data));

      return data;
    } catch (error) {
      thunkAPI.dispatch(searchWorkFailure(error.message));

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);