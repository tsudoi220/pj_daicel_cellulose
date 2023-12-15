import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Text } from "~/components/parts/Text";
import "./ProductsTable.scss";

type ProductsTableProps = ComponentProp;

const ProductsTable = ({
  classNames,
}: ProductsTableProps): JSX.Element | null => {
  return (
    <div className={"productsTable" + (classNames ? ` ${classNames}` : "")} >
      <div className="productsTable_head _pc">
        <div className="productsTable_head-item">用途 / 分野</div>
        <div className="productsTable_head-item">製品名</div>
        <div className="productsTable_head-item">説明</div>
      </div>
      <div className="productsTable_body">

        {/* CMC:カルボキシメチルセルロース */}
        <div className="productsTable_item">
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="#" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">CMC:カルボキシメチルセルロース</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">酢酸セルロースから作られた海洋生分解性バイオマスプラ（ポリマー・樹脂）の製品ブランド</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">カトラリー、歯ブラシ、ルアー、漁具、ゴルフティ、クリアファイル、テキスタイル、衛生材(不織布)、ブリスターパック、ボトル、プラスチック原料ポリマー、インク・塗料・繊維</dd>
            </dl>
          </div>
        </div>

        {/* CMC:カルボキシメチルセルロース */}
        <div className="productsTable_item">
          <div className="productsTable_purpose">
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="" />
            </div>
            <div className="productsTable_purpose-icon">
              <img src="/cellulose/images/icon_medic.png" alt="" />
            </div>
          </div>
          <div className="productsTable_name">
            <a href="#" className="productsTable_link">
              <span className="productsTable_link-arrow"></span>
              <span className="productsTable_link-label">CMC:カルボキシメチルセルロース</span>
            </a>
          </div>
          <div className="productsTable_des">
            <Text classNames="productsTable_text">酢酸セルロースから作られた海洋生分解性バイオマスプラ（ポリマー・樹脂）の製品ブランド</Text>
            <dl className="productsTable_example">
              <dt className="productsTable_example-term">身近な製品例</dt>
              <dd className="productsTable_example-des">カトラリー、歯ブラシ、ルアー、漁具、ゴルフティ、クリアファイル、テキスタイル、衛生材(不織布)、ブリスターパック、ボトル、プラスチック原料ポリマー、インク・塗料・繊維</dd>
            </dl>
          </div>
        </div>

      </div>
    </div>
  );
};


export { ProductsTable };
