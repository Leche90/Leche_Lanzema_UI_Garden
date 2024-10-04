import React from 'react';
import styled from 'styled-components';

type DropdownProps = {
  options: string[];
  onChange: (value: string) => void;
  value: string;
};

const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, value }) => {
  return (
    <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
