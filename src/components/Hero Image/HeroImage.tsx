import React from 'react';
import styled from 'styled-components';

// Define HeroImageProps with optional backgroundColor and disabled properties
type HeroImageProps = {
  src: string;
  alt: string;
  backgroundColor?: string; // Optional background color
  disabled?: boolean;       // Optional disabled state
};

// Styled HeroImage with backgroundColor and disabled support
const StyledHeroImage = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  width: 100%;
  height: 400px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, backgroundColor, disabled = false }) => {
  return (
    <StyledHeroImage backgroundColor={backgroundColor} disabled={disabled}>
      <Img src={src} alt={alt} />
    </StyledHeroImage>
  );
};

export default HeroImage;
