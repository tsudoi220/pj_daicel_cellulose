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
        <Heading as="h2" classNames="history_heading _history" data-scroll-animation>
          <span className="heading_label">
            <span className="heading_label-inline">ダイセルのセルロース</span>
            <span className="heading_label-inline">100年の歴史</span>
          </span>
        </Heading>
        <div className="history_items">
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_1919.png",
                alt: '',
              }}
              year="1919"
              heading={`大日本セルロイド株式会社（のちのダイセル）の誕生`}
              text={`当時世界中に需要があった、硝酸セルロースと樟脳を主原料とした世界初の人工プラスチック「セルロイド」。その製造競争が激化する中、原料であるクスノキの木の乱獲を防ぐために、日本国内８社のメーカーが合併しました。`}
            />
          </div>
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_1929.png",
                alt: '',
              }}
              year="1929"
              text={`セルロイドは非常に優れたプラスチックでしたが燃えやすいという欠点がありました。その欠点を克服するため、不燃化を目指して酢酸セルロースを原料とするアセテートプラスチック「アセチロイド」が開発されました。`}
            />
          </div>
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_1953.png",
                alt: '',
              }}
              year="1953"
              text={`写真フィルム用の酢酸セルロース（TAC: トリアセチルセルロース）は、その燃えにくさと安全性により、安心して使用できる写真フィルムの普及に大きく貢献しました。`}
            />
          </div>
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_1958.png",
                alt: '',
              }}
              year="1958"
              text={`喫煙者の健康を守るため、たばこの煙から有害物質を除去する試みが進んでいました。酢酸セルロース製のフィルターは、たばこの香りや味を損なわず、適度にニコチンやタールを吸着する特徴を持っており、1951年にアメリカで初めて実用化されました。その後1958年には日本での国産化も成功し、量産がスタートしました。`}
            />
          </div>
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_1982.png",
                alt: '',
              }}
              year="1982"
              text={`人工的に合成された化学物質による副作用を抑える光学異性体分離機能を持つキラルカラムが登場。セルロースの分子を見分ける性質によって薬として有効な成分の分離などに用いられます。医薬品等の研究開発、製造、品質保証において不可欠なものとして、世界中で広く活用されています。`}
            />
          </div>
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_1988.png",
                alt: '',
              }}
              year="1988"
              text={`自動車用エアバッグシステムの重要部品となるインフレータの量産を開始。硝酸セルロースを用いた安全かつ安定して必要な時に瞬時に働くガス発生装置の研究開発は1970年代から始まり、その技術はシートベルトプリテンショナー用ガス発生器（PGG）へと応用されます。`}
            />
          </div>
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_1990.png",
                alt: '',
              }}
              year="1990"
              text={`液晶光学フィルム用酢酸セルロース（TAC）の製造を開始。<br />もともと写真用フィルムの基材として開発されたTACですが、不燃性，透明性，表面外観，電気絶縁性などに優れることから、デジタル化時代のニーズに応じた液晶ディスプレイの構成部材へと活用の場が広がりました。`}
            />
          </div>
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_1994.png",
                alt: '',
              }}
              year="1994"
              text={`気候変動にともない問題が深刻化する貴重な資源が水。その水を幅広い分野で処理する「水処理用分離膜モジュール」が誕生。ここにも酢酸セルロースが使われています。`}
            />
          </div>
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_2019.png",
                alt: '',
              }}
              year="2019"
              text={`針を用いずに高速ジェット流で瞬時に皮膚を穿孔して細胞内へ物質を導入する動物実験用新規投与デバイス「アクトランザラボ」。遺伝子治療薬など革新的な医薬品の実現につながるドラッグデリバリーシステムには、硝酸セルロースから始まるガス発生装置技術で培われてきた独自のエネルギーシステム DAISI®が使われています。`}
            />
          </div>
          <div className="history_item" data-scroll-animation>
            <HistoryItem
              images={{
                src: "/cellulose/images/histroy_pic_2021.png",
                alt: '',
              }}
              year="2021"
              text={`酢酸セルロースの海洋生分解性を飛躍的に向上した高生分解性酢酸セルロース「CAFBLO」。世界規模の問題である海洋プラスチックごみ問題の有効な解決策として期待を集めています。`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export { History };
