import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoryHead } from "./StoryHead";

export default {
  title: "modules/StoryHead",
  component: StoryHead,
} as ComponentMeta<typeof StoryHead>;

// Template Basic
const TemplateBasic: ComponentStory<typeof StoryHead> = (args) => (
  <StoryHead {...args}></StoryHead>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
