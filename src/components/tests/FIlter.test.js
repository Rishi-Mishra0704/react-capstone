import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filter from '../FIlter';

describe('Filter component', () => {
  const genres = ['Action', 'Adventure', 'RPG'];
  const selectedGenre = 'Adventure';
  const onGenreChange = jest.fn();

  test('renders filter label', () => {
    render(<Filter genres={genres} selectedGenre={selectedGenre} onGenreChange={onGenreChange} />);
    const labelElement = screen.getByLabelText('Filter by genre:');
    expect(labelElement).toBeInTheDocument();
  });

  test('renders all genres options', () => {
    render(<Filter genres={genres} selectedGenre={selectedGenre} onGenreChange={onGenreChange} />);
    const allOptionElement = screen.getByText('All genres');
    expect(allOptionElement).toBeInTheDocument();

    const actionOptionElement = screen.getByText('Action');
    expect(actionOptionElement).toBeInTheDocument();

    const adventureOptionElement = screen.getByText('Adventure');
    expect(adventureOptionElement).toBeInTheDocument();

    const rpgOptionElement = screen.getByText('RPG');
    expect(rpgOptionElement).toBeInTheDocument();
  });

  test('renders selected genre as selected option', () => {
    render(<Filter genres={genres} selectedGenre={selectedGenre} onGenreChange={onGenreChange} />);
    const selectElement = screen.getByDisplayValue('Adventure');
    expect(selectElement).toBeInTheDocument();
  });

  test('calls onGenreChange when select option is changed', () => {
    render(<Filter genres={genres} selectedGenre={selectedGenre} onGenreChange={onGenreChange} />);
    const selectElement = screen.getByDisplayValue('Adventure');
    expect(selectElement).toBeInTheDocument();

    const newSelectedValue = 'RPG';
    fireEvent.change(selectElement, { target: { value: newSelectedValue } });
    expect(onGenreChange).toHaveBeenCalledTimes(1);
    expect(onGenreChange).toHaveBeenCalledWith(newSelectedValue);
  });
});
