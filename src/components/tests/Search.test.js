import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import SearchBar from '../Search';

describe('SearchBar component', () => {
  test('renders search input', () => {
    const setSearchQueryMock = jest.fn();
    render(<SearchBar setSearchQuery={setSearchQueryMock} />);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  test('sets search query on input change', () => {
    const setSearchQueryMock = jest.fn();
    render(<SearchBar setSearchQuery={setSearchQueryMock} />);
    const searchInput = screen.getByTestId('search-input');
    userEvent.type(searchInput, 'test search');
    expect(setSearchQueryMock).toHaveBeenCalledWith('test search');
  });
});
