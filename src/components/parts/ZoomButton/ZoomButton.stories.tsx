import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { ZoomButton } from "./ZoomButton";

export default {
  title: "parts/ZoomButton",
  component: ZoomButton,
} as ComponentMeta<typeof ZoomButton>;

// Template
const Template: ComponentStory<typeof ZoomButton> = (args) => <ZoomButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};
