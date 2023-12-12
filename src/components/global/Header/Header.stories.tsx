import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "global/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

// Template
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Movie = Template.bind({});
Movie.args = {
  classNames: '',
  heading: 'たとえば、<br />太陽光だけでCO₂を半永久的に分解し、原料に変え続ける。<br />それがダイセルの「ナノダイヤソリューション」。',
  video: {
    src: '/cellulose/movie/movie-0.mp4',
  }
};

export const Picture = Template.bind({});
Picture.args = {
  classNames: '',
  heading: 'たとえば、<br />太陽光だけでCO₂を半永久的に分解し、原料に変え続ける。<br />それがダイセルの「ナノダイヤソリューション」。',
  picture: {
    pc: '/cellulose/images/kv-0_pc.jpg',
    sp: '/cellulose/images/kv-0_sp.jpg',
    alt: '',
  }
};