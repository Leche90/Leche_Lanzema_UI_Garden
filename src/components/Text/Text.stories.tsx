import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './Text';  // Import the Text component

export default {
  title: 'Components/Text',  // Storybook sidebar label
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// Default story for the Text component
export const Default = Template.bind({});
Default.args = {
  content: 'This is a sample text',  // Default content for the Text component
  color: 'black',  // Default color
};

// Another example of the Text component with a different color
export const CustomColor = Template.bind({});
CustomColor.args = {
  content: 'This is custom colored text',
  color: 'red',  // Custom color for this example
};
