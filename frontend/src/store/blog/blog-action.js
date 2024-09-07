import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addBlogFailure,
  addBlogStart,
  addBlogSuccess,
  deleteBlogFailure,
  deleteBlogStart,
  deleteBlogSuccess,
  fetchBlogDetailStart,
  fetchBlogDetailSuccess,
  fetchBlogsFailure,
  fetchBlogsStart,
  fetchBlogsSuccess,
  searchBlogFaillure,
  searchBlogStart,
  searchBlogSuccess,
  updateBlogFailure,
  updateBlogStart,
  updateBlogSuccess,
} from './blog-slice';

const API_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

export const fetchBlogs = createAsyncThunk(
  'blog/getAll',
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(fetchBlogsStart());
      const response = await fetch(API_URL + '/blog/getAll');
      const data = await response.json();
      thunkAPI.dispatch(fetchBlogsSuccess(data));
    } catch (error) {
      thunkAPI.dispatch(fetchBlogsFailure(error.message));
    }
  }
);

export const fetchBlogDetail = createAsyncThunk(
  'blogs/fetchBlogDetail',
  async (titleUrl, { dispatch, rejectWithValue }) => {
    dispatch(fetchBlogDetailStart());
    try {
      const response = await fetch(`${API_URL}/blog/${titleUrl}`);
      const data = await response.json();
      dispatch(fetchBlogDetailSuccess(data));
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Bir hata oluştu');
    }
  }
);

export const addBlog = createAsyncThunk(
  'blog/addBlog',
  async (blogData, thunkAPI) => {
    try {
      thunkAPI.dispatch(addBlogStart());
      const token = thunkAPI.getState().auth.token;

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(`${API_URL}/blog/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error('Blog ekleme başarısız oldu!');
      }

      const data = await response.json();
      thunkAPI.dispatch(addBlogSuccess(data));
      return data;
    } catch (error) {
      thunkAPI.dispatch(addBlogFailure(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  'blog/deleteBlog',
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(deleteBlogStart());
      const token = thunkAPI.getState().auth.token;

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(`${API_URL}/blog/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Blog silme başarısız oldu!');
      }

      const data = await response.json();
      thunkAPI.dispatch(deleteBlogSuccess(data));
      return data;
    } catch (error) {
      thunkAPI.dispatch(deleteBlogFailure(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBlog = createAsyncThunk(
  'blog/updateBlog',
  async (blogData, thunkAPI) => {
    try {
      thunkAPI.dispatch(updateBlogStart());
      const token = thunkAPI.getState().auth.token;

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(
        `${API_URL}/blog/edit/${blogData.titleUrl}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(blogData),
        }
      );

      if (!response.ok) {
        throw new Error('Blog güncelleme başarısız oldu!');
      }

      const data = await response.json();
      thunkAPI.dispatch(updateBlogSuccess(data));
      return data;
    } catch (error) {
      thunkAPI.dispatch(updateBlogFailure(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchBlogFetch = createAsyncThunk(
  'blog/search',
  async (title, thunkAPI) => {
    try {
      thunkAPI.dispatch(searchBlogStart());
      const response = await fetch(
        `${API_URL}/blog/search/${encodeURIComponent(title)}`
      );
      const data = await response.json();
      thunkAPI.dispatch(searchBlogSuccess(data));
    } catch (error) {
      thunkAPI.dispatch(searchBlogFaillure(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
