import React from 'react';
import styled from 'styled-components';

// Define ButtonProps
interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  backgroundColor?: string;  // Add backgroundColor prop
}

// Styled Button using ButtonProps and defining props explicitly for TypeScript
const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ disabled, backgroundColor }) => (disabled ? 'grey' : backgroundColor || 'blue')};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

// Button component that spreads rest props to StyledButton
const Button: React.FC<ButtonProps> = ({ label, disabled = false, backgroundColor, ...rest }) => {
  return (
    <StyledButton disabled={disabled} backgroundColor={backgroundColor} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;
