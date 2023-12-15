import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProductsContents } from "./ProductsContents";

export default {
  title: "modules/ProductsContents",
  component: ProductsContents,
} as ComponentMeta<typeof ProductsContents>;

// Template Basic
const TemplateBasic: ComponentStory<typeof ProductsContents> = (args) => (
  <ProductsContents {...args}></ProductsContents>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
