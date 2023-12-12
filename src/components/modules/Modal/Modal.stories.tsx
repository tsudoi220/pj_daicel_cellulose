import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";

export default {
  title: "modules/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// Template
const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}></Modal>
);

export const Basic = Template.bind({});
Basic.args = {
  classNames: ""
};
