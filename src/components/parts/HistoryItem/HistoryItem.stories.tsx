import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { HistoryItem } from "./HistoryItem";

export default {
  title: "parts/HistoryItem",
  component: HistoryItem,
} as ComponentMeta<typeof HistoryItem>;

// Template
const Template: ComponentStory<typeof HistoryItem> = (args) => <HistoryItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  images: {
    src: "/cellulose/images/histroy_pic0.png",
    alt: '',
  },
  year: '1919',
  heading: `大日本セルロイド株式会社<br />（のちのダイセル）の誕生`,
  text: `当時世界中に需要があった植物由来の人工プラスチック「セルロイド」。そのセルロイド製造の競争が激化する中、日本国内８社のメーカーが原料であるクスノキの木の乱獲を防ぎ、未来を持続可能にするために合併しました。`
};