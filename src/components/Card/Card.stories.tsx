import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageSrc: { control: 'text' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a description for the card.',
  imageSrc: 'https://via.placeholder.com/300x200',
};
