import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import "./PlayButton.scss";

type PlayButtonProps = {
  label: string
} & ComponentProp;

const PlayButton = ({
  label,
  classNames,
  ...delegated
}: PlayButtonProps): JSX.Element | null => {
  return (
    <button type="button" className={"playButton" + (classNames ? ` ${classNames}` : "")} {...delegated}>
      <span className="playButton_icon"></span>
      <span className="playButton_label">{label}</span>
    </button>
  );
};

export { PlayButton };
