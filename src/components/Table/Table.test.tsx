import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('renders Table with headers and rows', () => {
  const headers = ['Name', 'Age', 'Country'];
  const rows = [
    ['John', '30', 'USA'],
    ['Jane', '25', 'Canada'],
  ];

  render(<Table headers={headers} rows={rows} />);
  
  // Check if headers are rendered
  headers.forEach((header) => {
    expect(screen.getByText(header)).toBeVisible();
  });

  // Check if rows are rendered
  rows.forEach((row) => {
    row.forEach((cell) => {
      expect(screen.getByText(cell)).toBeVisible();
    });
  });
});

test('Table is not interactive when disabled', () => {
  const headers = ['Name', 'Age', 'Country'];
  const rows = [
    ['John', '30', 'USA'],
    ['Jane', '25', 'Canada'],
  ];

  render(<Table headers={headers} rows={rows} disabled={true} />);
  
  const tableElement = screen.getByRole('table');
  
  // Check if the table is visible
  expect(tableElement).toBeVisible();
  
  // Check that the table has reduced opacity
  expect(tableElement).toHaveStyle('opacity: 0.5');
  
  // Check that the table is not interactive
  expect(tableElement).toHaveStyle('pointer-events: none');
});
