import React from 'react';
import styled from 'styled-components';

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <StyledCard>
      <CardImage src={imageSrc} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardBody>
    </StyledCard>
  );
};

export default Card;
