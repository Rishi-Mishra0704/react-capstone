import React, { useState, useEffect } from "react";
const SearchBar = ({ setSearchQuery }) => {
    const [inputValue, setInputValue] = useState("");
  
    useEffect(() => {
      setSearchQuery(inputValue);
    }, [inputValue, setSearchQuery]);
  
    return (
      <form>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          data-testid="search-input"
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  export default SearchBar;