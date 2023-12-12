import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import "./ZoomButton.scss";

type ZoomButtonProps = {
} & ComponentProp;

const ZoomButton = ({
  classNames,
  ...delegated
}: ZoomButtonProps): JSX.Element | null => {
  return (
    <button type="button" className={"zoomButton" + (classNames ? ` ${classNames}` : "")} {...delegated}>
      <div className="zoomButton_border">
        <span className="zoomButton_icon">
          <svg viewBox="0 0 22.077 37.858">
            <g transform="translate(-731.33 -4414)">
              <path d="M3.85-4.477,2.9-4.213V-6.149h.957v-.946H2.9V-9.218H1.925v2.123H.528v.946h1.4v2.2C1.32-3.784.77-3.641.33-3.542l.22,1,1.375-.4V-.33c0,.154-.055.209-.2.209s-.594,0-1.056-.011a4.035,4.035,0,0,1,.3.99A3.529,3.529,0,0,0,2.486.66C2.794.5,2.9.209,2.9-.33v-2.9c.352-.11.715-.22,1.067-.33Zm1.386-2h5.159V-7.4H7.865V-9.2H6.853V-7.4h-2.6v2.486c0,1.54-.11,3.685-1.2,5.192a5.261,5.261,0,0,1,.825.572C5.038-.77,5.236-3.223,5.236-4.906ZM10.648.5A16.356,16.356,0,0,0,9.031-3.531l-.869.3A17.368,17.368,0,0,1,9.13-1.089c-.8.077-1.617.154-2.365.209.407-1.364.847-3.223,1.155-4.8L6.842-5.841A41.036,41.036,0,0,1,5.786-.792l-.891.066.176.957C6.248.121,7.865-.055,9.427-.231A9.61,9.61,0,0,1,9.7.836ZM22.209-5.126V-6.182H17.776a27.748,27.748,0,0,0,.154-3.036H16.819a27.585,27.585,0,0,1-.132,3.036H12.6v1.056h3.9A6.843,6.843,0,0,1,12.375-.011a3.568,3.568,0,0,1,.781.858A7.609,7.609,0,0,0,17.4-4.224,8.422,8.422,0,0,0,21.648.847a4.045,4.045,0,0,1,.759-.957,7.762,7.762,0,0,1-4.213-5.016Z" transform="translate(731 4451)" fill="#fff"/>
              <path d="M15.817,7.908a7.909,7.909,0,1,0-8.408,7.883v7.025h1V15.791a7.911,7.911,0,0,0,7.408-7.883M7.909,14.816a6.908,6.908,0,1,1,6.908-6.908,6.916,6.916,0,0,1-6.908,6.908m.5-7.408h3.25v1H8.409v3.25h-1V8.408H4.159v-1h3.25V4.158h1Z" transform="translate(735 4414)" fill="#fff"/>
              </g>
            </svg>
        </span>
      </div>
    </button>
  );
};

export { ZoomButton };
