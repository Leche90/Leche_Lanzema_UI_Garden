import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeroImage from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as ComponentMeta<typeof HeroImage>;

const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundImage: 'https://via.placeholder.com/1200x400',
  children: 'Welcome to the Hero Section!',
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  backgroundImage: 'https://via.placeholder.com/1200x400',
  height: '500px',
  children: 'This is a Hero Image with custom height',
};
