import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

// Default export to define the component’s metadata for Storybook
export default {
  title: "Components/Button", // The title for this component in the Storybook sidebar
  component: Button, // The actual component being rendered
  argTypes: {
    // 'argTypes' allows Storybook to modify these props through its UI controls
    disabled: { control: "boolean" }, // Adds a boolean control for 'disabled' prop in Storybook
    label: { control: "text" }, // Adds a text control for 'label' prop in Storybook
    backgroundColor: { control: "color" }, // Adds a color control for background color
  },
} as Meta<typeof Button>;

export const Default = {
  args: {
    label: "Click Me",
    disabled: false,
    backgroundColor: "#ff008c", // Default background color
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
    backgroundColor: "grey", // Background color for disabled state
  },
};
