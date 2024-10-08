import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Text from "./Text"; // Import the Text component

export default {
  title: "Components/Text", // Storybook sidebar label
  component: Text,
} as Meta<typeof Text>;

export const Default = {
  args:{
    content:"Sample text working effectively - Lanzema", // Default content for the Text component
    color:"black", // Default color
  },
};

// Disabled Text Story
export const DisabledText = {
  args: {
    content: "This text is disabled", // Content for the disabled text
    color: "grey", // Text will appear grey
    disabled: true, // Disabled state
  },
};
