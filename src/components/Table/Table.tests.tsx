import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('renders Table with header', () => {
  render(
    <Table
      headers={['Name', 'Age']}
      rows={[['John', '30']]}
    />
  );
  const headerElement = screen.getByText(/Name/i);
  expect(headerElement).toBeVisible();
});

test('renders Table footer', () => {
  render(
    <Table
      headers={['Name', 'Age']}
      rows={[['John', '30']]}
      footer={['Total', '1']}
    />
  );
  const footerElement = screen.getByText(/Total/i);
  expect(footerElement).toBeVisible();
});
