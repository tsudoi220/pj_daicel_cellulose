import React from "react";
import type { ComponentProp, VideoProp, PictureProp } from "~/components/@types/Component";
import type { PAGE_TYPE } from "~/constants/metaData";
import "./Header.scss";

type HeaderProps = {
  heading: string
  video?: VideoProp
  picture?: PictureProp
  page?: PAGE_TYPE
} & ComponentProp;

const Header = ({ classNames }: HeaderProps): JSX.Element | null => {
  return (
    <header className={"header" + (classNames ? ` ${classNames}` : "")} data-header>
    </header>
  );
};

export { Header };
