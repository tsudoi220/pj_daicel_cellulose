import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import { Heading } from "~/components/parts/Heading";
import "./ProductsHead.scss";

type ProductsHeadProps = ComponentProp;

const ProductsHead = ({
  classNames,
}: ProductsHeadProps): JSX.Element | null => {
  return (
    <div className={"productsHead" + (classNames ? ` ${classNames}` : "")} >
      <div className="productsHead_inner">
        <Heading as="h1" classNames="productsHead_heading _products" data-scroll-animation>
          <span className="heading_sub"><span className="heading_sub-label">Products</span></span>
          <span className="heading_label">世の中の< br className="_sp" />様々な場所で< br className="_sp" />活躍する<br />ダイセルの< br className="_sp" />セルロース</span>
        </Heading>
        <picture className="productsHead_pic">
          <source srcSet="/cellulose/images/products_main_pic_sp.jpg" media="(max-width: 767px)" />
          <img src="/cellulose/images/products_main_pic_pc.jpg" alt="" data-scroll-animation />
        </picture>
      </div>
    </div>
  );
};


export { ProductsHead };
