import { Meta, StoryObj } from '@storybook/react'; // CSF3 compliant imports
import Label from './Label'; // Importing your Label component

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },        // Control for the label text
    htmlFor: { control: 'text' },     // Control for the `htmlFor` prop
    color: { control: 'color' },      // Control for the label color
    disabled: { control: 'boolean' }, // Control for the disabled state
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// Default state for the Label component
export const Default: Story = {
  args: {
    text: "Lanzema's Input",
    htmlFor: 'name-input',
    color: 'black',
    disabled: false,
  },
};

// Disabled state for the Label component
export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    htmlFor: 'disabled-input',
    color: 'grey',
    disabled: true,
  },
};
