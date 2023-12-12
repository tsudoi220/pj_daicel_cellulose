import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { SiteFooter } from "./SiteFooter";

export default {
  title: "global/SiteFooter",
  component: SiteFooter,
} as ComponentMeta<typeof SiteFooter>;

// Template
const Template: ComponentStory<typeof SiteFooter> = (args) => <SiteFooter {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
