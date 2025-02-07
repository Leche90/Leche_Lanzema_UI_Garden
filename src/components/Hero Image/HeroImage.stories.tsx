import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage'; // Importing the HeroImage component

// CSF3-compliant Meta configuration for Storybook
const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: {
      control: { type: 'text' }, // Control for image source
      description: 'Source URL of the HeroImage',
    },
    alt: {
      control: { type: 'text' }, // Control for alt text
      description: 'Alt text for the image',
    },
    backgroundColor: {
      control: { type: 'color' }, // Control for background color
      description: 'Background color of the HeroImage container',
    },
    disabled: {
      control: { type: 'boolean' }, // Control for disabled state
      description: 'Disables the HeroImage and dims it',
    },
  },
};

export default meta;

// Default story (CSF3 Compliant)
export const Default: StoryObj<typeof HeroImage> = {
  args: {
    src: 'https://via.placeholder.com/800x400', // Default image source
    alt: 'Placeholder Image', // Default alt text
    backgroundColor: "#077621", // Default background color
    disabled: false, // Default is not disabled
  },
};

// Disabled story (CSF3 Compliant)
export const Disabled: StoryObj<typeof HeroImage> = {
  args: {
    src: 'https://via.placeholder.com/800x400',
    alt: 'Disabled Image',
    backgroundColor: 'grey', // Grey background for disabled state
    disabled: true, // HeroImage is disabled
  },
};
