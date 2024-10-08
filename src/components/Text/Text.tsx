import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types'; // Import the props type

// StyledText component styled based on the color and disabled props
const StyledText = styled.p<{ color?: string; disabled?: boolean }>`
  font-size: 16px;
  color: ${({ color, disabled }) => (disabled ? 'grey' : color || 'black')}; // Grey out if disabled, else apply color
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)}; // Lower opacity when disabled
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; // Disable pointer events when disabled
`;

// Main Text component that accepts content, color, and disabled props
const Text: React.FC<TextProps> = ({ content, color, disabled }) => {
  return <StyledText color={color} disabled={disabled}>{content}</StyledText>;
};

export default Text;
