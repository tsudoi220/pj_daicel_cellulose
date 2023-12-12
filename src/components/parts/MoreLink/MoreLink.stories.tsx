import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { MoreLink } from "./MoreLink";

export default {
  title: "parts/MoreLink",
  component: MoreLink,
} as ComponentMeta<typeof MoreLink>;

// Template
const Template: ComponentStory<typeof MoreLink> = (args) => <MoreLink {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  link: {
    href: "#",
    label: "もっと詳しく",
  }
};
