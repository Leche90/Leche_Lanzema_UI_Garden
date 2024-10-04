import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders the Text with content', () => {
  render(<Text content="This is a sample text" />);
  const textElement = screen.getByText(/This is a sample text/i);
  expect(textElement).toBeVisible();
});

test('renders Text with custom color', () => {
  render(<Text content="Colored text" color="red" />);
  const textElement = screen.getByText(/Colored text/i);
  expect(textElement).toHaveStyle('color: red');
});
