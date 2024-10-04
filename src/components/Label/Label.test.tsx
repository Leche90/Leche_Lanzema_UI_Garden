import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders the Label with text', () => {
  render(<Label text="Name" />);
  const labelElement = screen.getByText(/Name/i);
  expect(labelElement).toBeVisible();
});

test('associates Label with the input field using htmlFor', () => {
  render(<Label text="Email" htmlFor="email-input" />);
  const labelElement = screen.getByText(/Email/i);
  expect(labelElement).toHaveAttribute('for', 'email-input');
});
