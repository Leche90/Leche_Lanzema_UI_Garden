import React from 'react';
import styled from 'styled-components';

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledSelect = styled.select<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; // Prevent interaction when disabled
`;

const Dropdown: React.FC<DropdownProps> = ({ value, onChange, options, backgroundColor, disabled }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!disabled) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledSelect value={value} onChange={handleChange} backgroundColor={backgroundColor} disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
