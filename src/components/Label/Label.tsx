import React from 'react';

// Define the props interface, ensuring 'color' is included
export interface LabelProps {
  text: string;
  htmlFor?: string;
  color?: string; // Add color to the LabelProps interface
  disabled?: boolean;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor, color = 'black', disabled = false }) => {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        color: disabled ? 'grey' : color, // Use the color prop if not disabled
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {text}
    </label>
  );
};

export default Label;
