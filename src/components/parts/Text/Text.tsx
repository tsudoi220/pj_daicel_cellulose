import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import "./Text.scss";

type TextProps = {
  children: React.ReactNode;
} & ComponentProp;

const Text = ({
  children,
  classNames,
}: TextProps): JSX.Element | null => {
  return (
    <p className={"text" + (classNames ? ` ${classNames}` : "")} >
      {children}
    </p>
  );
};

export { Text };
