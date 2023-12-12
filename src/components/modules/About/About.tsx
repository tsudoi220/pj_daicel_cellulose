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
          <Heading as="h2" classNames="about_heading _about">
            <picture>
              <source srcSet="/cellulose/images/heading_about_sp.png" media="(max-width: 767px)" />
              <img src="/cellulose/images/heading_about_pc.png" alt="「セルロース」とは" />
            </picture>
          </Heading>
          <Text classNames="about_text">セルロースとは、木材などの植物の主成分であり、地球上で最も多く存在する化合物の一つです。自然由来の成分であるため、森林栽培などを通じて人が容易に入手できる素材であり、その柔軟な特性から工業用品から生活用品、また食品まで幅広い用途があります。遥か昔から私たちの身近に存在している素材であり、資源として持続可能な特性からも近年、改めて重要視されています。</Text>
        </div>
      </div>
      <div className="about_box">
        <div className="about_inner">
          <div className="about_panels">
            <div className="about_panel">
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
            <div className="about_panel">
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
            <div className="about_panel">
              <PicturePanel classNames="_about03">
                <p className="picturePanel_label">About 03</p>
                <div className="picturePanel_body">
                  <p className="picturePanel_text">古くは建材から、綿や紙、<br />
                    衣類や健康食品にまで、<br />
                    人類はセルロースを<br className="_sp" />利用してきました。</p>
                  <picture className="picturePanel_pic">
                    <img src="/cellulose/images/picture_panel_pic2.png" alt="" />
                  </picture>
                </div>
              </PicturePanel>
            </div>
          </div>
          <Features />
        </div>
      </div>
      <div className="about_foot">
        <Text classNames="about_text _center _wide _large">セルロースは、<br className="_sp" />微細な繊維状や粉末状、<br className="_sp" />液状に加工したり、<br />
        化学構造をわずかに<br className="_sp" />変えたりすることで、<br className="_sp" />さまざまな中間素材や<br className="_sp" />製品に加工され、<br />
        私たちの日常生活で<br className="_sp" />幅広く使用されています。</Text>
        <picture className="about_pic">
          <img src="/cellulose/images/features_pic0.png" alt="" />
        </picture>
      </div>
    </section>
  );
};


export { About };
