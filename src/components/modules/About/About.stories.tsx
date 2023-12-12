import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { About } from "./About";

export default {
  title: "modules/About",
  component: About,
} as ComponentMeta<typeof About>;

// Template Basic
const TemplateBasic: ComponentStory<typeof About> = (args) => (
  <About {...args}></About>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
