import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders HeroImage with the correct src and alt attributes', () => {
  render(<HeroImage src="https://via.placeholder.com/800x400" alt="Test Image" />);
  const imageElement = screen.getByAltText('Test Image');
  expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/800x400');
});

test('renders with disabled state', () => {
  render(<HeroImage src="https://via.placeholder.com/800x400" alt="Test Image" disabled />);
  const container = screen.getByRole('img').parentElement;
  expect(container).toHaveStyle({ opacity: '0.5' });
  expect(container).toHaveStyle({ cursor: 'not-allowed' });
});
