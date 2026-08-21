import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  works: [],
  searchWork: [],
  workDetail: null,
  workLength: 0,
  loading: false,
  error: null,
  successMessage: null,
};

const workSlice = createSlice({
  name: 'works',

  initialState,

  reducers: {
    fetchWorksStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    fetchWorksSuccess: (state, action) => {
      state.loading = false;
      state.works = action.payload.result;
      state.workLength = action.payload.result.length;
    },

    fetchWorksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchWorkDetailStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    fetchWorkDetailSuccess: (state, action) => {
      state.loading = false;
      state.workDetail = action.payload;
    },

    fetchWorkDetailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addWorkStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    addWorkSuccess: (state, action) => {
      state.loading = false;

      if (action.payload?.result?.work) {
        state.works.unshift(action.payload.result.work);
        state.workLength = state.works.length;
      }

      state.successMessage = 'İş başarıyla eklendi!';
    },

    addWorkFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateWorkStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    updateWorkSuccess: (state, action) => {
      state.loading = false;

      const updatedWork = action.payload?.result;

      if (updatedWork) {
        const index = state.works.findIndex(
          (work) => work._id === updatedWork._id
        );

        if (index !== -1) {
          state.works[index] = updatedWork;
        }

        state.workDetail = updatedWork;
      }

      state.successMessage = 'İş başarıyla güncellendi!';
    },

    updateWorkFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteWorkStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    deleteWorkSuccess: (state, action) => {
      state.loading = false;

      state.works = state.works.filter(
        (work) => work._id !== action.payload
      );

      state.workLength = state.works.length;

      state.successMessage = 'İş başarıyla silindi!';
    },

    deleteWorkFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    searchWorkStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },

    searchWorkSuccess: (state, action) => {
      state.loading = false;
      state.searchWork = action.payload.result;
    },

    searchWorkFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearWorkMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
});

export const {
  fetchWorksStart,
  fetchWorksSuccess,
  fetchWorksFailure,

  fetchWorkDetailStart,
  fetchWorkDetailSuccess,
  fetchWorkDetailFailure,

  addWorkStart,
  addWorkSuccess,
  addWorkFailure,

  updateWorkStart,
  updateWorkSuccess,
  updateWorkFailure,

  deleteWorkStart,
  deleteWorkSuccess,
  deleteWorkFailure,

  searchWorkStart,
  searchWorkSuccess,
  searchWorkFailure,

  clearWorkMessages,
} = workSlice.actions;

export default workSlice.reducer;