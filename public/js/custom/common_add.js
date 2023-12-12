/**
 * COMMON_ADD_add.js
 *
 * @namespace
 * @constructor
 * @module
 * @execution
 * @requires
 * - jquery.js
 */


/**
 * @namespace COMMON_ADD
 */
var COMMON_ADD = COMMON_ADD || {};


/**
 * @constructor Util
 */
COMMON_ADD.Util = function(){
  'use strict';
  this.$win = $(window);
  this.$doc = $(document);
  this.ua = navigator.userAgent.toLowerCase();
  this.ver = window.navigator.appVersion.toLowerCase();
  this.url = location.href;
  this.path = location.pathname.replace('index.html', '');
  this.dir = this.path.split('/');
  this.view = 1280;
  this.breakPoint1 = 767;
  this.state = {
    current: 'is-current',
    open: 'is-open',
    active: 'is-active',
    fixed: 'is-fixed',
    disabled: 'is-disabled',
    selected: 'is-selected'
  };
};

COMMON_ADD.Util.prototype = {
  /**
   * @method isRangeSP
   * @return {Boolean}
   */
  isRangeSP: function(){
    'use strict';
    var clientW = document.documentElement.clientWidth,
        winW = window.innerWidth ? window.innerWidth : (this.$win.width() ? this.$win.width() : clientW);
    return (winW <= this.breakPoint1) ? true : false;
  },
  /**
   * @method isRangePC
   * @return {Boolean}
   */
  isRangePC: function(){
    'use strict';
    var clientW = document.documentElement.clientWidth,
        winW = window.innerWidth ? window.innerWidth : (this.$win.width() ? this.$win.width() : clientW);
    return (this.breakPoint1 < winW) ? true : false;
  },
  /**
   * @method deviceChecker
   * @return {String}
   */
  deviceChecker: function(){
    'use strict';
    if(this.ua.indexOf('iphone') !== -1) { return 'iphone'; }
    else if(this.ua.indexOf('ipod') !== -1) { return 'ipod'; }
    else if(this.ua.indexOf('ipad') !== -1) { return 'ipad'; }
    else if(this.ua.indexOf('android') !== -1 && this.ua.indexOf('mobile') !== -1) { return 'android mobile'; }
    else if(this.ua.indexOf('android') !== -1 && this.ua.indexOf('mobile') === -1) { return 'android tablet'; }
    else if(this.ua.indexOf('windows phone') !== -1) { return 'windows phone'; }
    else { return 'desktop'; }
  },
  /**
   * @method isMobile
   * @return {Boolean}
   */
  isMobile: function(){
    'use strict';
    return (this.deviceChecker() === 'iphone' || this.deviceChecker() === 'ipod' || this.deviceChecker() === 'android mobile' || this.deviceChecker() === 'windows phone') ? true : false;
  },
  /**
   * @method isTablet
   * @return {Boolean}
   */
  isTablet: function(){
    'use strict';
    return (this.deviceChecker() === 'ipad' || this.deviceChecker() === 'android tablet') ? true : false;
  },
  /**
   * @method isDesktop
   * @return {Boolean}
   */
  isDesktop: function(){
    'use strict';
    return (!this.isMobile() && !this.isTablet()) ? true : false;
  },
  /**
   * @method isBrowser
   * @param {String}
   * @return {Boolean}
   */
  isBrowser: function(_browser){
    'use strict';
    var browser = ['chrome', 'safari', 'firefox', 'edge', 'ie11'],
        browser_old = ['ie8', 'ie9', 'ie10'];
    switch(_browser){
      case browser[0]: return(this.ua.indexOf('chrome')  !== -1 && this.ua.indexOf('edge') === -1) ? true : false;
      case browser[1]: return(this.ua.indexOf('safari')  !== -1 && this.ua.indexOf('chrome') === -1) ? true : false;
      case browser[2]: return(this.ua.indexOf('firefox') !== -1) ? true : false;
      case browser[3]: return(this.ua.indexOf('edge') !== -1) ? true : false;
      case browser[4]: return((this.ua.indexOf('rv 11') !== -1 || this.ua.indexOf('rv:11') !== -1) && (this.ua.indexOf('trident') !== -1)) ? true : false;
      case browser_old[0]: return (this.ver.indexOf('msie 8') !== -1) ? true : false;
      case browser_old[1]: return (this.ver.indexOf('msie 9') !== -1) ? true : false;
      case browser_old[2]: return (this.ver.indexOf('msie 10') !== -1) ? true : false;
      default: return false;
    }
  },
  /**
   * @method isFontSizeWatch
   * @param {function}
   * @return {Boolean}
   */
  isFontSizeWatch: function(callback){
    'use strict';
    var $elm,
        $body = $('body'),
        watchName = 'js-fontSizeWatch',
        currentH = 0,
        interval = 500,
        HTML_FS_WATCH = $('<div class="' + watchName + '">&nbsp;</div>'),
        CSS_FS_WATCH = { position: 'absolute', top: '0', display: 'block', padding: '0', visibility: 'hidden' };
    // 監視用HTMLを生成する
    if(!$('.' + watchName).length){
      HTML_FS_WATCH.css(CSS_FS_WATCH).appendTo($body);
    }
    $elm = $('.' + watchName);
    // 要素の高さを取得
    var getHeight = function($elm){ return $elm.height(); };
    // 要素の高さを比較して、異なればcallbackを実行
    var watching = function(){
      var h = getHeight($elm);
      if(h === currentH){
        return false;
      } else {
        currentH = h;
        callback();
      }
    };
    setInterval(watching, interval);
  },
  /**
   * @method isWindowSizeWatch
   * @param {function}
   * @return {Boolean}
   */
  isWindowSizeWatch: function(callback){
    'use strict';
    var resize = false,
        interval = 500;
    this.$win.on('resize', function(){
      // リサイズされている間は何もしない
      if(resize !== false){ clearTimeout(resize); }
      resize = setTimeout(function(){
        callback();
      }, interval);
    });
  }
};


