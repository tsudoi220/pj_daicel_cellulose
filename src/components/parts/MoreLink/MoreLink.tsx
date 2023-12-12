import React from "react";
import type { ComponentProp, LinkProp } from "~/components/@types/Component";
import "./MoreLink.scss";

type MoreLinkProps = {
  link: LinkProp
} & ComponentProp;

const MoreLink = ({
  link,
  classNames,
}: MoreLinkProps): JSX.Element | null => {
  return (
    <a className={"moreLink" + (classNames ? ` ${classNames}` : "")} href={link.href}>
      <span className="moreLink_label">{link.label}</span>
      <span className="moreLink_icon"></span>
    </a>
  );
};

export { MoreLink };
