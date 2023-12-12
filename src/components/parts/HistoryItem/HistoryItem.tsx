import React from "react";
import type { ComponentProp, ImageProp } from "~/components/@types/Component";
import "./HistoryItem.scss";

type HistoryItemProps = {
  images: ImageProp
  year: string
  heading?: string
  text: string
} & ComponentProp;

const HistoryItem = ({
  images,
  year,
  heading,
  text,
  classNames,
}: HistoryItemProps): JSX.Element | null => {
  return (
    <div className={"historyItem" + (classNames ? ` ${classNames}` : "")}>
      <p className="historyItem_year">
        <span className="historyItem_year-value">{year}</span>
        <span className="historyItem_year-unit">年</span>
      </p>
      <picture className="historyItem_pic">
        <img src={images.src} alt={images.alt} />
      </picture>
      {
        heading && (
          <h3 className="historyItem_heading" dangerouslySetInnerHTML={{__html: heading}}></h3>
        )
      }
      <p className="historyItem_text" dangerouslySetInnerHTML={{__html: text}}></p>
    </div>
  );
};

export { HistoryItem };
