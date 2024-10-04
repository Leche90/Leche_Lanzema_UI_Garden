import React from 'react';
import styled from 'styled-components';

type HeroImageProps = {
  backgroundImage: string;
  height?: string;
  children?: React.ReactNode;
};

const StyledHero = styled.div<HeroImageProps>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  height: ${({ height }) => height || '400px'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const HeroImage: React.FC<HeroImageProps> = ({ backgroundImage, height, children }) => {
  return <StyledHero backgroundImage={backgroundImage} height={height}>{children}</StyledHero>;
};

export default HeroImage;
