import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Movie } from "./Movie";

export default {
  title: "modules/Movie",
  component: Movie,
} as ComponentMeta<typeof Movie>;

// Template Basic
const TemplateBasic: ComponentStory<typeof Movie> = (args) => (
  <Movie {...args}></Movie>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};
