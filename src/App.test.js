import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to React Learning Nilesh Balu Jorwar/i);
  expect(linkElement).toBeInTheDocument();
  expect(1).toBe(1);
});
