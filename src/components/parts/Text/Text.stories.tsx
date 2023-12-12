import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "parts/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

// Template Basic
const TemplateBasic: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    説明文が入ります。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。
  </Text>
)

export const Basic = TemplateBasic.bind({});
Basic.args = {
};

// Template Large
const TemplateLarge: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    説明文が入ります。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。
  </Text>
)

export const Large = TemplateLarge.bind({});
Large.args = {
  classNames: '_large'
};

// Template Medium
const TemplateMedium: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    セルロースとは、木材等の植物の主成分であり地球上に最も多く存在する化合物の一つです。自然由来の成分だから森林栽培などで人が容易に入手できる素材であり、その柔軟な特性から工業用品から身近な生活用品、また食品まで幅広い用途があり、遥か昔から身近な生活に存在している素材です。
  </Text>
)

export const Medium = TemplateMedium.bind({});
Medium.args = {
  classNames: '_medium'
};

// Template Center
const TemplateCenter: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    このセルロースを微細な繊維状にしたり、きめ細かな粉末状にしたり、液状にしたり、
    <br />化学構造を少し変えたりすることで工業用材料にして、
    <br />わたしたちの暮らしで多種多様に使われています。
  </Text>
)

export const Center = TemplateCenter.bind({});
Center.args = {
  classNames: '_center'
};

// Template Wide
const TemplateWide: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    このセルロースを微細な繊維状にしたり、きめ細かな粉末状にしたり、液状にしたり、
    <br />化学構造を少し変えたりすることで工業用材料にして、
    <br />わたしたちの暮らしで多種多様に使われています。
  </Text>
)

export const Wide = TemplateWide.bind({});
Wide.args = {
  classNames: '_wide'
};