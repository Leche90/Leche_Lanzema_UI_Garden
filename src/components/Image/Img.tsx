import React from 'react';
import styled from 'styled-components';

type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  borderRadius?: string;
};

const StyledImage = styled.img<ImageProps>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
`;

const Image: React.FC<ImageProps> = ({ src, alt, width, height, borderRadius }) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} />;
};

export default Image;
