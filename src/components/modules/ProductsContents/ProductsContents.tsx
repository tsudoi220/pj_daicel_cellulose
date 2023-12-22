import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Text } from "~/components/parts/Text";
import { ProductsTable } from "~/components/modules/ProductsTable";
import "./ProductsContents.scss";

type ProductsContentsProps = ComponentProp;

const ProductsContents = ({
  classNames,
}: ProductsContentsProps): JSX.Element | null => {
  return (
    <div className={"productsContents" + (classNames ? ` ${classNames}` : "")} >
      <div className="productsContents_head">
        <Text classNames="productsContents_text _center _wide-s _large _productsContents" data-scroll-animation>ダイセルのセルロース系素材は、<br />
        多様な目的に合わせ<br className="_sp" />緻密に特性をデザインすることで<br />
        様々な製品に採用され<br className="_sp" />社会に役立っています。</Text>
        <ul className="productsContents_list">
          <li className="productsContents_list-item" data-scroll-animation>
            <img src="/cellulose/images/icon_medic.png" alt="ライフサイエンス" />
            <span>ライフサイエンス</span>
          </li>
          <li className="productsContents_list-item" data-scroll-animation>
            <img src="/cellulose/images/icon_car.png" alt="自動車" />
            <span>自動車</span>
          </li>
          <li className="productsContents_list-item" data-scroll-animation>
            <img src="/cellulose/images/icon_elec.png" alt="電機 / 電子" />
            <span>電機 / 電子</span>
          </li>
          <li className="productsContents_list-item" data-scroll-animation>
            <img src="/cellulose/images/icon_ippan.png" alt="一般産業" />
            <span>一般産業</span>
          </li>
          <li className="productsContents_list-item" data-scroll-animation>
            <img src="/cellulose/images/icon_daily.png" alt="日用品" />
            <span>日用品</span>
          </li>
        </ul>
      </div>
      <div className="productsContents_body">
        <ProductsTable />
      </div>
    </div>
  );
};


export { ProductsContents };
