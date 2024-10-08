import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown'; // Importing the Dropdown component

// CSF3-compliant Meta configuration for Storybook
const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: { type: 'object' }, // Control for the dropdown options
      description: 'Dropdown options',
    },
    backgroundColor: {
      control: { type: 'color' }, // Control for background color
      description: 'Background color of the dropdown',
    },
    disabled: {
      control: { type: 'boolean' }, // Control for disabled state
      description: 'Disable the dropdown',
    },
  },
};

export default meta;

// Default story (CSF3 Compliant)
export const Default: StoryObj<typeof Dropdown> = {
  args: {
    options: ["PHP", "TypeScript", "Python"], // Default options
    backgroundColor: 'white', // Default background color
    disabled: false, // Default is not disabled
  },
};

// Disabled story (CSF3 Compliant)
export const Disabled: StoryObj<typeof Dropdown> = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    backgroundColor: "#a5a5a5", // Grey background for disabled state
    disabled: true, // Dropdown is disabled
  },
};
