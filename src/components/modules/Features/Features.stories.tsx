import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Features } from "./Features";

export default {
  title: "modules/Features",
  component: Features,
} as ComponentMeta<typeof Features>;

// Template Basic
const TemplateBasic: ComponentStory<typeof Features> = (args) => (
  <Features {...args}></Features>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
