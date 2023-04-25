import React from "react";

const Filter = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div>
      <label htmlFor="genre-select">Filter by genre:</label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="">All genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
