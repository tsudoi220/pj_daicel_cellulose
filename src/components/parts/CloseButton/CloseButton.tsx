import type { ReactNode } from 'react'
import type { ComponentProp } from "~/components/@types/Component";
import "./CloseButton.scss";

type CloseButtonProps = ComponentProp;

const CloseButton = ({
  classNames,
  ...delegated
}: CloseButtonProps): JSX.Element | null => {
  return (
    <button className={"closeButton" + (classNames ? ` ${classNames}` : "")} type="button" {...delegated}></button>
  );
};

export { CloseButton };
