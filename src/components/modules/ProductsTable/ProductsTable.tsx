import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Text } from "~/components/parts/Text";
import "./ProductsTable.scss";

type ProductsTableProps = ComponentProp;

const ProductsTable = ({
  classNames,
}: ProductsTableProps): JSX.Element | null => {
  return (
    <div className={"productsTable" + (classNames ? ` ${classNames}` : "")}>
      <div className="productsTable_head" data-scroll-animation>
        <div className="productsTable_head-item _pc">用途 / 分野</div>
        <div className="productsTable_head-item _pc">製品名</div>
        <div className="productsTable_head-item _pc">説明</div>
      </div>
      <div className="productsTable_body">

        {/* アセテート繊維 */}
        {/* <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/cell_ac/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">アセテート繊維</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">アセチルセルロースから作られる繊維質の素材。絹のような光沢と感触があり、吸水性・吸湿性に優れ、衣服内環境を快適に保つ。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">衣料品、衛生材料（ガーゼ等）</dd>
            </dl>
          </div>
        </div> */}

        {/* ACETY® アセチ® */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicelmiraizu.com/business/resin/acety/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">ACETY®<br />アセチ®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">酢酸セルロース樹脂。透明度が高く、鮮やかな色を表現可能。表面が研磨しやすく、艶出しや切削が容易。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">眼鏡フレーム、工具（ドライバーの持ち手）</dd>
            </dl>
          </div>
        </div>

        {/*
          Actranza® lab.
          アクトランザ® ラボ
        */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="ライフサイエンス" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/business/new-solution/actranza/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">Actranza® lab.<br />アクトランザ® ラボ</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">火薬の燃焼により高圧のガスを発生させ、そのガス圧により針を用いずに薬剤を皮膚組織に注入するジェットインジェクター。高分子薬剤の細胞内導入も実現。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">動物実験用理化学機器</dd>
            </dl>
          </div>
        </div>

        {/* CMC（カルボキシメチルセルロース） */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_ippan.png" alt="一般産業" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicelmiraizu.com/business/wsp/cmc-daicel/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">CMC（カルボキシメチルセルロース）</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">増粘剤、乳化安定剤、バインダーとして幅広い分野に使用されるセルロース系水溶性高分子。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">衛生品（湿布薬）、電池（負極板用バインダー）、食品（乳蛋白の分散）、香粧品（染毛材の増粘）</dd>
            </dl>
          </div>
        </div>

        {/*
          CAFBLO®
          キャフブロ®
        */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/cell_ac/cellulose/marine_biodegradable.html" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">CAFBLO®<br />キャフブロ®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">酢酸セルロースから作られた海洋生分解性バイオマスプラ（ポリマー、樹脂）。樹脂は高い透明性、意匠性が特徴。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">カトラリー（フォーク・スプーン）、包装容器、衣料品、クリアファイル、歯ブラシ</dd>
            </dl>
          </div>
        </div>

        {/*
          CHIRALCEL®
          キラルセル®
          CHIRAKPAK®
          キラルパック®
        */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="ライフサイエンス" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicelchiral.com/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">CHIRALCEL®<br />キラルセル®<br />CHIRAKPAK®<br />キラルパック®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">高次構造を有するセルロース誘導体・アミロース誘導体ポリマーをシリカゲルに担持させた充填剤を用いた光学異性体分離用カラム</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">医薬品開発、HPLC・SFCでの分析、分取</dd>
            </dl>
          </div>
        </div>

        {/* GRANFILLER-D® */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="ライフサイエンス" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/lifesciences/excipients/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">GRANFILLER-D®<br />グランフィラーD®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">OD錠用コプロセス添加剤。結晶セルロース、カルメロースを主な構成成分に持ち、錠剤への成形性と速やかな口腔内での崩壊性を両立。特徴的な粒子形状により含量均一性が良好。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">医薬品（口腔内崩壊錠）</dd>
            </dl>
          </div>
        </div>

        {/*
          Sylphlace®
          シルフレース®
        */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/cell_ac/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">Sylphlace®<br />シルフレース®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">木材やリンター等の植物由来のバイオマスプラである酢酸セルロースから作られる繊維質の素材。吸水性・吸湿性に優れる。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">衛生材（オムツ等）</dd>
            </dl>
          </div>
        </div>

        {/* Cigatow（シガートウ）*/}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/cell_ac/application/index.html" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">Cigatow（シガートウ）</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">たばこ用フィルター。煙・蒸気をろ過しニコチンやタールを減らして、味をまろやかにして吸いごたえを適度にコントロール。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">たばこ</dd>
            </dl>
          </div>
        </div>

        {/* ジアセテート・フレーク */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/cell_ac/application/index.html" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">ジアセテート・フレーク</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">適度な親水性のある粉体素材。汎用溶剤への溶解性を持ち、可塑剤の添加によりプラスチックとして利用可能。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">プラスチック、繊維</dd>
            </dl>
          </div>
        </div>

        {/* セリッシュ */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_elec.png" alt="電機 / 電子" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_ippan.png" alt="一般産業" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicelmiraizu.com/business/wsp/microfibrillated/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">セリッシュ</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">機械的処理によって細長く微細化したセルロース繊維。水に溶解しないが、均一に分散して粘度を発現する。添加したものに非常に高い保水性を持たせることが可能。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">食品（ろ過助剤、保水性向上、触感改善）、電池用バインダー、紙（紙力の増強）</dd>
            </dl>
          </div>
        </div>

        {/* セルロイド */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicelmiraizu.com/business/resin/celluloid/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">セルロイド</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">硝酸セルロースと樟脳を混合して作られるプラスチック。繊維系プラスチックのルーツで、非常に長期間にわたり、多くの方々に愛用されている素材。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">メガネフレーム、ギターピック,楽器の部品,筆記具,ゴルフクラブのネックソケット</dd>
            </dl>
          </div>
        </div>

        {/* トリアセテート・フレーク（トリアセチルセルロース） */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_elec.png" alt="電機 / 電子" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="ライフサイエンス" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/cell_ac/application/index.html" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">トリアセテート・フレーク（トリアセチルセルロース）</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">適度な透湿性と光学特性を持つ粉体素材。フィルム状にした際の寸法安定性に優れ、写真フィルムや液晶ディスプレイの偏光板保護フィルムの素材として活用。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">光学フィルム（液晶テレビ、ノートパソコン、携帯電話のディスプレイ）、衣料品用繊維、写真フィルム、水処理膜、レントゲンフィルム</dd>
            </dl>
          </div>
        </div>

        {/* DAISI® シートベルトプリテンショナー用ガス発生器（PGG） */}
        {/* <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_car.png" alt="自動車" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/safety/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">DAISI® シートベルトプリテンショナー用ガス発生器（PGG）</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">自動車の衝突時に、安全かつ確実にシートベルトを引き込み、乗員をシートに拘束する装置</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">自動車部品</dd>
            </dl>
          </div>
        </div> */}

        {/* ナノひっつき虫™ */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_elec.png" alt="電機 / 電子" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/smart/semiconductor/group/selective-functionalization/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">ナノひっつき虫™</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">シリコン窒化膜に極めて強い親和性を示すセルロース誘導体を主成分とする選択的な吸着材。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">半導体（製造プロセスでのエッチング工程の保護剤）</dd>
            </dl>
          </div>
        </div>

        {/* HiSORAD® */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="ライフサイエンス" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/lifesciences/excipients/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">HiSORAD®<br />ハイソラッド®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">OD錠用コプロセス添加剤。結晶セルロース、クロスカルメロースを主な構成成分に持ち、成形性に優れ、低い打錠圧縮力でも十分な錠剤硬度と速やかな口腔内での崩壊を両立。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">医薬品（口腔内崩壊錠）</dd>
            </dl>
          </div>
        </div>

        {/* HEC(ヒドロキシエチルセルロース) */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_elec.png" alt="電機 / 電子" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_car.png" alt="自動車" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicelmiraizu.com/business/wsp/hec-daicel/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">HEC(ヒドロキシエチルセルロース)</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">セルロースを化学修飾して水溶性をもたせた高分子化合物。増粘、懸濁、保護コロイドなどの機能を持ち、水溶液は優れた耐ｐＨ性、耐塩性、耐薬品性を持つ。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">電材、衛生品、自動車、香粧品</dd>
            </dl>
          </div>
        </div>

        {/* シートベルトプリテンショナー用ガス発生器 (PGG) */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_car.png" alt="自動車" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/safety/pgg/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">DAISI®<br />シートベルトプリテンショナー用ガス発生器 (PGG)</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">自動車の衝突時に、安全かつ確実にガスを発生させ、そのガスの力によってシートベルトを引き込む製品。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">自動車部品</dd>
            </dl>
          </div>
        </div>

        {/* プラストロン® LFT */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_car.png" alt="自動車" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.polyplastics-global.com/jp/product/plastron.html" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">PLASTRON® LFT<br />プラストロン® LFT</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">長繊維強化熱可塑性樹脂。ペレット中に連続したセルロース長繊維が同じ長さで同一方向に複合され、従来の繊維強化樹脂では困難であった剛性と高い衝撃強度の両立を実現。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">自動車部品（ダッシュボード）、楽器（リード）</dd>
            </dl>
          </div>
        </div>

        {/*
          BELLOCEA®
          ベロセア®
        */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/healthcare/cosmeproduct/bellocea-s7" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">BELLOCEA®<br />ベロセア®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">化粧品用球状粒子。平滑な表面をもつ真球状で、滑らかな触感を実現。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">コスメ</dd>
            </dl>
          </div>
        </div>

        {/*
          MOLSEP®
          モルセップ®
        */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_ippan.png" alt="一般産業" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="ライフサイエンス" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://daicen.com/" target="_blank" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">MOLSEP®<br />モルセップ®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">酢酸セルロースの中空糸膜モジュール。水に馴染みやすい性質（親水性）があり、膜面が汚れにくく高い透水性能を安定的に維持。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">水処理（浄水処理、排水処理）、食品工場、超純水製造、医薬・バイオ用膜モジュール</dd>
            </dl>
          </div>
        </div>

      </div>
    </div>
  );
};


export { ProductsTable };
