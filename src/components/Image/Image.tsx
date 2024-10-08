import React from 'react';
import styled from 'styled-components';

// Define ImageProps with optional backgroundColor and disabled properties
type ImageProps = {
  src: string;
  alt: string;
  backgroundColor?: string; // Optional background color
  disabled?: boolean;       // Optional disabled state
};

// Styled Image with backgroundColor and disabled support
const StyledImage = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  display: inline-block;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Image: React.FC<ImageProps> = ({ src, alt, backgroundColor, disabled = false }) => {
  return (
    <StyledImage backgroundColor={backgroundColor} disabled={disabled}>
      <Img src={src} alt={alt} />
    </StyledImage>
  );
};

export default Image;
