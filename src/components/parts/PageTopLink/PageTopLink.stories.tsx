import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageTopLink } from "./PageTopLink";

export default {
  title: "parts/PageTopLink",
  component: PageTopLink,
} as ComponentMeta<typeof PageTopLink>;

// Template
const Template: ComponentStory<typeof PageTopLink> = (args) => <PageTopLink {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};
