import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProductsTable } from "./ProductsTable";

export default {
  title: "modules/ProductsTable",
  component: ProductsTable,
} as ComponentMeta<typeof ProductsTable>;

// Template Basic
const TemplateBasic: ComponentStory<typeof ProductsTable> = (args) => (
  <ProductsTable {...args}></ProductsTable>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
