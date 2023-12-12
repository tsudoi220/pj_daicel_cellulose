import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { LearnMore } from "./LearnMore";

export default {
  title: "modules/LearnMore",
  component: LearnMore,
} as ComponentMeta<typeof LearnMore>;

// Template Basic
const TemplateBasic: ComponentStory<typeof LearnMore> = (args) => (
  <LearnMore {...args}></LearnMore>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
