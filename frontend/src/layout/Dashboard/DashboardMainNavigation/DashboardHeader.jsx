import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';

import classes from './DashboardHeader.module.css';
import { sidebarActions } from '../../../store/sidebar/sidebar-slice';

const DashboardHeader = () => {
  const dispatch = useDispatch();

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
        <div className={classes.search}>
          <label>
            <input type="text" placeholder="Buradan Ara" />
            <FaSearch />
          </label>
        </div>
        <div className={classes.user}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
