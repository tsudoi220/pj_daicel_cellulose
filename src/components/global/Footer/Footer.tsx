import React from "react";
import { metaData } from '~/constants/metaData'
import type { ComponentProp } from "~/components/@types/Component";
// import { PageTopLink } from "~/components/parts/PageTopLink";

//- import styles from "./Footer.module.scss";
import "./Footer.scss";

type FooterProps = ComponentProp;

const Footer = ({ classNames }: FooterProps): JSX.Element | null => {
  return (
    <footer className={"footer" + (classNames ? ` ${classNames}` : "")}>
      {/* <PageTopLink classNames="footer_pageTopLink" /> */}
      <a href={metaData.external_links.daicel} target='_blank' className="footer_logo">
        <img src="/cellulose/images/logo_daicel.png" alt="DAICEL" />
      </a>
      <div className="footer_copyright">
        <small>© Daicel Corporation</small>
      </div>
    </footer>
  );
};

export { Footer };
