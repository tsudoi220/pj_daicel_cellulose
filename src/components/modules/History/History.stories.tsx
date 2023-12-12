import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { History } from "./History";

export default {
  title: "modules/History",
  component: History,
} as ComponentMeta<typeof History>;

// Template Basic
const TemplateBasic: ComponentStory<typeof History> = (args) => (
  <History {...args}></History>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
