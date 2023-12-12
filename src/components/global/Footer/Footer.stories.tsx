import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer } from "./Footer";

export default {
  title: "global/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

// Template
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
