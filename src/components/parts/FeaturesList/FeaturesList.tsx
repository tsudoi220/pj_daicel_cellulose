import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import "./FeaturesList.scss";

type FeaturesListProps = ComponentProp;

const FeaturesList = ({
  classNames,
}: FeaturesListProps): JSX.Element | null => {
  return (
    <ul className={"featuresList" + (classNames ? ` ${classNames}` : "")} >
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">高い強度</span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">繊維状</span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">分子構造を見分ける<span>（光学活性）</span></span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">化学的に比較的安定</span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">生物分解性</span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">生育時に大気中のCO<sub>2</sub>を<br className="_sp" />吸収</span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">水に溶けない</span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">生体に安全</span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">水に混ざりやすい<span>（親水性）</span></span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">油に混ざりやすい<span>（親油性）</span></span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">リサイクル利用可能</span>
      </li>
      <li className="featuresList_item" data-scroll-animation>
        <span className="featuresList_label">石油より短サイクルで<br className="_sp" />再生産可能</span>
      </li>
    </ul>
  );
};

export { FeaturesList };
