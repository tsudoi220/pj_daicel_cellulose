import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { ValueChain } from "./ValueChain";

export default {
  title: "modules/ValueChain",
  component: ValueChain,
} as ComponentMeta<typeof ValueChain>;

// Template Basic
const TemplateBasic: ComponentStory<typeof ValueChain> = (args) => (
  <ValueChain {...args}></ValueChain>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
