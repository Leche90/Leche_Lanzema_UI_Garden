import styled from 'styled-components';

interface CardProps {
  content: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledCard = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  padding: 16px;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; // Prevent clicking when disabled
`;

const Card: React.FC<CardProps> = ({ content, backgroundColor, disabled }) => (
  <StyledCard backgroundColor={backgroundColor} disabled={disabled} role="region">
    {content}
  </StyledCard>
);

export default Card;
