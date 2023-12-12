import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Heading } from "~/components/parts/Heading";
import { Text } from "~/components/parts/Text";
import { MoreLink } from "~/components/parts/MoreLink";
import "./Concept.scss";

type ConceptProps = ComponentProp;

const Concept = ({
  classNames,
}: ConceptProps): JSX.Element | null => {
  return (
    <section className={"concept" + (classNames ? ` ${classNames}` : "")} >
      <div className="concept_inner">
        <Heading as="h2" classNames="concept_heading _concept">
          <picture>
            <source srcSet="/cellulose/images/heading_concept_sp.png" media="(max-width: 767px)" />
            <img src="/cellulose/images/heading_concept_pc.png" alt="ダイセル単独の歩みから、価値共創へ" />
          </picture>
        </Heading>
        <picture className="concept_pic">
          <img src="/cellulose/images/concept_pic.png" alt="" />
        </picture>
        <div className="concept_contents">
          <h3 className="concept_heading _sub">
            バイオマス<br />
            バリューチェーン<br />
            構想
          </h3>
          <div className="concept_body">
            <Text classNames="concept_text _narrow _normal">ダイセルは創業以来、植物由来の化学素材であるセルロースと向き合ってきました。<br />
            100年以上をかけて磨いた技術で、そのサステナブルな特徴を最大限に引き出します。</Text>
            <Text classNames="concept_text _narrow _normal">そんな私たちが提唱する「バイオマスバリューチェーン」は、日本の国土の７割を閉める森林を石油化学原料に代替として活用するという、当社のセルロースを扱う技術を軸として、持続可能な循環型の産業構造をつくる構想です。</Text>
            <Text classNames="concept_text _narrow _normal">化学産業だけでなく、幅広く一次産業・二次産業も連関し、地域経済を活性化させるこの構想の実現には、多くの共感と技術共有による共創を必要としています。</Text>
            <MoreLink classNames="concept_link" link={{
              href: "#",
              label: "もっと詳しく",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Concept };
