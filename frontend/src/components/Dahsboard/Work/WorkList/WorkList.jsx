import React from 'react';
import { Link } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { ImNewTab } from 'react-icons/im';
import { useDispatch } from 'react-redux';

import {
  deleteWork,
  fetchWorks,
} from '../../../../store/work/work-action';

import classes from './WorkList.module.css';

const WorkList = ({ works, isSidebar, message }) => {
  const dispatch = useDispatch();

  const deleteWorkHandle = async (id) => {
    if (window.confirm('Bu işi silmek istediğinizden emin misiniz?')) {
      try {
        await dispatch(deleteWork(id)).unwrap();
        dispatch(fetchWorks());
      } catch (error) {
        console.error('Silme işlemi başarısız:', error);
      }
    }
  };

  const getCategoryName = (category) => {
    if (category === 'kaporta-boya') {
      return 'Kaporta ve Boya';
    }

    if (category === 'boyasiz-gocuk') {
      return 'Boyasız Göçük';
    }

    return category || '-';
  };

  if (!works) {
    return (
      <div
        className={`${classes.workListSection} ${
          !isSidebar ? classes.active : ''
        }`}
      >
        Yükleniyor
      </div>
    );
  }

  if (works.length === 0) {
    return (
      <div
        className={`${classes.workListSection} ${
          !isSidebar ? classes.active : ''
        }`}
      >
        {message || 'Henüz iş eklenmemiş.'}
      </div>
    );
  }

  return (
    <div
      className={`${classes.workListSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      {message}

      <div className={classes.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Başlık</th>
              <th>Araç</th>
              <th>Kategori</th>
              <th>Tarih</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>

          <tbody>
            {works.map((work) => (
              <tr key={work?._id}>
                <td>{work.title}</td>

                <td>
                  {[work.vehicleBrand, work.vehicleModel]
                    .filter(Boolean)
                    .join(' ') || '-'}
                </td>

                <td>{getCategoryName(work.category)}</td>

                <td>
                  {work.createdAt
                    ? new Date(work.createdAt).toLocaleDateString('tr-TR')
                    : '-'}
                </td>

                <td>
                  <span
                    className={`${classes.status} ${
                      work.status === 'aktif'
                        ? classes.delivered
                        : classes.return
                    }`}
                  >
                    {work.status}
                  </span>
                </td>

                <td className={classes.editIcons}>
                  <Link
                    target="_blank"
                    to={`/yaptigimiz-isler/${work.titleUrl}`}
                  >
                    <span>
                      <ImNewTab />
                    </span>
                  </Link>

                  <Link to={`/admin/work/${work.titleUrl}/edit`}>
                    <span>
                      <CiEdit />
                    </span>
                  </Link>

                  <span onClick={() => deleteWorkHandle(work._id)}>
                    <MdDelete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkList;