import React from 'react';
import { Meta, StoryFn } from '@storybook/react'; // Correct replacements for newer versions of Storybook
import Label from './Label'; // Importing your Label component
import { LabelProps } from './Label.types'; // Importing the types for props

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' }, // Control for the label text
    color: { control: 'color' }, // Control for the label color
    disabled: { control: 'boolean' }, // Control for the disabled state
  },
} as Meta<typeof Label>; // Use Meta instead of ComponentMeta

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Name',
  htmlFor: 'name-input',
  color: 'black',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  htmlFor: 'disabled-input',
  color: 'grey',
  disabled: true,
};
