import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles/Filter.module.css';

const Filter = ({ genres, selectedGenre, onGenreChange }) => (
  <div className={classes.filter}>
    <label htmlFor="genre-select">
      Filter by genre:
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

    </label>
  </div>
);
Filter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default Filter;
