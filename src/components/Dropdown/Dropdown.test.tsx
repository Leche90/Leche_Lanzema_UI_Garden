import { render, fireEvent, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('renders disabled Dropdown and prevents interaction', () => {
    const handleChange = jest.fn(); // Mock function

    // Render the dropdown with disabled prop set to true
    render(
      <Dropdown
        value="Option 1"
        onChange={handleChange}
        options={['Option 1', 'Option 2', 'Option 3']}
        disabled={true} // Disabled is true
      />
    );

    // Get the dropdown element
    const dropdown = screen.getByRole('combobox');

    // Try to change the value of the dropdown (this should be prevented)
    fireEvent.change(dropdown, { target: { value: 'Option 2' } });

    // Ensure that handleChange has NOT been called
    expect(handleChange).not.toHaveBeenCalled(); // This should pass
  });

  test('allows interaction when dropdown is enabled', () => {
    const handleChange = jest.fn();

    // Render the dropdown with disabled prop set to false
    render(
      <Dropdown
        value="Option 1"
        onChange={handleChange}
        options={['Option 1', 'Option 2', 'Option 3']}
        disabled={false} // Dropdown is enabled
      />
    );

    const dropdown = screen.getByRole('combobox');

    // Change the value of the dropdown
    fireEvent.change(dropdown, { target: { value: 'Option 2' } });

    // Ensure handleChange has been called with the right value
    expect(handleChange).toHaveBeenCalledWith('Option 2'); // This should pass
  });
});
