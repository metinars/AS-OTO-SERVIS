import React from 'react';

import classes from './UsersList.module.css';

const UsersList = ({ isSidebar, usersData }) => {
  return (
    <div
      className={`${classes.userListSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      <div className={classes.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Ad</th>
              <th>Kullanıcı Adı</th>
              <th>Email</th>
              <th>Rolü</th>
              <th>Katılma Tarihi</th>
            </tr>
          </thead>
          <tbody>
            {usersData?.result.map((user) => (
              <tr key={user?._id}>
                <td>
                  {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                </td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString('tr-TR')}</td>

                {/* <td className={classes.editIcons}>
                  <Link
                    target="_blank"
                    to={`${import.meta.env.VITE_REACT_APP_CLINET_URL}/blog/${
                      blog.titleUrl
                    }`}
                  >
                    <span>
                      <ImNewTab />
                    </span>
                  </Link>
                  <Link to={`/admin/blog/${blog.titleUrl}/edit`}>
                    <span>
                      <CiEdit />
                    </span>
                  </Link>
                  <span onClick={() => deleteBlogHandle(blog._id)}>
                    <MdDelete />
                  </span>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
