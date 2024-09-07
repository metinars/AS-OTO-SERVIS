import { useDispatch, useSelector } from 'react-redux';

import '@fortawesome/fontawesome-free/css/all.min.css';

import classes from './DashboardHeader.module.css';
import { sidebarActions } from '../../../store/sidebar/sidebar-slice';
import SearchBar from '../../../components/Dahsboard/AdminAuth/SearchBar/SearchBar';

const DashboardHeader = () => {
  const dispatch = useDispatch();
  let userAvatar = useSelector((state) => state.auth.user.avatar);

  if (!userAvatar) {
    userAvatar =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU';
  }

  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  const sidebarShow = () => {
    dispatch(sidebarActions.toggle({ status: !isSidebar }));
  };

  return (
    <div
      className={`${classes.adminHeader} ${!isSidebar ? classes.active : ''}`}
    >
      <div className={classes.topbar}>
        <div
          className={`${classes.toggle} ${!isSidebar ? classes.active : ''}`}
          onClick={sidebarShow}
        ></div>
        <SearchBar />

        <div className={classes.user}>
          <img src={userAvatar} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
