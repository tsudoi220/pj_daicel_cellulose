/**
 * news.js
 *
 * @requires
 * - jquery.js
 * - slick.js
 */

/* -------------------------------------------
 * @init
------------------------------------------- */
$(function() {
  'use strict';
  var u = new COMMON_ADD.Util();
  $.newsTabs();
});
/* -------------------------------------------
 * @functon
------------------------------------------- */

(function($){
  'use strict';
  var u = new COMMON_ADD.Util();
  
  $.newsTabs = function(){
    // vars
    var $elm = $('.news-tabs'),
        navHeaderName = '.news-tabs__header',
        navSelectName = '.news-tabs__select',
        navBarName = 'news-tabs__bar',
        navBarSrc = '<li class="' + navBarName + '"><span class="sr-only">Active</span></li>',
        navTriggerName = '.news-tabs__trigger',
        $navTrigger = $elm.find(navTriggerName),
        navPanelWrapName = '.news-tabs__contents',
        $navPanelWrap = $elm.find(navPanelWrapName),
        $article = $elm.find('.list__item'),
        category = 'data-news-category',
        activeName = u.state.active,
        lSpeed = 500,
        sSpeed = 300,
        bp1 = u.breakPoint1 + 1;
        
    // exit
    if($elm.length === 0){ return false; }
    
    // setting HTML生成
    $navTrigger.each(function(){
      var $this_list = $(this),
          list_category = $this_list.attr(category),
          categoryHTML = '';
      if(list_category !== 'all'){
        $article.each(function(){
          var $this_article = $(this),
              article_category = $this_article.attr(category);
          if(list_category === article_category){
            var articleHTML = $this_article.prop('outerHTML');
            categoryHTML += articleHTML;
          }
        });
        var panelHTML = '<div class="news-tabs__detail" ' + category + '="' + list_category + '"><div class="news__body"><div class="news__list">' + categoryHTML + '</div></div></div>';
        $navPanelWrap.append(panelHTML);
      }
    });
    
    // function トリガーの幅取得
    function fetchTriggerWidth(_wrap){
      var elm = _wrap.find(navTriggerName),
          arr = [0],
          sum = 0;
      elm.each(function(){
        sum += $(this).outerWidth();
        arr.push(sum);
      });
      return arr;
    }
    // function アクティブバーの幅取得
    function fetchBarWidth(_bar){
      var w = _bar.outerWidth();
      return w;
    }
    // function アクティブバーの幅指定
    function addBarWidth(_wrap){
      _wrap.find('.' + navBarName).css('width', fetchBarWidth(_wrap.find('.' + activeName)));
    }
    // function アクティブバーの配置
    function deployBar(_wrap, _w) {
      _wrap.find('.' + navBarName).animate({
        width: _wrap.find('.' + activeName).outerWidth(),
        left: _w,
      }, sSpeed);
    }
    // function アクティブバーの初期化
    function initBar(_wrap, _w, _nth){
      addBarWidth(_wrap);
      deployBar(_wrap, _w[_nth]);
    }
    // function スワイプ時のヘッダ移動
    function moveHeader(_wrap, _btn, _next){
      var tabQuantity = _btn.length;
      var tabExtraDistance = _wrap.find(navSelectName).width() - _wrap.find(navHeaderName).width();
      var scrollDestination = (tabExtraDistance / (tabQuantity - 1)) * (_next);
      _wrap.find(navHeaderName).animate({ scrollLeft: scrollDestination }, 'fast');
    }
    
    // exclude アクティブバーの挿入
    if($elm.find('.' + navBarName).length === 0){
      $elm.find(navSelectName).append(navBarSrc);
    }
    // exclude デフォルトアクティブクラスの付与
    if(!$elm.find(navTriggerName).hasClass(activeName)){
      $elm.find(navTriggerName).eq(0).addClass(activeName);
    }
    
    // init
    var w = fetchTriggerWidth($elm),
        nth = $elm.find('.' + activeName).index();
    initBar($elm, w, nth);
    $navPanelWrap.slick({
      arrows: false,
      speed: lSpeed,
      swipe: false,
      adaptiveHeight: true,
      initialSlide: nth,
      lazyLoad: 'ondemand',
      responsive: [{
        breakpoint: bp1,
        settings: {
          speed: sSpeed,
          swipe: false,
        },
      }],
    });
    
    // control クリック時
    $navTrigger.on('click', function (){
      nth = $navTrigger.index(this);
      $navTrigger.removeClass(activeName);
      $navTrigger.eq(nth).addClass(activeName);
      deployBar($elm, w[nth]);
      moveHeader($elm, $navTrigger, nth);
      $navPanelWrap.slick('slickGoTo', nth);
    });
    // control リサイズ時
    u.isWindowSizeWatch(function(){
      w = fetchTriggerWidth($elm);
      nth = $elm.find('.' + activeName).index();
      initBar($elm, w, nth);
      if(u.isRangeSP()){
        moveHeader($elm, $navTrigger, nth);
      }
    });
  };
})(jQuery);

