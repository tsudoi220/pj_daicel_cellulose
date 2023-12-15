import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import type { LearnMoreDataListType, LearnMoreDataType } from '~/constants/LearnMoreDataList'
import { Heading } from "~/components/parts/Heading";
import "./LearnMore.scss";

type LearnMoreProps = {
  data: LearnMoreDataListType
  type: "home"
} & ComponentProp;

const LearnMore = ({
  data,
  type,
  classNames,
}: LearnMoreProps): JSX.Element | null => {
  return (
    <aside className={"learnMore" + (classNames ? ` ${classNames}` : "")} >
      <div className="learnMore_inner">
        <Heading as="h2" classNames="learnMore_heading _learnMore">
          <span className="heading_label">ダイセルのセルロース<br className="_sp" />についてもっと知る</span>
        </Heading>
        {
          data && (
            <ul className="learnMore_list">
              {
                Object.keys(data).map((key: string, index: number) => {
                  return (
                    type !== key && (
                      <li className="learnMore_item">
                        <a href={data[key].link.href} className="learnMore_link">
                          <picture className="learnMore_pic">
                            <img src={data[key].image.src} alt={data[key].image.alt} />
                          </picture>
                          <p className="learnMore_title">
                            <span className="learnMore_title-arrow"></span>
                            <span className="learnMore_title-label" dangerouslySetInnerHTML={{__html: data[key].title_html}}></span>
                          </p>
                          <p className="learnMore_text">{data[key].text}</p>
                        </a>
                      </li>
                    )
                  )
                })
              }
            </ul>
          )
        }
      </div>
    </aside>
  );
};


export { LearnMore };
