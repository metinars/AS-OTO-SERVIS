import store from '../store';
import { redirect } from 'react-router-dom';

export const checkAuthLoader = () => {
  const state = store.getState();
  const isAuthenticated =
    state.auth.isAuthenticated || !!localStorage.getItem('adminToken');

  if (!isAuthenticated) {
    return redirect('/auth?mode=login');
  }

  return null;
};
