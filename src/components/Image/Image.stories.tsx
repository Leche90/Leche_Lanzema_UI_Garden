import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Image from './Image'; // Importing the Image component

// CSF3-compliant Meta configuration for Storybook
const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: {
      control: { type: 'text' }, // Control for image source
      description: 'Source URL of the image',
    },
    alt: {
      control: { type: 'text' }, // Control for alt text
      description: 'Alt text for the image',
    },
    backgroundColor: {
      control: { type: 'color' }, // Control for background color
      description: 'Background color of the image container',
    },
    disabled: {
      control: { type: 'boolean' }, // Control for disabled state
      description: 'Disables the image and dims it',
    },
  },
};

export default meta;

// Default story (CSF3 Compliant)
export const Default: StoryObj<typeof Image> = {
  args: {
    src: 'https://via.placeholder.com/300x200', // Default image source
    alt: 'Placeholder Image', // Default alt text
    backgroundColor: 'transparent', // Default background color
    disabled: false, // Default is not disabled
  },
};

// Disabled story (CSF3 Compliant)
export const Disabled: StoryObj<typeof Image> = {
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Disabled Image',
    backgroundColor: 'grey', // Grey background for disabled state
    disabled: true, // Image is disabled
  },
};
