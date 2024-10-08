import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('should render the Card component and display the title', () => {
    render(<Card content="Test Card" backgroundColor="white" />);
    
    const titleElement = screen.getByText(/Test Card/i);
    expect(titleElement).toBeVisible();
  });

  test('should have grey background and not be clickable when disabled', () => {
    render(<Card content="Disabled Card" backgroundColor="grey" disabled={true} />);
    
    const cardElement = screen.getByRole('region');
    expect(cardElement).toHaveStyle('background-color: grey');
    expect(cardElement).toHaveStyle('cursor: not-allowed');
  });
});
