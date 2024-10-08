import React from 'react';
import styled from 'styled-components';

// Styled components for table
const StyledTable = styled.table<{ striped?: boolean; disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th, td {
    border: 1px solid black;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: ${({ striped }) => (striped ? '#f2f2f2' : 'transparent')}; // Striped rows for even rows
  }

  tfoot {
    font-weight: bold;
  }

  ${({ disabled }) => disabled && `
    pointer-events: none;
    opacity: 0.5;
  `}
`;

type TableProps = {
  headers: string[];
  rows: string[][];
  footer?: string[];
  striped?: boolean;
  disabled?: boolean;
};

const Table: React.FC<TableProps> = ({ headers, rows, footer, striped = false, disabled = false }) => {
  return (
    <StyledTable striped={striped ? true : undefined} disabled={disabled}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, i) => (
              <td key={i}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr>
            {footer.map((footItem, index) => (
              <td key={index}>{footItem}</td>
            ))}
          </tr>
        </tfoot>
      )}
    </StyledTable>
  );
};

export default Table;
