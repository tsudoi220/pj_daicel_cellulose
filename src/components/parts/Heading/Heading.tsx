import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import "./Heading.scss";

type HeadingProps = {
  as: React.ElementType;
  children: React.ReactNode;
} & ComponentProp;

const Heading = ({
  as: CustomTag = "h1",
  children,
  classNames,
  ...delegated
}: HeadingProps): JSX.Element | null => {
  return (
    <CustomTag className={"heading" + (classNames ? ` ${classNames}` : "")} {...delegated}>
      {children}
    </CustomTag>
  );
};

export { Heading };
