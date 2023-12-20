import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Heading } from "~/components/parts/Heading";
import { Text } from "~/components/parts/Text";
import "./ValueChain.scss";

type ValueChainProps = ComponentProp;

const ValueChain = ({
  classNames,
}: ValueChainProps): JSX.Element | null => {
  return (
    <section className={"valueChain" + (classNames ? ` ${classNames}` : "")} >
      <div className="valueChain_inner">
        <Heading as="h2" classNames="valueChain_heading _valueChain" data-scroll-animation>
          <span className="heading_sub"><span className="heading_sub-label">Biomass Value Chain</span></span>
          <span className="heading_label">共創により、<br />新たな<br className="_sp" />価値創出を<br className="_sp" />目指して</span>
        </Heading>
        <Text classNames="valueChain_text _normal" data-scroll-animation>私たちは、セルロースを扱う技術を軸に、持続可能な循環型の産業構造をつくる「バイオマスバリューチェーン構想」を提唱しています。日本の国土の７割を占める森林を原料とし、化学産業だけでなく、幅広く一次産業・二次産業も連関し、地域経済を活性化させるこの構想の実現には、多くの共感と技術共有による共創を必要としています。</Text>
        <section className="valueChain_sec">
          <Heading as="h3" classNames="valueChain_heading _valueChain-sub" data-scroll-animation>
            <span className="heading_label">持続可能な<br className="_sp" />循環型の産業生態系<br />バイオマス<br className="_sp" />バリューチェーン構想</span>
          </Heading>
          <div className="valueChain_movie" data-scroll-animation data-value-chain-movie>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/osB0tWUlANE?rel=0&playsinline=1" title="Biomass Value Chain | バイオマスバリューチェーン" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </section>
      </div>
    </section>
  );
};


export { ValueChain };
