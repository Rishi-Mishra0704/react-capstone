import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './styles/Search.module.css';

const SearchBar = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setSearchQuery(inputValue);
  }, [inputValue, setSearchQuery]);

  return (
    <form className={classes.form}>
      <label className={classes.search} htmlFor="search-input">
        Search:
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={classes.input}
          data-testid="search-input"
        />

      </label>
    </form>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
