import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Git Stats/i);
  expect(headerElement).toBeInTheDocument();
});
