import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from './Image';

test('renders an image with the correct src and alt text', () => {
  render(<Image src="test.jpg" alt="Test Image" />);
  const image = screen.getByAltText('Test Image');
  expect(image).toHaveAttribute('src', 'test.jpg');
});
