import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProductsHead } from "./ProductsHead";

export default {
  title: "modules/ProductsHead",
  component: ProductsHead,
} as ComponentMeta<typeof ProductsHead>;

// Template Basic
const TemplateBasic: ComponentStory<typeof ProductsHead> = (args) => (
  <ProductsHead {...args}></ProductsHead>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
