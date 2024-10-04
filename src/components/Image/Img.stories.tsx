import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './Img';  // Ensure your path to Img.tsx is correct

export default {
  title: 'Components/Img',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Rounded Image',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
};
