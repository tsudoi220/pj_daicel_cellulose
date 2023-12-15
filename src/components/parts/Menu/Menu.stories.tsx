import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Menu } from "./Menu";

export default {
  title: "parts/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

// Template Basic
const TemplateBasic: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}></Menu>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
  isHome: true,
  isStory: false,
  isProducts: false,
};
