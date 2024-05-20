// src/tests/SearchBar.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('calls onSearch with the username', () => {
  const onSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={onSearch} />);

  fireEvent.change(getByPlaceholderText('Enter GitHub username'), { target: { value: 'testuser' } });
  fireEvent.click(getByText('Search'));

  expect(onSearch).toHaveBeenCalledWith('testuser');
});
