import React from 'react';
import styled from 'styled-components';

type RadioButtonProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
};

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StyledRadioButton = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, label, checked, onChange }) => {
  return (
    <StyledLabel>
      <StyledRadioButton
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
