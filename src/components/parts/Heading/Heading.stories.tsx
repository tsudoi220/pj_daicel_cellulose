import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "parts/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

// Template Basic
const TemplateBasic: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>
    <picture>
      <source srcSet="/cellulose/images/heading0_sp.png" media="(max-width: 767px)" />
      <img src="/cellulose/images/heading0_pc.png" alt="" />
    </picture>
  </Heading>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
  as: 'h1',
  classNames: '_message',
};