/**
 * @module
 */
COMMON_ADD.module = function(){
  'use strict';
  var u = new COMMON_ADD.Util();
  return {
    /**
     * @method initialize
     * - 初期化
     */
    initialize: function(){
      //this.officerProfile();  // onLoad
      this.respondBrowser();
      this.floatButton();
      this.agreementValidate();
      this.mobilityPopup();
      this.gdprPopup();
      this.footerPageTop();
    },
    /**
     * @method respondBrowser
     * - ブラウザ対応
     */
    respondBrowser: function(){
      // IE11バグ対応
      if (u.isBrowser('ie11')) {
        $('.Main, .MainBody, .mainWrap, .pageContents').css('min-height', '0%');
      }
    },
    
    /**
     * @method officerProfile
     * - 役員 開閉パネル
     */
    officerProfile: function(config){
      // options
      var c = $.extend({
        officerProfile: '.js-officerProfile',
        officerProfileBox: '.js-officerProfile_box',
        officerProfileText: '.js-officerProfile_text',
        officerProfileOpen: '.js-officerProfile_open',
        officerProfileColse: '.js-officerProfile_close',
        officerProfileDetail: '.js-officerProfile_detail',
        officerProfileFrame: '.js-officerProfile_frame',
        officerProfileSwitcher: '.js-officerProfile_switch',
        officerProfileOutputText: '.js-officerProfile_output_text',
        officerProfileOutputFrame: '.js-officerProfile_output_frame',
        officerProfileNameOpen: 'is-open'
      }, config);
      // var
      var container = c.officerProfile,
      box = c.officerProfileBox,
      text = c.officerProfileText,
      detail = c.officerProfileDetail,
      frame = c.officerProfileFrame,
      switcher = c.officerProfileSwitcher,
      btnOpen = c.officerProfileOpen,
      btnClose = c.officerProfileColse,
      outputText = c.officerProfileOutputText,
      outputFrame = c.officerProfileOutputFrame,
      nameOpen = c.officerProfileNameOpen;
      // exit
      if($(container).length === 0){ return false; }
      // control
      if(u.isRangeSP()){
        $(container).each(function(){
          // var
          var $box = $(box, this),
          $frame = $(frame, this);
          // setting
          $frame.hide();
          // control
          $box.each(function(){
            // var
            var $this = $(this),
            $detail = $(detail, this),
            $switcher = $(switcher, this);
            $detail.hide();
            // trigger
            $switcher.click(function(){
              if($this.hasClass(u.state.active)){
                $this.removeClass(u.state.active);
                $detail.slideUp();
              }else{
                $this.addClass(u.state.active);
                $detail.slideDown();
              }
            });
          });
        });
      }else{
        $(container).each(function(){
          // var
          var $container = $(this),
          $box = $(box, this),
          $frame = $(frame, this),
          $outputFrame = $(outputFrame, this),
          outputFramePadding = 32 * 2; // 上下余白＋上下罫線
          // control
          $box.each(function(){
            // var
            var $this = $(this),
            $text = $(text, this),
            $detail = $(detail, this),
            $btnOpen = $(btnOpen, this),
            $btnClose = $(btnClose, this),
            $outputText = $(outputText, this),
            index = $(this).index();
            // setting
            $text.clone().prependTo($outputText);
            $detail.appendTo($outputFrame);
            $outputFrame.find(detail).hide();
            // trigger
            $this.mouseenter(function(){
              $this.addClass(u.state.active);
            }).mouseleave(function(){
              $this.removeClass(u.state.active);
            });
            $btnOpen.click(function(){
              var $targetDetail = $outputFrame.find(detail).eq(index);
              $container.stop().addClass(nameOpen).siblings().stop().removeClass(nameOpen).find(btnClose, u.state.current).trigger('click');
              $this.stop().addClass(u.state.current).siblings().stop().removeClass(u.state.current);
              $targetDetail.stop().show().siblings().stop().hide();
              $frame.stop().animate({
                height: $targetDetail.outerHeight() + outputFramePadding
              });
            });
            $btnClose.click(function(){
              $container.stop().removeClass(nameOpen);
              $this.stop().removeClass(u.state.current);
              $outputFrame.find(detail).stop().hide();
              $frame.stop().animate({
                height: 0
              });
            });
          });
        });
      }
      $(window).on('orientationchange', function() {
        // 画面の向き変更時に発火
        if (u.isMobile()){
          location.reload(false);
        }
      });
    },
    /**
     * @method floatButton
     * - 追従ボタン
     */
    floatButton: function(config){
      // options
      var c = $.extend({
        floatButtonWrap: '.js-float-button',
        floatButtonContent: '.js-float-button__content'
      }, config);
      // var
      var elm = c.floatButtonWrap,
          button = c.floatButtonContent,
          $elm = $(elm),
          $button = $(button),
          activeClass = 'active';
      // exit
      if($elm.length === 0){ return false; }
      // control
      
      var elmHeight = $elm.outerHeight(),
          elmPosition = '',
          scrollPosition = '';
      
      $elm.css('height', elmHeight);
      
      var getPosition = function(){
            elmPosition = $elm.offset().top + elmHeight;
            scrollPosition = $(window).height() + $(window).scrollTop();
          }
      
      getPosition();

      if ( scrollPosition >= elmPosition ) {
        $button.addClass('show');
      }

      $(window).on('scroll', function() {
        getPosition();
        if ($(this).scrollTop() > 200) {
          $button.addClass(activeClass);
          $button.addClass('show');
        } else {
          $button.removeClass(activeClass);
        }
        
        if ( scrollPosition >= elmPosition ) {
          $button.removeClass(activeClass);
        } else {
          $button.addClass(activeClass);
        }
      });
    },
    /**
     * @method agreementValidate
     * - 同意チェック
     */
    agreementValidate: function(config){
      // options
      var c = $.extend({
        factorElement: '.js-agreement-submit',
        requiredElement: '.js-agreement-submit__required',
        disabledElement: '.js-agreement-submit__disable',
        confirmElement: '.js-agreement-submit__confirm',
        enterdName: 'form-enterd'
      }, config);
      // vars
      var $elm = $(c.factorElement),
          $required = $(c.requiredElement),
          requiredLen = $required.length,
          $disabled = $(c.disabledElement),
          $confirm = $(c.confirmElement),
          enterdName = c.enterdName;
      // exit
      if($elm.length === 0){ return false; }
      // function
      var requiredCheck = function(){
        var enterdLen = $('.' + enterdName).length;
        if(requiredLen === enterdLen){
          $confirm.show();
          $disabled.hide();
        } else {
          $confirm.hide();
          $disabled.show();
        }
      };
      // function checkbox
      var checkValidate = function(_$self,_$check,_$hidden){
        if(_$check.length){
          var checkLen = _$self.find('input[type="checkbox"]:checked').length;
          if(checkLen !== 0){
            _$self.addClass(enterdName);
            _$hidden.val('1');
          } else {
            _$self.removeClass(enterdName);
            _$hidden.val('0');
          }
          requiredCheck();
        }
      };
      $required.each(function(){
        var $self = $(this),
            $check = $self.find('input[type="checkbox"]'),
            $hidden = $self.find('input[type="hidden"]');
        // init
        checkValidate($self,$check,$hidden);

        //control
        $check.on('change', function(){
          checkValidate($self,$check,$hidden);
        });
      });
    },
    /**
     * @method mobilityPopup
     * -モビリティ ポップアップ制御
     */
    mobilityPopup: function(config){
      // options
      var c = $.extend({
        popupWrap: '.js-purpose-popup',
        popupTrigger: '.js-purpose-popup_trigger',
        popupContents: '.js-purpose-popup_contents',
        popupItem: '.js-purpose-popup_item',
        popupClose: '.js-purpose-popup_close'
      }, config);
      // var
      var elm = c.popupWrap,
          button = c.popupTrigger,
          content = c.popupContents,
          item = c.popupItem,
          close = c.popupClose,
          overlay = '.popup-overlay',
          activeClass = 'active',
          speed = 250;
      // exit
      if($(elm).length === 0 || u.isRangeSP()){ return false; }
      // control
      $('body').append('<div class="popup-overlay"></div>');
      
      // init
      $(button).on('click', function(){
        var self = $(this),
            selfId = self.attr('id').split('-')[1],
            selfPositionX = self.position().left + 28,
            selfPositionY = self.position().top,
            popupitem = $(content).find('#popup-' + selfId);
        self.toggleClass(activeClass);
        popupitem.toggleClass(activeClass),
        $(content).css({top: selfPositionY, left: selfPositionX});
        $(overlay).fadeToggle(speed);
      });
      
      $(overlay).on('click', function(){
        $(button).removeClass(activeClass);
        $(item).removeClass(activeClass);
        $(overlay).fadeOut(speed);
      });
      
      $(close).on('click', function(){
        $(button).removeClass(activeClass);
        $(item).removeClass(activeClass);
        $(overlay).fadeOut(speed);
      });
    },
    /**
     * @method gdprPopup
     * -GDPRポップアップ制御
     */
    gdprPopup: function(config){
      // options
      var c = $.extend({
        factorElement: '.js-gdpr-popup',
        consentTrigger: '.js-gdpr-popup_consent',
        cookieName: 'gdprConsent_jp',
        cookieExpires: 7 //日
      }, config);
      // var
      var elm = c.factorElement,
          trigger = c.consentTrigger,
          $body = $('body'),
          cookieName = c.cookieName,
          cookieExpires = c.cookieExpires;
      // exit
      if($(elm).length === 0){ return false; }
      // function
      var bodyPaddingSet = function(){
        if($(elm).is(':visible')){
          var popupHeight = $(elm).outerHeight(true);
          $body.css({'padding-bottom': popupHeight + 'px'});
        }
      };
      // setting
      if(document.cookie.indexOf(cookieName) === -1){
        $(elm).show();
        bodyPaddingSet();
        u.isWindowSizeWatch(bodyPaddingSet);
      } else {
        $(elm).hide();
        $body.css({'padding-bottom': 0});
      }
      // event
      $(trigger).on('click', function(){
        var date = new Date();
        date.setDate(parseInt(date.getDate() + cookieExpires));
        document.cookie = cookieName + '=1; path=/; expires=' + date.toUTCString();
        $(elm).hide();
        $body.css({'padding-bottom': 0});
        return false;
      });
    },
    /**
     * @method footerPageTop
     * -フッターページトップボタン制御
     */
    footerPageTop: function(config){
      // options
      var c = $.extend({
        factorElement: '.js-footer-pagetop'
      }, config);
      // var
      var elm = c.factorElement,
          activeH = 700,
          scrollTop;
      // exit
      if($(elm).length === 0){ return false; }
      // setting
      scrollTop = u.$win.scrollTop();
      if(activeH > scrollTop){
        $(elm).hide()
      }
      // event
      u.$win.on('scroll', function(){
        scrollTop = u.$win.scrollTop();
        if(scrollTop > activeH){
          $(elm).fadeIn()
        } else {
          $(elm).fadeOut()
        }
      })
    }
  };
}();


/**
 * @execution
 */
$(function(){
  'use strict';
  var u = new COMMON_ADD.Util();
  // onReady
  COMMON_ADD.module.initialize();
  
  // アンカーリンク個別対応
  $('a[href^="/business/#anc-"]').on('click', function (e) {
    if (u.path === '/business/') {
      var thisHref = $(this).attr('href');
      e.preventDefault();
      window.location.href = thisHref;
      location.reload();
    }
  });
});

$(window).on('load', function(){
  'use strict';
  
  // onLoad
  COMMON_ADD.module.officerProfile();
});

