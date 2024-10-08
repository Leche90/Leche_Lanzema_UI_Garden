import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card"; // Import the CardProps type

// Default export defining metadata for the Card component in Storybook
export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageSrc: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Card>;

export const Default = {
  args:{
    title:"Lanzema Leche",
    description:"This card is a property of TD Bank",
    imageSrc:"https://via.placeholder.com/300x200",
    backgroundColor:"white",
    disabled:false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Card",
    description: "This card is disabled and cannot be interacted with.",
    imageSrc: "https://via.placeholder.com/300x200",
    backgroundColor: "grey",
    disabled: true,
  },
};
