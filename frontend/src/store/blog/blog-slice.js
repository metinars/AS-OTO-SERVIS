import { createSlice } from '@reduxjs/toolkit';
import { action } from '../../pages/DashboardPage/Authentication/Authentication';

const initialState = {
  blogs: [],
  searchBlog: [],
  blogDetail: null,
  blogLength: 0,
  loading: false,
  error: null,
  successMessage: null,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    fetchBlogsStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null; // loading başladığında successMessage'ı temizliyoruz
    },
    fetchBlogsSuccess: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.result;
      state.blogLength = action.payload.result.length;
    },
    fetchBlogsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchBlogDetailStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null; // loading başladığında successMessage'ı temizliyoruz
    },
    searchBlogStart: (state) => {
      state.loading = true;
      state.successMessage = null; // loading başladığında successMessage'ı temizliyoruz
    },
    searchBlogSuccess: (state, action) => {
      state.loading = false;
      state.searchBlog = action.payload;
    },
    searchBlogFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchBlogDetailSuccess: (state, action) => {
      state.loading = false;
      state.blogDetail = action.payload;
    },
    fetchBlogDetailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addBlogStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null; // loading başladığında successMessage'ı temizliyoruz
    },
    addBlogSuccess: (state, action) => {
      state.loading = false;
      state.blogs.push(action.payload);
      state.successMessage = 'Blog başarıyla eklendi!'; // Başarılı ekleme mesajı
    },
    addBlogFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateBlogStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null; // loading başladığında successMessage'ı temizliyoruz
    },
    updateBlogSuccess: (state, action) => {
      state.loading = false;
      const index = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
      state.successMessage = 'Blog başarıyla güncellendi!'; // Başarılı güncelleme mesajı
    },
    updateBlogFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteBlogStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    deleteBlogSuccess: (state, action) => {
      state.loading = false;
      console.log(Array.isArray(state.blogs));

      console.log('Current blogs state:', state.blogs); // Debug için
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload); // Burada blogs bir dizi olmalı
      state.successMessage = 'Blog başarıyla silindi!';
    },
    deleteBlogFailure: (state, action) => {
      console.log('hataya girdi');
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchBlogsStart,
  fetchBlogsSuccess,
  fetchBlogsFailure,
  addBlogStart,
  addBlogSuccess,
  addBlogFailure,
  updateBlogStart,
  updateBlogSuccess,
  updateBlogFailure,
  deleteBlogStart,
  deleteBlogSuccess,
  deleteBlogFailure,
  fetchBlogDetailStart,
  fetchBlogDetailSuccess,
  fetchBlogDetailFailure,
  searchBlogStart,
  searchBlogSuccess,
  searchBlogFaillure,
} = blogSlice.actions;

export default blogSlice.reducer;
