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
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/cell_ac/" className="productsTable_link">
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
        </div>

        {/* ACETY® アセチ® */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_ippan.png" alt="一般産業" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/cell_ac/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">ACETY® アセチ®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">セルロースアセテート樹脂。透明度が高く、鮮やかな色を表現可能。表面が研磨しやすく、艶出しが容易なことや切削が容易</Text>
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
            <a href="https://www.daicel.com/business/new-solution/actranza/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">Actranza® lab.<br />アクトランザ® ラボ</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">燃焼ガスを発生させ、そのガス圧により針を用いずに薬剤を投与対象内部に注入するジェットインジェクター。細胞内へ物質を導入</Text>
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
            <a href="https://www.daicelmiraizu.com/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">CMC（カルボキシメチルセルロース）</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">増粘剤、乳化安定剤、バインダーとして 幅広い分野に使用されるセルロース系水溶性高分子</Text>
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
            <a href="https://www.daicel.com/cell_ac/cellulose/marine_biodegradable.html" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">CAFBLO®<br />キャフブロ®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">酢酸セルロースから作られた海洋生分解性バイオマスプラ（ポリマー・樹脂）の製品ブランド。樹脂は高い透明性、意匠性が特徴</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">カトラリー（フォーク・スプーン）、包装容器、衣料品、インク・塗料</dd>
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
            <a href="https://www.daicelchiral.com/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">CHIRALCEL®<br />キラルセル®<br />CHIRAKPAK®<br />キラルパック®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">高次構造を有するセルロース誘導体へ物理吸着する力の差異で、光学異性体を識別・分離出来るキラル化合物のカラム</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">医薬品開発、HPLC分析</dd>
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
            <a href="https://www.daicel.com/lifesciences/excipients/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">GRANFILLER-D®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">錠剤にする際には成形しやすく、錠剤を口の中に入れた際には口の中ですぐに溶ける機能を付与する添加剤</Text>
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
            <a href="https://www.daicel.com/cell_ac/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">Sylphlace®<br />シルフレース®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">木材やリンター等の植物由来ポリマー、バイオマスプラ。繊維形状を持ち、吸水性がある</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">衛生材</dd>
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
            <a href="https://www.daicel.com/cell_ac/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">Cigatow（シガートウ）</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">たばこ用フィルター。煙粒子のろ過と吸着により、ニコチンとタールを適度にコントロール。</Text>
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
            <a href="https://www.daicel.com/cell_ac/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">ジアセテート・フレーク</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">適度な親水性のある粉体素材。汎用溶剤への溶解性を持ち、可塑剤の添加によりプラスチックとして利用可能</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">生地、衣類、プラスチック</dd>
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
            <a href="https://www.daicelmiraizu.com/business/wsp/microfibrillated/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">セリッシュ</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">機械的処理によって細長く微細化したセルロース繊維。水に溶解しないが、均一に分散して粘度を発現する。添加したものに非常に高い保水性を持たせることが可能</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">食品（ろ過助剤、保水性向上、触感改善）、電池用バインダー、紙（紙力の増強）</dd>
            </dl>
          </div>
        </div>

        {/* TACフレーク（トリアセチルセルロース） */}
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
            <a href="https://www.daicel.com/cell_ac/application/index.html" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">TACフレーク（トリアセチルセルロース）</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">適度な透湿性と光学特性を持つ粉体素材。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">偏光板、衣料品用繊維、写真フィルム、医療機器（レントゲン検査機用フィルムのベース材）</dd>
            </dl>
          </div>
        </div>

        {/* TACフレーク（トリアセチルセルロース） */}
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
            <a href="https://www.daicel.com/cell_ac/application/index.html" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">TACフレーク（トリアセチルセルロース）</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">トリアセチルセルロースのフィルム。寸法安定性に優れ、適度な透湿性があり、しなやかなことから、液晶ディスプレイの偏光板保護フィルムに活用</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">家電・電子機器（液晶テレビ、ノートパソコン、携帯電話など）</dd>
            </dl>
          </div>
        </div>

        {/* DAISI® シートベルトプリテンショナー用ガス発生器（PGG） */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_car.png" alt="自動車" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/safety/" className="productsTable_link">
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
        </div>

        {/* ナノひっつき虫™ */}
        <div className="productsTable_item" data-scroll-animation>
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_elec.png" alt="電機 / 電子" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="https://www.daicel.com/smart/semiconductor/group/selective-functionalization/" className="productsTable_link">
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
            <a href="https://www.daicel.com/lifesciences/excipients/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">HiSORAD®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">錠剤にする際には成形しやすく、錠剤を口の中に入れた際には口の中ですぐに溶ける機能を付与する添加剤</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">医薬品（口腔内崩壊錠）</dd>
            </dl>
          </div>
        </div>

        {/* HEC:ヒドロキシエチルセルロース */}
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
            <a href="https://www.daicelmiraizu.com/business/wsp/hec-daicel/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">HEC:ヒドロキシエチルセルロース</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">セルロースを化学修飾して水溶性をもたせた高分子化合物。増粘、懸濁、保護コロイドなどの 機能を持ち、水溶液は優れた耐ｐＨ性、耐塩性、耐薬品性を持つ。</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">電材、衛生品、自動車、香粧品</dd>
            </dl>
          </div>
        </div>

        {/* プラストロン */}
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
            <a href="https://www.polyplastics-global.com/jp/product/plastron.html" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">プラストロン</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">長繊維強化熱可塑性樹脂。ペレット中に連続した強化繊維が同じ長さで同一方向に複合され、従来の繊維強化樹脂ではできなかった剛性と高い衝撃強度をを兼ね備えた素材。</Text>
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
            <a href="https://www.daicel.com/cell_ac/cellulose/cosmetic.html" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">BELLOCEA®<br />ベロセア®</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">化粧品（ファンデーション）材料。人と環境にやさしい素材。平滑な表面をもつ真球状で、滑らかな触感を実現</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">コスメ</dd>
            </dl>
          </div>
        </div>

        {/*
          MOLSEP®
          モルサップ®
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
            <a href="https://daicen.com/company/" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">MOLSEP®<br />モルサップ®</span>
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
