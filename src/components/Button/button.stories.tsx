import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./button";

// This tells Storybook how to list your stories and provide information
export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// With named export we define component's story
export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

// Define default arguments for the Default story
Default.args = {
  size: "h-10 w-56",
  content: "Primary",
};
