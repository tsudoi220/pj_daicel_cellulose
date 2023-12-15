import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Heading } from "~/components/parts/Heading";
import { Text } from "~/components/parts/Text";
import "./StoryHead.scss";

type StoryHeadProps = ComponentProp;

const StoryHead = ({
  classNames,
}: StoryHeadProps): JSX.Element | null => {
  return (
    <div className={"storyHead" + (classNames ? ` ${classNames}` : "")} >
      <div className="storyHead_inner">
        <Heading as="h1" classNames="storyHead_heading _story" data-scroll-animation>
          <span className="heading_sub"><span className="heading_sub-label">History</span></span>
          <span className="heading_label">ダイセルの< br className="_sp" />セルロース<br />100年の歴史と< br className="_sp" />進化し続ける< br className="_sp" />技術</span>
        </Heading>
        <Text classNames="storyHead_text _center _wide-s" data-scroll-animation>私たちは創業から< br className="_sp" />100年以上にわたり、< br className="_sp" />セルロースの研究・開発を進め、<br />
        セルロースが持つ特長を< br className="_sp" />活かしながら、<br />
        化学修飾して機能化したり、< br className="_sp" />他の素材と組み合わせたりして、<br />
        新しい価値を生み出し続け、< br className="_sp" />世の中に提供しています。</Text>
      </div>
    </div>
  );
};


export { StoryHead };
