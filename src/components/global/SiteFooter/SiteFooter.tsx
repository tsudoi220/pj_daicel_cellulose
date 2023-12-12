import React from "react";
import type { ComponentProp } from "~/components/@types/Component";

import "./SiteFooter.scss";

type SiteFooterProps = {} & ComponentProp;

const SiteFooter = ({ classNames }: SiteFooterProps): JSX.Element | null => {
  return (
    <>
      <footer id="footer" className="Footer">
        {/* <div className="FooterGuide">
          <div className="footer-pagetop js-footer-pagetop _fixed">
            <a href="#header">ページ上部へ</a>
          </div>
        </div> */}
        <div id="footerBody" className="FooterBody">
          <div className="footer-identity">
            <div className="identity_logo"><a href="/"><img src="/common_img/cmn_logo01.png" alt="株式会社ダイセル" /></a></div>
          {/* <!--/footer-identity--> */}
          </div>
          <div className="footer-contents">
            <ul className="footer-link">
              <li><a href="/profile/network/group.html">国内グループ会社</a></li>
              <li><a href="/profile/network/foreign.html">海外グループ会社</a></li>
              <li><a href="/shayu/" target="_blank" className="a-blank">ダイセル社友会</a></li>
            </ul>
            <ul className="footer-link-v2">
              <li><a href="/personalinformation/">ダイセルグループ 個人情報保護方針（プライバシーポリシー）</a></li>
              <li><a href="/basicpolicy/">特定個人情報等の適正な取扱いに関する基本方針</a></li>
              <li><a href="/about/">利用条件</a></li>
              <li><a href="/sitemap/">サイトマップ</a></li>
            </ul>
          {/* <!--/footer-contents--> */}
          </div>
        {/* <!--/FooterBody--> */}
        </div>
        <div id="footerFoot" className="FooterFoot">
          <div className="footer-sns">
            <ul className="sns_list">
              <li><a href="https://www.youtube.com/channel/UCi-okVwAvVbSvAYC4Ei6BQw" target="_blank" rel="noopener" className="sns_type--youtube"><span className="sns_label"><img src="/common_img/cmn_youtube_ic01.png" alt="Daicel Channel" width="177" /></span></a></li>
            </ul>
          </div>
          <div className="footer-copyright">
            <small>&copy; 2020 Daicel Corporation</small>
          </div>
        {/* <!--/FooterFoot--> */}
        </div>
      {/* <!--/Footer--> */}
      </footer>
      <div className="gdpr-layout js-gdpr-popup">
        <div className="gdpr_title">Cookieの使用について</div>
        <div className="gdpr_content">
          <div className="gdpr_left">
            <p className="gdpr_text">当ウェブサイトでは、より快適にウェブサイトをご利用いただくため、Cookieを利用しております。当ウェブサイトをご覧いただく際は、Cookieの使用に同意ください。なお、このまま当ウェブサイトをご覧いただいた場合、Cookieの使用にご同意いただいたものとさせていただきます。</p>
            <p data-parts="typography">
              <a href="/about/index.html#anc-1" className="link" data-parts="typography"><span>詳細はこちら</span></a>
            </p>
          </div>
          <div className="gdpr_right">
            <p className="text-center" data-parts="typography">
              <a href="javascript:void(0);" className="btn btn-outline-primary link js-gdpr-popup_consent" data-parts="buttons"><span className="btn__label">同意する</span></a>
            </p>
          </div>
        </div>
      {/* <!--/gdpr-layout--> */}
      </div>
    </>
  );
};

export { SiteFooter };
