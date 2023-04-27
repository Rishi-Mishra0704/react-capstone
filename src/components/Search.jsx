import React, { useState, useEffect } from "react";
import classes from "./styles/Search.module.css";

const SearchBar = ({ setSearchQuery }) => {
    const [inputValue, setInputValue] = useState("");
  
    useEffect(() => {
      setSearchQuery(inputValue);
    }, [inputValue, setSearchQuery]);
  
    return (
      <form className={classes.form}>
        <label className={classes.search} htmlFor="search-input">Search: </label>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={classes.input}
          data-testid="search-input"
        />
      </form>
    );
  };

  export default SearchBar;