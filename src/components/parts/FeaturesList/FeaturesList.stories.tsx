import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { FeaturesList } from "./FeaturesList";

export default {
  title: "parts/FeaturesList",
  component: FeaturesList,
} as ComponentMeta<typeof FeaturesList>;

// Template Basic
const TemplateBasic: ComponentStory<typeof FeaturesList> = (args) => (
  <FeaturesList {...args}></FeaturesList>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
