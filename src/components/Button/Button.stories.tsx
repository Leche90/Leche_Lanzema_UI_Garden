import React from 'react';
import { Meta, StoryFn } from '@storybook/react'; // Importing Meta and StoryFn types from Storybook
import Button from './Button'; // Importing the Button component
import { ButtonProps } from './Button.types'; // Importing ButtonProps type for proper typing

// Default export to define the component’s metadata for Storybook
export default {
  title: 'Components/Button', // The title for this component in the Storybook sidebar
  component: Button, // The actual component being rendered
  argTypes: {
    // 'argTypes' allows Storybook to modify these props through its UI controls
    disabled: { control: 'boolean' }, // Adds a boolean control for 'disabled' prop in Storybook
    label: { control: 'text' }, // Adds a text control for 'label' prop in Storybook
  },
} as Meta<typeof Button>; // The metadata is typed as a Meta object for the Button component

// Template defines how the component is rendered with arguments (args) passed from Storybook
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Defining the Default story for the Button component
export const Default = Template.bind({}); // Create a copy of the template for the Default state
Default.args = {
  label: 'Click Me', // Default label for this story
  disabled: false, // Default disabled state is set to false
};

// Defining the Disabled story for the Button component
export const Disabled = Template.bind({}); // Create a copy of the template for the Disabled state
Disabled.args = {
  label: 'Disabled', // Label for the disabled button
  disabled: true, // The button is disabled in this story
};
