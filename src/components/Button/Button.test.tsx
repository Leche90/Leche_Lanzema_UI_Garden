import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders the Button with label', () => {
  render(<Button label="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeVisible();
});

test('applies disabled state with grey background', () => {
  render(<Button label="Disabled" disabled={true} />);
  const buttonElement = screen.getByText(/Disabled/i);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle('background-color: grey');
});
