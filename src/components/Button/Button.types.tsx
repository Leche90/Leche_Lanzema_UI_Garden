export interface ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;  // Add backgroundColor to the type
  onClick?: () => void;  // Keep the onClick handler if needed
}
