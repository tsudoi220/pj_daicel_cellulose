import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import "./Menu.scss";

type MenuProps = {
  isHome?: boolean;
  isAbout?: boolean;
  isProducts?: boolean;
} & ComponentProp;

const Menu = ({
  isHome = false,
  isAbout = false,
  isProducts = false,
  classNames,
  ...delegated
}: MenuProps): JSX.Element | null => {
  return (
    <nav className={"menu" + (classNames ? ` ${classNames}` : "")} {...delegated}>
      <div className="menu_body">
        <div className="menu_button _sp">
          <span className="menu_button-label">ダイセルのセルロース</span>
          <button className="menu_button-icon" type="button" aria-controls="menu-content" aria-expanded="false" data-accordion-summary="menu"><span></span></button>
          <div className="menu_overlay"></div>
        </div>
        <div className="menu_content" id="menu-content" aria-hidden="true">
          <ul className="menu_list">
            <li className="menu_item">
              <a href="#" className={"menu_link" + (isHome ? ` _active` : "")}>
                <span className="menu_arrow"></span>
                <span className="menu_label">ダイセルのセルロース</span>
              </a>
            </li>
            <li className="menu_item">
              <a href="#" className={"menu_link" + (isAbout ? ` _active` : "")}>
                <span className="menu_arrow"></span>
                <span className="menu_label"><span className="menu_label-s">ダイセルのセルロース</span>製品</span>
              </a>
            </li>
            <li className="menu_item">
              <a href="#" className={"menu_link" + (isProducts ? ` _active` : "")}>
                <span className="menu_arrow"></span>
                <span className="menu_label"><span className="menu_label-s">ダイセルのセルロース</span>歴史と未来</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Menu };
