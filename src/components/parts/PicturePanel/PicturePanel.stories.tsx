import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { PicturePanel } from "./PicturePanel";

export default {
  title: "parts/PicturePanel",
  component: PicturePanel,
} as ComponentMeta<typeof PicturePanel>;

// Template About01
const TemplateAbout01: ComponentStory<typeof PicturePanel> = (args) => (
  <PicturePanel {...args}>
    <p className="picturePanel_label">About 01</p>
    <div className="picturePanel_body">
      <h3 className="picturePanel_heading">木の構造と3つの成分</h3>
      <picture className="picturePanel_pic">
        <img src="/cellulose/images/picture_panel_pic0.png" alt="" />
      </picture>
    </div>
  </PicturePanel>
)
export const About01 = TemplateAbout01.bind({});
About01.args = {
  classNames: '_about01',
};

// Template About02
const TemplateAbout02: ComponentStory<typeof PicturePanel> = (args) => (
  <PicturePanel {...args}>
    <p className="picturePanel_label">About 02</p>
    <div className="picturePanel_body">
      <h3 className="picturePanel_heading">木材の成分構成比</h3>
      <picture className="picturePanel_pic">
        <img src="/cellulose/images/picture_panel_pic1.png" alt="" />
      </picture>
    </div>
  </PicturePanel>
)
export const About02 = TemplateAbout02.bind({});
About02.args = {
  classNames: '_about02',
};

// Template About03
const TemplateAbout03: ComponentStory<typeof PicturePanel> = (args) => (
  <PicturePanel {...args}>
    <p className="picturePanel_label">About 03</p>
    <div className="picturePanel_body">
      <p className="picturePanel_text">古くは薪から、綿や本、<br />
      衣類や健康食品にまで、<br />
      人類はセルロースを利用してきました。</p>
      <picture className="picturePanel_pic">
        <img src="/cellulose/images/picture_panel_pic2.png" alt="" />
      </picture>
    </div>
  </PicturePanel>
)
export const About03 = TemplateAbout03.bind({});
About03.args = {
  classNames: '_about03',
};

// Template Circulation
const TemplateCirculation: ComponentStory<typeof PicturePanel> = (args) => (
  <PicturePanel {...args}>
    <div className="picturePanel_body">
      <h3 className="picturePanel_heading">サステナブル素材セルロースの循環</h3>
      <picture className="picturePanel_pic">
        <img src="/cellulose/images/picture_panel_pic3.png" alt="" />
      </picture>
    </div>
  </PicturePanel>
)
export const Circulation = TemplateCirculation.bind({});
Circulation.args = {
  classNames: '_circulation',
};
