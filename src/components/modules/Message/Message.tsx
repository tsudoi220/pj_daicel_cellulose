import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Heading } from "~/components/parts/Heading";
import { Text } from "~/components/parts/Text";
import "./Message.scss";

type MessageProps = ComponentProp;

const Message = ({
  classNames,
}: MessageProps): JSX.Element | null => {
  return (
    <section className={"message" + (classNames ? ` ${classNames}` : "")} >
      <div className="message_inner">
        <Heading as="h2" classNames="message_heading _message">
          <picture>
            <source srcSet="/cellulose/images/heading_message_sp.png" media="(max-width: 767px)" />
            <img src="/cellulose/images/heading_message_pc.png" alt="世界を変えろ。木ならできる ダイセルのセルロース" />
          </picture>
        </Heading>
        <div className="message_body">
          <Text classNames="_center _wide _large">
            地球温暖化…<br className="_sp" />プラスチックによる海洋汚染…<br />
            石油依存が招いた人類の問題も、<br className="_sp" />木材ならきっと解ける。
          </Text>
          <Text classNames="_center _wide _large">
            木から生まれる歴史ある素材、<br className="_sp" />セルロース。<br />
            最大の特徴は、人が栽培できる<br className="_sp" />資源だということ。<br />
            栽培できる、つまり循環サイクルを<br className="_sp" />コントロールできるのです。<br />
            さらに海に流れ出るものは<br className="_sp" />分解しやすくするなど、<br />
            目的に合わせて特性を<br className="_sp" />デザインすることも可能です。<br />
            100年かけて磨き上げた、<br className="_sp" />ダイセルのセルロース。
          </Text>
          <Text classNames="_center _wide _large">
            昔からある未来の素材で、<br />
            人類に立ちはだかる問題に挑みます。
          </Text>
        </div>
        <picture className="message_pic _pic0">
          <img src="/cellulose/images/message_pic0.png" alt="" />
        </picture>
        <picture className="message_pic _pic1">
          <img src="/cellulose/images/message_pic1.png" alt="" />
        </picture>
        <picture className="message_pic _pic2">
          <img src="/cellulose/images/message_pic2.png" alt="" />
        </picture>
      </div>
    </section>
  );
};


export { Message };
