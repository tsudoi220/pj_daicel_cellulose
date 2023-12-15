import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Heading } from "~/components/parts/Heading";
import { Text } from "~/components/parts/Text";
import { PicturePanel } from "~/components/parts/PicturePanel";
import { Features } from "~/components/modules/Features";
import { ZoomButton } from "~/components/parts/ZoomButton";
import "./About.scss";

type AboutProps = ComponentProp;

const About = ({
  classNames,
}: AboutProps): JSX.Element | null => {
  return (
    <section className={"about" + (classNames ? ` ${classNames}` : "")} >
      <div className="about_head">
        <div className="about_inner">
          <Heading as="h2" classNames="about_heading _about" data-scroll-animation>
            <span className="heading_sub"><span className="heading_sub-label">About Cellulose</span></span>
            <span className="heading_label"><span className="heading_label-narrow">「セルロース」</span>とは</span>
          </Heading>
          <Text classNames="about_text" data-scroll-animation>セルロースとは、木材等の植物の主成分であり地球上に最も多く存在する化合物の一つです。自然由来の成分だから森林栽培などで人が容易に入手できる素材であり、その柔軟な特性から工業用品から身近な生活用品、また食品まで幅広い用途があり、遥か昔から身近な生活に存在している素材です。</Text>
        </div>
      </div>
      <div className="about_box">
        <div className="about_inner">
          <div className="about_panels">
            <div className="about_panel" data-scroll-animation>
              <PicturePanel classNames="_about01">
                <p className="picturePanel_label">About 01</p>
                <div className="picturePanel_body">
                  <h3 className="picturePanel_heading">木の構造と3つの成分</h3>
                  <picture className="picturePanel_pic">
                    <img src="/cellulose/images/picture_panel_pic0.png" alt="" />
                  </picture>
                </div>
                <ZoomButton classNames="about_zoom-button" data-modal-button="open" aria-controls="modal-about-01" aria-expanded="false" />
              </PicturePanel>
            </div>
            <div className="about_panel" data-scroll-animation>
              <PicturePanel classNames="_about02">
                <p className="picturePanel_label">About 02</p>
                <div className="picturePanel_body">
                  <h3 className="picturePanel_heading">木材の成分構成比</h3>
                  <picture className="picturePanel_pic">
                    <img src="/cellulose/images/picture_panel_pic1.png" alt="" />
                  </picture>
                </div>
              </PicturePanel>
            </div>
            <div className="about_panel" data-scroll-animation>
              <PicturePanel classNames="_about03">
                <p className="picturePanel_label">About 03</p>
                <div className="picturePanel_body">
                  <p className="picturePanel_text">古くは建材から、綿や紙、<br />
                    衣類や健康食品にまで、<br />
                    人類はセルロースを<br className="_sp" />利用してきました。</p>
                  <picture className="picturePanel_pic">
                    <source srcSet="/cellulose/images/picture_panel_pic2_sp.png" media="(max-width: 767px)" />
                    <img src="/cellulose/images/picture_panel_pic2_pc.png" alt="" />
                  </picture>
                </div>
              </PicturePanel>
            </div>
          </div>
          <Features />
        </div>
      </div>
      <div className="about_foot">
        <Text classNames="about_text _center _wide _large" data-scroll-animation>
          このセルロースを<br className="_sp" />
          微細な繊維状にしたり、<br className="_sp" />
          きめ細かな粉末状にしたり、<br />
          液状にしたり、<br className="_sp" />
          化学構造を少し変えたりすることで<br className="_sp" />
          工業用材料にして、<br />
          わたしたちの暮らしで<br className="_sp" />
          多種多様に使われています。
        </Text>
        <picture className="about_pic">
          <img src="/cellulose/images/features_pic0.png" alt="" data-scroll-animation />
        </picture>
      </div>
    </section>
  );
};

export { About };
