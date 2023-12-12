import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { PlayButton } from "./PlayButton";

export default {
  title: "parts/PlayButton",
  component: PlayButton,
} as ComponentMeta<typeof PlayButton>;

// Template
const Template: ComponentStory<typeof PlayButton> = (args) => <PlayButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Concept Movie'
};
