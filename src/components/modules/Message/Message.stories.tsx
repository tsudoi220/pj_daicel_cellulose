import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Message } from "./Message";

export default {
  title: "modules/Message",
  component: Message,
} as ComponentMeta<typeof Message>;

// Template Basic
const TemplateBasic: ComponentStory<typeof Message> = (args) => (
  <Message {...args}></Message>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
