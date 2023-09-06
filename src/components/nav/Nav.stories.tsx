import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./Nav";

const meta: Meta<typeof Nav> = {
  component: Nav,
  title: "Nav",
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Example: Story = {};
