// Table.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Age', 'Country'],
  rows: [
    ['John', '30', 'USA'],
    ['Jane', '25', 'Canada'],
  ],
  footer: ['Total', '2', 'Countries']
};
