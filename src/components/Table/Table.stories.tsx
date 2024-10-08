import { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { TableProps } from './Table';  // Importing the TableProps type from your component

const meta: Meta<TableProps> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    headers: { control: 'object' },  // Control for headers
    rows: { control: 'object' },     // Control for rows
    footer: { control: 'object' },   // Control for footer
    striped: { control: 'boolean' }, // Control for striped rows
    disabled: { control: 'boolean' } // Control for disabled state
  },
};

export default meta;

type Story = StoryObj<TableProps>;

// Sample data for the table
const sampleData = [
  ['Lanzema Leche', 'Full-Stack Web Dev', 'RRC Polytech'],
  ['Samuel Jackson', 'Graphic Design', 'MITT'],
];

const headers = ['Name', 'Course', 'School'];

// Default table story
export const Default: Story = {
  args: {
    headers,
    rows: sampleData,
    striped: false,
    disabled: false,
  },
};

// Striped and disabled table story
export const StripedDisabled: Story = {
  args: {
    headers,
    rows: sampleData,
    striped: true,
    disabled: true,
  },
};
