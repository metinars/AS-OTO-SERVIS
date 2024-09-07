import { redirect } from 'react-router-dom';
import store from '../store';

export const CheckStatuLoader = () => {
  const state = store.getState();
  const isAdminRole = state.auth.user.role;

  console.log(isAdminRole);

  if (isAdminRole != 'admin') {
    return redirect('/admin');
  }
  return null;
};
