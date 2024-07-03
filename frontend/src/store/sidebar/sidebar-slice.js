import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { isSidebar: true },
  reducers: {
    toggle(state, action) {
      state.isSidebar = action.payload.status;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
