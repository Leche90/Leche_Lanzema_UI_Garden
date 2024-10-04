import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';
import { vi } from 'vitest';

test('renders Dropdown with options', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  render(<Dropdown options={options} value="Option 1" onChange={() => {}} />);

  options.forEach((option) => {
    expect(screen.getByText(option)).toBeVisible();
  });
});

test('calls onChange when an option is selected', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleChange = vi.fn();  // Use vi.fn() instead of jest.fn()
  render(<Dropdown options={options} value="Option 1" onChange={handleChange} />);

  const dropdown = screen.getByDisplayValue('Option 1');
  fireEvent.change(dropdown, { target: { value: 'Option 2' } });

  expect(handleChange).toHaveBeenCalledWith('Option 2');
});
