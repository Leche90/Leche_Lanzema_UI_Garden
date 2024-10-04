import React from 'react';
import styled from 'styled-components';

type TextProps = {
  content: string;
  color?: string;
};

const StyledText = styled.p<TextProps>`
  font-size: 16px;
  color: ${({ color }) => color || 'black'};
`;

const Text: React.FC<TextProps> = ({ content, color }) => {
  return <StyledText color={color}>{content}</StyledText>;
};

export default Text;
