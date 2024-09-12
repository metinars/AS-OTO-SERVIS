import React from 'react';
import { FaSearch } from 'react-icons/fa';
import classes from '../../../../layout/Dashboard/DashboardMainNavigation/DashboardHeader.module.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchInput.value.trim();
    if (searchTerm) {
      navigate(`/admin/blog/search/${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form className={classes.search} onSubmit={handleSearch}>
      <label>
        <input type="text" name="searchInput" placeholder="Buradan Ara" />
        <button type="submit" onMouseDown={(e) => e.preventDefault()}>
          <FaSearch />
        </button>
      </label>
    </form>
  );
};

export default SearchBar;
