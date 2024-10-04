import React from 'react';
import styled from 'styled-components';

// Styled components for table
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th, td {
    border: 1px solid black;
    padding: 8px;
  }

  tfoot {
    font-weight: bold;
  }
`;

// Table Components

// Table Header Component
export const TableHeader: React.FC<{ headers: string[] }> = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((header, index) => (
        <th key={index}>{header}</th>
      ))}
    </tr>
  </thead>
);

// Table Row Component
export const TableRow: React.FC<{ row: string[] }> = ({ row }) => (
  <tr>
    {row.map((cell, index) => (
      <TableCell key={index}>{cell}</TableCell>  // Using TableCell component
    ))}
  </tr>
);

// Table Cell Component
// This is the part you're asking about: the TableCell component.
export const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <td>{children}</td>
);

// Table Footer Component
export const TableFooter: React.FC<{ footer: string[] }> = ({ footer }) => (
  <tfoot>
    <tr>
      {footer.map((footItem, index) => (
        <td key={index}>{footItem}</td>
      ))}
    </tr>
  </tfoot>
);

// Main Table Component
const Table: React.FC<{ headers: string[], rows: string[][], footer?: string[] }> = ({ headers, rows, footer }) => {
  return (
    <StyledTable>
      <TableHeader headers={headers} />
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </tbody>
      {footer && <TableFooter footer={footer} />}
    </StyledTable>
  );
};

export default Table;
