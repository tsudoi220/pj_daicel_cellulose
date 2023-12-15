import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import "./PicturePanel.scss";

type PicturePanelProps = {
  children: React.ReactNode;
} & ComponentProp;

const PicturePanel = ({
  children,
  classNames,
  ...delegated
}: PicturePanelProps): JSX.Element | null => {
  return (
    <div className={"picturePanel" + (classNames ? ` ${classNames}` : "")} {...delegated}>
      {children}
    </div>
  );
};

export { PicturePanel };
