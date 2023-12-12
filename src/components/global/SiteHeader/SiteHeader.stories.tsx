import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { SiteHeader } from "./SiteHeader";

export default {
  title: "global/SiteHeader",
  component: SiteHeader,
} as ComponentMeta<typeof SiteHeader>;

// Template
const Template: ComponentStory<typeof SiteHeader> = (args) => <SiteHeader {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
