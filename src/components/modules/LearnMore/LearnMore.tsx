import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Heading } from "~/components/parts/Heading";
import "./LearnMore.scss";

type LearnMoreProps = {
  type: "home"
} & ComponentProp;

const LearnMore = ({
  type,
  classNames,
}: LearnMoreProps): JSX.Element | null => {
  return (
    <aside className={"learnMore" + (classNames ? ` ${classNames}` : "")} >
      <div className="learnMore_inner">
        <Heading as="h2" classNames="learnMore_heading _learnMore">
          <picture>
            <source srcSet="/cellulose/images/heading_learn_more_sp.svg" media="(max-width: 767px)" />
            <img src="/cellulose/images/heading_learn_more_pc.svg" alt="ダイセルのセルロースについてもっと知る" />
          </picture>
        </Heading>
        <ul className="learnMore_list">
          {
            type !== "home" && (
              <li className="learnMore_item">
                <a href="#" className="learnMore_link">
                  <picture className="learnMore_pic">
                    <img src="/cellulose/images/learn_more_pic0.jpg" alt="" />
                  </picture>
                  <p className="learnMore_title">
                    <span className="learnMore_title-arrow"></span>
                    <span className="learnMore_title-label">ダイセルのセルロース</span>
                  </p>
                  <p className="learnMore_text">説明文が入ります。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
                </a>
              </li>
            )
          }
          <li className="learnMore_item">
            <a href="#" className="learnMore_link">
              <picture className="learnMore_pic">
                <img src="/cellulose/images/learn_more_pic0.jpg" alt="" />
              </picture>
              <p className="learnMore_title">
                <span className="learnMore_title-arrow"></span>
                <span className="learnMore_title-label"><span>ダイセルのセルロース</span>製品</span>
              </p>
              <p className="learnMore_text">説明文が入ります。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
            </a>
          </li>
          <li className="learnMore_item">
            <a href="#" className="learnMore_link">
              <picture className="learnMore_pic">
                <img src="/cellulose/images/learn_more_pic1.jpg" alt="" />
              </picture>
              <p className="learnMore_title">
                <span className="learnMore_title-arrow"></span>
                <span className="learnMore_title-label"><span>ダイセルのセルロース</span>歴史と未来</span>
              </p>
              <p className="learnMore_text">説明文が入ります。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};


export { LearnMore };
