import React from "react";
import type { ComponentProp } from "~/components/@types/Component";
import "./SiteHeader.scss";

type SiteHeaderProps = {} & ComponentProp;

const SiteHeader = ({ classNames }: SiteHeaderProps): JSX.Element | null => {
  return (
    <header id="header" className="Header">
      <div id="headerBody" className="HeaderBody">
        <div className="header-wrap">
          <div className="header-identity">
            <h1 className="identity_logo"><a href="/">
            <span className="logo_main"><img src="/common_img/cmn_logo01.png" alt="株式会社ダイセル" /></span>
            </a></h1>
          {/* <!--/header-identity--> */}
          </div>
          <div className="header-search js-search">
            <div className="search_box">
              <form action="/search.html" acceptCharset="UTF-8" className="search_form">
                <input type="text" name="q" id="qHeader" defaultValue="" placeholder="サイト内検索" autoComplete="off" className="search_text js-search_input" />
                <button type="submit" className="search_submit">検索</button>
              </form>
            </div>
          {/* <!--/header-search--> */}
          </div>
          <div className="header-button">
            <div className="button_menu"><a href="javascript:void(0);" className="js-dropdown_trigger"><span className="button_label">メニュー</span></a></div>
            <div className="button_search"><a href="javascript:void(0);" className="js-search_trigger"><span className="button_label js-search_label">サイト内検索</span></a></div>
            <div className="button_global js-lang">
              <a href="javascript:void(0);" className="js-lang_trigger"><span className="button_label js-lang_label">Global</span></a>
              <div className="button_detail js-lang_detail">
                <ul className="button_detail_list">
                  <li><a href="/" className="js-lang_ja">日本語</a></li>
                  <li><a href="/en/" className="js-lang_en">English</a></li>
                  <li><a href="/ch/" className="js-lang_ch">中文（简体）</a></li>
                </ul>
              </div>
            </div>
            <div className="button_contact js-menu_contact"><a href="/contact/"><span className="button_label">お問い合わせ</span></a></div>
          </div>
        {/* <!--/header-wrap--> */}
        </div>
        <nav className="header-navi js-menu">
          <ul className="navi_global js-globalNav js-menu-megadrop js-menu_clone_1">
            <li className="type1 js-globalNav_1"><a href="/news/"><span className="nav_label">ニュース</span></a></li>
            <li className="type2 js-globalNav_2 js-megadrop_trigger"><a href="/profile/" className="a-toggle js-dropdown_toggle_trigger"><span className="nav_label">会社情報</span></a>
              <div className="menu-megadrop js-megadrop_menu js-dropdown_toggle_panel">
                <div className="megadrop_container">
                  <div className="megadrop_heading">
                    <div className="megadrop_heading_title"><a href="/profile/">会社情報<span className="pc-hidden"> 一覧</span></a></div>
                  </div>
                  <div className="megadrop_content">
                    <div className="megadrop_column_layout" data-row-pc="3" data-row-sp="1">
                      <div className="megadrop_column_item">
                        <ul className="megadrop_link_text">
                          <li><a href="/profile/greeting.html"><span className="megadrop_link_label">トップメッセージ</span></a></li>
                          <li><a href="/profile/company.html"><span className="megadrop_link_label">会社概要</span></a></li>
                          <li><a href="/profile/philosophy.html"><span className="megadrop_link_label">基本理念</span></a></li>
                          {/* <!--<li><a href="/profile/plan.html"><span className="megadrop_link_label">経営計画</span></a></li>--> */}
                          <li><a href="/vision/"><span className="megadrop_link_label">長期ビジョン DAICEL VISION4.0</span></a></li>
                          <li><a href="/plan/"><span className="megadrop_link_label">中期戦略 Accelerate 2025</span></a></li>
                        </ul>
                      </div>
                      <div className="megadrop_column_item">
                        <ul className="megadrop_link_text">
                          <li><a href="/profile/network/"><span className="megadrop_link_label">事業拠点</span></a>
                            <ul className="megadrop_link_text_child">
                              <li><a href="/profile/network/workplace.html">事業所案内</a></li>
                              <li><a href="/profile/network/group.html">国内グループ会社</a></li>
                              <li><a href="/profile/network/foreign.html">海外グループ会社</a></li>
                            </ul>
                          </li>
                          <li><a href="/profile/director.html"><span className="megadrop_link_label">役員紹介</span></a></li>
                          <li><a href="/profile/history.html"><span className="megadrop_link_label">沿革</span></a></li>
                        </ul>
                      </div>
                      <div className="megadrop_column_item">
                        <ul className="megadrop_link_text">
                          <li><a href="/profile/about.html"><span className="megadrop_link_label">会社案内（冊子・映像）</span></a></li>
                          <li><span className="no-link"><span className="megadrop_link_label">購買</span></span>
                            <ul className="megadrop_link_text_child">
                              <li><a href="/profile/purchase/">購買基本方針</a></li>
                              <li><a href="/profile/purchase/guidelines.html">CSR調達ガイドライン</a></li>
                              <li><a href="/profile/purchase/fuel.html">原燃料購買・部品購買</a></li>
                              <li><a href="/profile/purchase/parts.html">機材購買</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="type3 js-globalNav_3 js-megadrop_trigger"><a href="/business/" className="a-toggle js-dropdown_toggle_trigger"><span className="nav_label">事業・製品</span></a>
              <div className="menu-megadrop js-megadrop_menu js-dropdown_toggle_panel">
                <div className="megadrop_container">
                  <div className="megadrop_heading">
                    <div className="megadrop_heading_title"><a href="/business/">事業・製品<span className="pc-hidden"> 一覧</span></a></div>
                  </div>
                  <div className="megadrop_content">
                    <div className="megadrop_column_layout" data-row-pc="2" data-row-sp="1">
                      <div className="megadrop_column_item">
                        <dl className="megadrop_link_list">
                          <dt><a href="/business/#anc-1">事業領域</a></dt>
                          <dd>
                            <ul className="megadrop_link_list_child">
                              <li><a href="/business/#anc-3">メディカル・ヘルスケア事業</a></li>
                              <li><a href="/business/#anc-4">スマート事業</a></li>
                              <li><a href="/business/#anc-5">セイフティ事業</a></li>
                              <li><a href="/business/#anc-7">マテリアル事業</a></li>
                              <li><a href="/business/#anc-8">エンジニアリングプラスチック事業</a></li>
                              <li><a href="/business/#anc-6">その他事業</a></li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                      <div className="megadrop_column_item">
                        <dl className="megadrop_link_list">
                          <dt><a href="/business/#anc-2">用途</a></dt>
                          <dd>
                            <ul className="megadrop_link_list_child">
                              <li><a href="/business/purpose/mobility.html">モビリティ</a></li>
                              <li><a href="/business/purpose/electronics.html">エレクトロニクス</a></li>
                              <li><a href="/business/purpose/medical.html">メディカル</a></li>
                              <li><a href="/business/purpose/cosmetics-health.html">コスメ・ヘルスケア</a></li>
                              <li><a href="/business/purpose/edl.html">Everyday Life</a></li>
                              <li><a href="/business/purpose/eco-energy.html">環境・エネルギー</a></li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="type4 js-globalNav_4 js-megadrop_trigger"><a href="/innovation/" className="a-toggle js-dropdown_toggle_trigger"><span className="nav_label">研究・開発</span></a>
              <div className="menu-megadrop js-megadrop_menu js-dropdown_toggle_panel">
                <div className="megadrop_container">
                  <div className="megadrop_heading">
                    <div className="megadrop_heading_title"><a href="/innovation/">研究・開発<span className="pc-hidden"> 一覧</span></a></div>
                  </div>
                  <div className="megadrop_content">
                    <div className="megadrop_column_layout" data-row-pc="3" data-row-sp="1">
                      <div className="megadrop_column_item">
                        <ul className="megadrop_link_text">
                          <li><a href="/innovation/message/"><span className="megadrop_link_label">事業創出本部長メッセージ</span></a></li>
                        </ul>
                      </div>
                      <div className="megadrop_column_item">
                        <ul className="megadrop_link_text">
                          <li><a href="/innovation/policy/"><span className="megadrop_link_label">研究開発方針と体制</span></a></li>
                        </ul>
                      </div>
                      <div className="megadrop_column_item">
                        <ul className="megadrop_link_text">
                          <li><a href="/innovation/cocreation/"><span className="megadrop_link_label">共創事例</span></a></li>
                        </ul>
                      </div>
                      <div className="megadrop_column_item type2">
                        <ul className="megadrop_link_text">
                          <li><a href="/innovation/ip/"><span className="megadrop_link_label">知的財産に関する取り組み</span></a></li>
                        </ul>
                      </div>
                      <div className="megadrop_column_item type2">
                        <ul className="megadrop_link_text">
                          <li><a href="/innovation/award/"><span className="megadrop_link_label">受賞・表彰</span></a></li>
                        </ul>
                      </div>
                      <div className="megadrop_column_item type2">
                        <ul className="megadrop_link_text">
                          <li><a href="/innovation/papers/"><span className="megadrop_link_label">発表論文</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="type5 js-globalNav_5"><a href="/sustainability/"><span className="nav_label">サステナビリティ</span></a></li>
            <li className="type5 js-globalNav_6"><a href="/ir/"><span className="nav_label">IR情報</span></a></li>
            <li className="type7 js-globalNav_7"><a href="/recruit/top.html"><span className="nav_label">採用情報</span></a></li>
          </ul>
        {/* <!--/header-nav--> */}
        </nav>
        <div className="header-menu js-dropdown_menu">
          <div className="menu_contents js-dropdown_menu_container"></div>
        {/* <!--/header-menu--> */}
        </div>
      {/* <!--/HeaderBody--> */}
      </div>
    {/* <!--/Header--> */}
    </header>
  );
};

export { SiteHeader };
