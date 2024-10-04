import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';
import { vi } from 'vitest';  // Import vi from Vitest

test('renders RadioButton with label', () => {
  render(
    <RadioButton
      name="group1"
      value="Option 1"
      label="Option 1"
      checked={false}
      onChange={() => {}}
    />
  );
  expect(screen.getByLabelText(/Option 1/i)).toBeVisible();
});

test('calls onChange when clicked', () => {
  const handleChange = vi.fn();  // Use vi.fn() instead of jest.fn()
  render(
    <RadioButton
      name="group1"
      value="Option 1"
      label="Option 1"
      checked={false}
      onChange={handleChange}
    />
  );
  fireEvent.click(screen.getByLabelText(/Option 1/i));
  expect(handleChange).toHaveBeenCalledWith('Option 1');
});
