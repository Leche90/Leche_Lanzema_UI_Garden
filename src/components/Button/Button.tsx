import React from 'react';
import styled from 'styled-components';

// Define ButtonProps
type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

// Styled Button without explicit generic types for styled-components
const StyledButton = styled.button`
  background-color: ${({ disabled }: { disabled?: boolean }) => (disabled ? 'grey' : 'blue')};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }: { disabled?: boolean }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }: { disabled?: boolean }) => (disabled ? 0.5 : 1)};
`;

const Button: React.FC<ButtonProps> = ({ label, disabled = false, ...rest }) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;
