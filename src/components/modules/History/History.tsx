import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Heading } from "~/components/parts/Heading";
import { HistoryItem } from "~/components/parts/HistoryItem";
import "./History.scss";

type HistoryProps = ComponentProp;

const History = ({
  classNames,
}: HistoryProps): JSX.Element | null => {
  return (
    <section className={"history" + (classNames ? ` ${classNames}` : "")} >
      <div className="history_inner">
        <Heading as="h2" classNames="history_heading _history">
          <span className="heading_label">
            <span className="heading_label-inline">ダイセルのセルロース</span>
            <span className="heading_label-inline">100年の歴史</span>
          </span>
        </Heading>
        <div className="history_items">
          <div className="history_items-group">
            <div className="history_item">
              <HistoryItem
                images={{
                  src: "/cellulose/images/histroy_pic0.png",
                  alt: '',
                }}
                year="1919"
                heading={`大日本セルロイド株式会社（のちのダイセル）の誕生`}
                text={`時世界中に需要があった植物由来の人工プラスチック「セルロイド」。そのセルロイド製造の競争が激化する中、日本国内８社のメーカーが原料であるクスノキの木の乱獲を防ぎ、未来を持続可能にするために合併しました。`}
              />
            </div>
            <div className="history_item">
              <HistoryItem
                images={{
                  src: "/cellulose/images/histroy_pic1.png",
                  alt: '',
                }}
                year="1929"
                text={`当時世界中に需要があった植物由来の人工プラスチック「セルロイド」。そのセルロイド製造の競争が激化する中、日本国内８社のメーカーが原料であるクスノキの木の乱獲を防ぎ、未来を持続可能にするために合併しました。`}
              />
            </div>
            <div className="history_item">
              <HistoryItem
                images={{
                  src: "/cellulose/images/histroy_pic2.png",
                  alt: '',
                }}
                year="1953"
                text={`写真フィルム用酢酸セルロース（TAC）。燃えにくく安心安全な写真フィルムの普及に大きく貢献しました。`}
              />
            </div>
          </div>
          <div className="history_items-group">
            <div className="history_item">
              <HistoryItem
                images={{
                  src: "/cellulose/images/histroy_pic3.png",
                  alt: '',
                }}
                year="1958"
                text={`当時、喫煙者の健康を守るため、たばこの煙から有害物質を除く試みが進んでいました。アセテートフィルターはたばこの香りや味を損なわず、適度にニコチン・タールを吸着する特徴があり1951年にアメリカで初めて実用化されました。<br />
                1958年に日本での国産化も成功し、量産がスタートしました。`}
              />
            </div>
            <div className="history_item">
              <HistoryItem
                images={{
                  src: "/cellulose/images/histroy_pic4.png",
                  alt: '',
                }}
                year="1982"
                text={`人工的に合成された化学物質による副作用を抑える光学異性体分離機能を持つキラルカラムが登場。医薬品等の研究開発、製造や品質保証に不可欠なものとして、世界中で活用されています。`}
              />
            </div>
            <div className="history_item">
              <HistoryItem
                images={{
                  src: "/cellulose/images/histroy_pic5.png",
                  alt: '',
                }}
                year="1990"
                text={`液晶光学フィルム用酢酸セルロース（TAC）の製造を開始。もともと写真用フィルムの基材として開発されたTACですが不燃性，透明性，表面外観，電気絶縁性などに優れることから液晶ディスプレイの構成部材として活用が広がりました。`}
              />
            </div>
          </div>
          <div className="history_items-group">
            <div className="history_item">
              <HistoryItem
                images={{
                  src: "/cellulose/images/histroy_pic6.png",
                  alt: '',
                }}
                year="1994"
                text={`気候変動にともない問題が深刻化する貴重な資源が水。その水を幅広い分野で処理する「水処理用分離膜モジュール」が誕生。ここにも酢酸セルロースが使われています。`}
              />
            </div>
            <div className="history_item">
              <HistoryItem
                images={{
                  src: "/cellulose/images/histroy_pic7.png",
                  alt: '',
                }}
                year="2021"
                text={`酢酸セルロースの海洋生分解性を飛躍的に向上した高生分解性酢酸セルロース「CAFBLO」。世界規模の問題である海洋プラスチックごみ問題の有効な解決策として期待を集めています。`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export { History };
