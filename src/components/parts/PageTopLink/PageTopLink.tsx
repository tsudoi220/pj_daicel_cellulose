import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import "./PageTopLink.scss";

type PageTopLinkProps = ComponentProp;

const PageTopLink = ({
  classNames,
}: PageTopLinkProps): JSX.Element | null => {
  return (
    <a
      href="#"
      className={"pageTopLink" + (classNames ? ` ${classNames}` : "")}
    >
      <span className="pageTopLink_label">Page Top
        <svg className="pageTopLink_label-icon" viewBox="0 0 10 6.41">
          <path d="M.707.707l4,4-4,4" transform="translate(0.707 6.121) rotate(-90)" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
        </svg>
      </span>
    </a>
  );
};

export { PageTopLink };
