import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Concept } from "./Concept";

export default {
  title: "modules/Concept",
  component: Concept,
} as ComponentMeta<typeof Concept>;

// Template Basic
const TemplateBasic: ComponentStory<typeof Concept> = (args) => (
  <Concept {...args}></Concept>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
