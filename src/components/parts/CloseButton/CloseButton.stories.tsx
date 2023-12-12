import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { CloseButton } from "./CloseButton";

export default {
  title: "parts/CloseButton",
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

// Template
const Template: ComponentStory<typeof CloseButton> = (args) => <CloseButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};