import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchBlogFetch } from '../../../../store/blog/blog-action';
import BlogList from '../../Blog/BlogList';

const SearchResult = () => {
  const dispatch = useDispatch();
  const searchBlogData = useSelector((state) => state.blog.searchBlog);
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  const { query } = useParams();

  useEffect(() => {
    dispatch(searchBlogFetch(query));
  }, [query, dispatch]);

  let searchResultMessage = '';

  if (searchBlogData?.result?.length == 0) {
    searchResultMessage = 'Girdiğiniz kelimeye uygun sonuç bulunamadı.';
  } else {
    searchResultMessage = `Girdiğiniz kelimeyle eşleşen ${searchBlogData?.result?.length} sonuç bulundu.`;
  }

  return (
    <BlogList
      blogs={searchBlogData.result}
      isSidebar={isSidebar}
      message={searchResultMessage}
    />
  );
};

export default SearchResult;
