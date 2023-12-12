/**
 * home.js
 *
 * @requires
 * - jquery.js
 */

const u = new COMMON_ADD.Util();

/* prefix */
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
  function (callback) {
      window.setTimeout(callback, 1000 / 60);
  };
})();



/* JSONの取得 */
const getNews = $.ajax({
  type: 'GET',
  url: '/news/json/top.json',
  dataType: 'json',
});
const getExhibition = $.ajax({
  type: 'GET',
  url: '/news/json/exhibition.json',
  dataType: 'json',
});


/**
  * @module
  */
/**
* @method homeHero
*/
function homeHero(config) {
  // options
  const c = $.extend({
    factorElement: '.js-home-hero',
    carouselElement: '.js-home-hero__carousel',
    listElement: '.js-home-hero__carousel__list',
    controlElement: '.js-home-hero__carousel__control',
    pagerElement: '.js-home-hero__carousel__pager',
    arrowElement: '.js-home-hero__carousel__arrow',
    pauseElement: '.js-home-hero__carousel__pause',
    playElement: '.js-home-hero__carousel__play',
  }, config);

  // vars
  const $elm = $(c.factorElement);
  const list = c.listElement;
  const control = c.controlElement;
  const pager = c.pagerElement;
  const arrow = c.arrowElement;
  const pause = c.pauseElement;
  const play = c.playElement;
  const bp1 = u.breakPoint1 + 1;
  const autoplay = true;

  // exit
  if ($elm.length === 0) { return false; }

  const carouselControl = function () {
    // function
    const controlDisplay = function (_self, _carouselNum, _pcSlideNum, _spSlideNum) {
      const minLength = u.isRangePC() ? _pcSlideNum : _spSlideNum;
      if (minLength >= _carouselNum) {
        _self.find(control).hide();
        _self.find(play).show();
      } else {
        _self.find(control).show();
        _self.find(play).hide();
      }
      if (autoplay) {
        _self.find(play).hide();
        _self.find(pause).show();
      } else {
        _self.find(pause).hide();
        _self.find(play).show();
      }
    };
    // init
    $elm.each(function () {
      const self = $(this);
      const carousel = self.find(list);
      const carouselNum = self.find(list).find(' > *').length;
      const pcSlideNum = 1;
      const spSlideNum = 1;
      carousel.slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: autoplay,
        autoplaySpeed: 4500,
        speed: 800,
        lazyLoad: 'ondemand',
        appendDots: self.find(pager),
        appendArrows: self.find(arrow),
        slidesToShow: pcSlideNum,
        slidesToScroll: pcSlideNum,
        swipe: true,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: bp1,
            settings: {
              slidesToShow: spSlideNum,
              slidesToScroll: spSlideNum,
            },
          },
        ],
      });
      if (self.find(control).length !== 0) {
        controlDisplay(self, carouselNum, pcSlideNum, spSlideNum);
        let breakFlg = u.isRangeSP();
        u.isWindowSizeWatch(() => {
          const checkFlg = u.isRangeSP();
          if (checkFlg !== breakFlg) {
            controlDisplay(self, carouselNum, pcSlideNum, spSlideNum);
            breakFlg = checkFlg;
          }
        });
      }
    });
    // control
    $(pause).on('click', function () {
      const thisPause = $(this);
      const wrap = thisPause.parents(c.carouselElement);
      const thisList = wrap.find(list);
      const thisPlay = wrap.find(play);
      thisList.slick('slickPause');
      thisPause.hide();
      thisPlay.show();
    });
    // control
    $(play).on('click', function () {
      const thisPlay = $(this);
      const wrap = thisPlay.parents(c.carouselElement);
      const thisList = wrap.find(list);
      const thisPause = wrap.find(pause);
      thisList.slick('slickPlay');
      thisPlay.hide();
      thisPause.show();
    });
  };
  carouselControl();
}

/**
* @method homeNewsTicker
*/
function homeNewsTicker(config) {
  // options
  const c = $.extend({
    factorElement: '.js-home-news-ticker',
    listElement: '.js-home-news-ticker__list',
    controlElement: '.js-home-news-ticker__control',
    arrowElement: '.js-home-news-ticker__arrow',
  }, config);

  // vars
  const $elm = $(c.factorElement);
  const list = c.listElement;
  const control = c.controlElement;
  const arrow = c.arrowElement;
  const bp1 = u.breakPoint1 + 1;
  const maxLength = 5;

  // exit
  if ($elm.length === 0) { return false; }

  const carouselControl = function () {
    // function
    const controlDisplay = function (_self, _carouselNum, _pcSlideNum, _spSlideNum) {
      const minLength = u.isRangePC() ? _pcSlideNum : _spSlideNum;
      if (minLength >= _carouselNum) {
        _self.find(control).hide();
      } else {
        _self.find(control).show();
      }
    };
    // init
    $elm.each(function () {
      const self = $(this);
      const carousel = self.find(list);
      const carouselNum = self.find(list).find(' > *').length;
      const pcSlideNum = 1;
      const spSlideNum = 1;
      carousel.slick({
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        appendArrows: self.find(arrow),
        slidesToShow: pcSlideNum,
        slidesToScroll: pcSlideNum,
        swipe: false,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: bp1,
            settings: {
              slidesToShow: spSlideNum,
              slidesToScroll: spSlideNum,
              swipe: true,
            },
          },
        ],
      });
      if (self.find(control).length !== 0) {
        controlDisplay(self, carouselNum, pcSlideNum, spSlideNum);
        let breakFlg = u.isRangeSP();
        u.isWindowSizeWatch(() => {
          const checkFlg = u.isRangeSP();
          if (checkFlg !== breakFlg) {
            controlDisplay(self, carouselNum, pcSlideNum, spSlideNum);
            breakFlg = checkFlg;
          }
        });
      }
    });
  };

  // json処理;
  $.when(
    getNews,
  ).done((data) => {
    let LIST_HTML;
    if (data.length !== 0) {
      // setting:記事の生成
      for (let i=0; i<data.length; i++){
        if (i === maxLength){
          break;
        }
        LIST_HTML = '';
        // vars
        const {
          title, date, category, url, blank, pdf, size,
        } = data[i];
        let typeStartTag;
        let typeEndTag;
        let isSize = '';
        const dateReplace = date.replace(/(\d{4})年(\d{1,2})月(\d{1,2})日/, '$1-$2-$3');
        const dateArray = dateReplace.split('-');
        const y = dateArray[0];
        const m = dateArray[1];
        const d = dateArray[2];
        const y0 = ('000' + y).slice(-4);
        const m0 = ('0' + m).slice(-2);
        const d0 = ('0' + d).slice(-2);
        const dateTime = y0 + '-' + m0 + '-' + d0;

        if (url) {
          if (pdf === 'T') {
            typeStartTag = `<a href="${url}" target="_blank" rel="noopener" class="article__type--pdf">`;
            typeEndTag = '</a>';
            isSize  = '［PDF：'+ size +'］';
          } else if (blank === 'T') {
            typeStartTag = `<a href="${url}" target="_blank" rel="noopener" class="article__type--blank">`;
            typeEndTag = '</a>';
          } else {
            typeStartTag = `<a href="${url}" class="article__type">`;
            typeEndTag = '</a>';
          }
        } else {
          typeStartTag = '<div class="article__type--nolink">';
          typeEndTag = '</div>';
        }

        /* HTML生成 */
        LIST_HTML = `<article class="home-news-ticker__article">
                      ${typeStartTag}
                        <div class="article__property">
                          <time class="article__time" datetime="${dateTime}">${date}</time>
                          ${category ? `<span class="article__category">${category}</span>` : ``}
                        </div>
                        <div class="article__detail">
                          <h2 class="article__title">${title}${isSize}</h2>
                        </div>
                      ${typeEndTag}
                    </article>`;
        $(list).append(LIST_HTML);
      };
      const $listItem = $(list).children();
      if ($listItem.length === 0) {
        /* 0件時の処理 */
        $elm.remove();
      } else {
        /* カルーセルの実行 */
        carouselControl();
      }
    } else {
      /* 0件時の処理 */
      $elm.remove();
    }
  }).fail(() => {
    /* JSON読み込み失敗時の処理 */
    $elm.remove();
  });
}

/**
* @method homeCanvas
*/
function homeCanvas(config) {
  // options
  const c = $.extend({
    factorElement: '.js-home-canvas',
    containerElement: '.js-home-canvas__container',
  }, config);

  // vars
  const $elm = document.querySelectorAll(c.factorElement);

  // exit
  if ($elm.length === 0) { return false; }

  $elm.forEach(function(elm) {
    const canvas = elm.querySelector(c.containerElement);
    const dataDensity = elm.getAttribute('data-density');
    const dataMaxSize = elm.getAttribute('data-maxsize');
    const ctx = canvas.getContext('2d');

    let dots = [];      // パーティクル配列
    const density = u.isRangePC() ? dataDensity : Math.abs(Math.floor(dataDensity/2));  //パーティクルの数
    const colors = ['#ffffff', '#009ce5', '#e50012', '#afacad', '#7b7b7b', '#221714'];  //パーティクルの色
    const colorsLength = colors.length;  //色の数
    const baseSize = 10;   // 大きさ
    const maxSize = u.isRangePC() ? dataMaxSize : Math.abs(Math.floor(dataMaxSize/2));   // 最大サイズ
    const baseSpeed = 10; // スピード

    //円の大きさの調整
    const sizeAdjust = function(SIZE){
      const mathSize = Math.abs(Math.floor((Math.random() * SIZE) - (Math.random() * (SIZE / 2)))) + baseSize;
      const adjustSize = mathSize > SIZE ? mathSize - baseSize : mathSize;
      return adjustSize;
    }

    let Dot = function () {
      this.size = sizeAdjust(maxSize); //大きさ
      this.color = colors[~~(Math.random() * colorsLength)]; //色
      this.speed = baseSpeed / this.size * 1.1; // 大きさによって速度変更
      this.pos = {   // 位置
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
      };
      var rot = Math.random() * 360;  // ランダムな角度
      var angle = rot * Math.PI / 180;

      this.vec = {    // 移動方向
        x: Math.cos(angle) * this.speed,
        y: Math.sin(angle) * this.speed
      };
    };
    Dot.prototype = {
      update: function() {
        this.draw();

        this.pos.x += this.vec.x;
        this.pos.y += this.vec.y;

        // 画面外に出たら反対へ再配置
        if(this.pos.x > canvas.width + 100) {
          this.pos.x = -50;
        } else if(this.pos.x < 0 - 100) {
          this.pos.x = canvas.width + 50;
        } else if(this.pos.y > canvas.height + 100) {
          this.pos.y = -50;
        } else if(this.pos.y < 0 - 100) {
          this.pos.y = canvas.height + 50;
        }
      },

      draw: function() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI, false);
        ctx.fill();
      }
    };

    function update() {
      requestAnimFrame(update);
      // 描画をクリアー
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      for (var i = 0; i < density; i++) {
        dots[i].update();
      }
    }

    function init() {
      // canvasにコンテンツサイズをセット
      canvas.setAttribute("width", elm.offsetWidth);
      canvas.setAttribute("height", elm.offsetHeight);

      // densityの数だけパーティクルを生成
      for (var i = 0; i < density; i++) {
        dots.push(new Dot());
      }
      update();
    }
    init();
  });
}

/**
* @method homeAbout
*/
function homeAbout(config) {
  // options
  const c = $.extend({
    factorElement: '.js-home-about',
    triggerElement: '.js-home-about__trigger',
  }, config);

  // vars
  const $elm = $(c.factorElement);
  const closeName = 'is-close';

  // exit
  if ($elm.length === 0) { return false; }

  const $trigger = $elm.find(c.triggerElement);

  $trigger.on('click', () => {
    if($elm.hasClass(closeName)) {
      $elm.removeClass(closeName);
    } else {
      $elm.addClass(closeName);
    }
  });
}

/**
* @method homeMiraiSlider
*/
function homeMiraiSlider(config) {
  // options
  const c = $.extend({
    factorElement: '.js-home-mirai-swiper',
    listElement: '.js-home-mirai-swiper__list',
    controlElement: '.js-home-mirai-swiper__control',
    scrollbarElement: '.js-home-mirai-swiper__scrollbar',
    prevElement: '.js-home-mirai-swiper__prev',
    nextElement: '.js-home-mirai-swiper__next',
  }, config);

  // vars
  const $elm = $(c.factorElement);
  const evenName = 'is-even';
  const onlyName = 'is-only';
  const dragName = 'scrollbar__drag';
  const breakPoint = u.breakPoint1 + 1;

  // exit
  if ($elm.length === 0) { return false; }

  //スライド要素の個数によってclassを付与
  const slideLength = $elm.find(`${c.listElement} > *`).length;
  if (slideLength % 2 === 0) {
    $elm.addClass(evenName);
  } else {
    $elm.removeClass(evenName);
  }
  if (slideLength <= 1) {
    $elm.addClass(onlyName);
  } else {
    $elm.removeClass(onlyName);
  }

  //swiperの実行
  const swiper = new Swiper(c.factorElement, {
    slidesPerView: 'auto',
    freeMode: true,
    allowTouchMove: true,
    grid: {
      rows: 2,
    },
    spaceBetween: 0,
    scrollbar: {
      el: c.scrollbarElement,
      hide: false,
      draggable: true,
      dragClass: dragName,
      dragSize: 7,
      snapOnRelease: false
    },
    navigation: {
      prevEl: c.prevElement,
      nextEl: c.nextElement,
    },
    breakpoints: {
      [breakPoint]: {
        scrollbar: {
          dragSize: 9,
        },
      },
    },
  });
}

/**
* @method homeNewsList
*/
function homeNewsList(config) {
  // options
  const c = $.extend({
    factorElement: '.js-home-news-list',
  }, config);

  // vars
  const $elm = $(c.factorElement);
  const maxLength = 5;

  // exit
  if ($elm.length === 0) { return false; }

  // json処理;
  $.when(
    getNews,
  ).done((data) => {
    let LIST_HTML;
    if (data.length !== 0) {
      // setting:記事の生成
      for (var i=0; i<data.length; i++){
        if (i === maxLength){
          break;
        }
        LIST_HTML = '';
        // vars
        const {
          title, date, category, url, blank, pdf, size,
        } = data[i];
        let typeStartTag;
        let typeEndTag;
        let isSize = '';
        const dateReplace = date.replace(/(\d{4})年(\d{1,2})月(\d{1,2})日/, '$1-$2-$3');
        const dateArray = dateReplace.split('-');
        const y = dateArray[0];
        const m = dateArray[1];
        const d = dateArray[2];
        const y0 = ('000' + y).slice(-4);
        const m0 = ('0' + m).slice(-2);
        const d0 = ('0' + d).slice(-2);
        const dateTime = y0 + '-' + m0 + '-' + d0;

        if (url) {
          if (pdf === 'T') {
            typeStartTag = `<a href="${url}" target="_blank" rel="noopener" class="article__type--pdf">`;
            typeEndTag = '</a>';
            isSize  = '［PDF：'+ size +'］';
          } else if (blank === 'T') {
            typeStartTag = `<a href="${url}" target="_blank" rel="noopener" class="article__type--blank">`;
            typeEndTag = '</a>';
          } else {
            typeStartTag = `<a href="${url}" class="article__type">`;
            typeEndTag = '</a>';
          }
        } else {
          typeStartTag = '<div class="article__type--nolink">';
          typeEndTag = '</div>';
        }

        /* HTML生成 */
        LIST_HTML = `<article class="home-news__article">
                      ${typeStartTag}
                        <div class="article__property">
                          <time class="article__time" datetime="${dateTime}">${date}</time>
                          ${category ? `<span class="article__category">${category}</span>` : ``}
                        </div>
                        <div class="article__detail">
                          <h2 class="article__title">${title}${isSize}</h2>
                        </div>
                      ${typeEndTag}
                    </article>`;
        $elm.append(LIST_HTML);
      };
      const $listItem = $elm.children();
      if ($listItem.length === 0) {
        /* 0件時の処理 */
        $elm.remove();
      }
    } else {
      /* 0件時の処理 */
      $elm.remove();
    }
  }).fail(() => {
    /* JSON読み込み失敗時の処理 */
    $elm.remove();
  });
}

/**
* @method homeExhibition
*/
function homeExhibition(config) {
  // options
  const c = $.extend({
    factorElement: '.js-home-exhibition',
  }, config);

  // vars
  const $elm = $(c.factorElement);
  const maxLength = 1;

  // exit
  if ($elm.length === 0) { return false; }

  // json処理;
  $.when(
    getExhibition,
  ).done((data) => {
    let LIST_HTML;
    if (data.length !== 0) {
      // setting:記事の生成
      for (var i=0; i<data.length; i++){
        if (i === maxLength){
          break;
        }
        LIST_HTML = '';
        // vars
        const {
          title, url, image, period, place, lead, blank, pdf, size,
        } = data[i];
        let typeStartTag;
        let typeEndTag;
        let imageHtml;
        let periodHtml;
        let placeHtml;
        let leadHtml;
        let isSize = '';

        if (url) {
          if (pdf === 'T') {
            typeStartTag = `<a href="${url}" target="_blank" rel="noopener" class="exhibition__type--pdf">`;
            typeEndTag = '</a>';
            isSize  = '［PDF：'+ size +'］';
          } else if (blank === 'T') {
            typeStartTag = `<a href="${url}" target="_blank" rel="noopener" class="exhibition__type--blank">`;
            typeEndTag = '</a>';
          } else {
            typeStartTag = `<a href="${url}" class="exhibition__type">`;
            typeEndTag = '</a>';
          }
        } else {
          typeStartTag = '<div class="exhibition__type--nolink">';
          typeEndTag = '</div>';
        }
        if(image) {
          imageHtml = `<div class="exhibition__head">
                        <div class="exhibition__image"><img src="${image}" alt=""></div>
                      </div>`;
        } else {
          imageHtml = '';
        }
        if(period) {
          periodHtml = `<dl class="exhibition__detail">
                          <dt class="detail__title"><em>日時</em>：</dt>
                          <dd class="detail__text">${period}</dd>
                        </dl>`;
        } else {
          periodHtml = '';
        }
        if(place) {
          placeHtml = `<dl class="exhibition__detail">
                        <dt class="detail__title"><em>場所</em>：</dt>
                        <dd class="detail__text">${place}</dd>
                      </dl>`;
        } else {
          placeHtml = '';
        }
        if(lead) {
          leadHtml = `<dl class="exhibition__detail">
                        <dt class="detail__title"><em>出展</em>：</dt>
                        <dd class="detail__text">${lead}</dd>
                      </dl>`;
        } else {
          leadHtml = '';
        }

        /* HTML生成 */
        LIST_HTML = `${typeStartTag}
                      ${imageHtml}
                      <div class="exhibition__body">
                        <div class="exhibition__title">${title}${isSize}</div>
                        ${periodHtml}
                        ${placeHtml}
                        ${leadHtml}
                      </div>
                    ${typeEndTag}`;
        $elm.append(LIST_HTML);
      };
      const $listItem = $elm.children();
      if ($listItem.length === 0) {
        /* 0件時の処理 */
        $elm.remove();
      }
    } else {
      /* 0件時の処理 */
      $elm.remove();
    }
  }).fail(() => {
    /* JSON読み込み失敗時の処理 */
    $elm.remove();
  });
}

/**
* @method homeLiving
*/
function homeLiving(config) {
  // options
  const c = $.extend({
    factorElement: '.js-home-living',
    carouselElement: '.js-home-living__carousel',
    listElement: '.js-home-living__carousel__list',
    controlElement: '.js-home-living__carousel__control',
    pagerElement: '.js-home-living__carousel__pager',
    arrowElement: '.js-home-living__carousel__arrow',
    pauseElement: '.js-home-living__carousel__pause',
    playElement: '.js-home-living__carousel__play',
  }, config);

  // vars
  const $elm = $(c.factorElement);
  const list = c.listElement;
  const control = c.controlElement;
  const pager = c.pagerElement;
  const arrow = c.arrowElement;
  const pause = c.pauseElement;
  const play = c.playElement;
  const bp1 = u.breakPoint1 + 1;
  const autoplay = true;
  const initializedClass = '.slick-initialized';
  const pcItemWidth = 240;
  const spItemWidth = 180;

  // exit
  if ($elm.length === 0) { return false; }

  const carouselControl = function () {
    // function
    const controlDisplay = function (_self, _carouselNum, _pcSlideNum, _spSlideNum) {
      const minLength = u.isRangePC() ? _pcSlideNum : _spSlideNum;
      if (minLength >= _carouselNum) {
        _self.find(control).hide();
        _self.find(play).show();
      } else {
        _self.find(control).show();
        _self.find(play).hide();
      }
      if (autoplay) {
        _self.find(play).hide();
        _self.find(pause).show();
      } else {
        _self.find(pause).hide();
        _self.find(play).show();
      }
    };
    // init
    $elm.each(function () {
      const self = $(this);
      const carousel = self.find(list);
      const carouselNum = self.find(list).find(' > *').length;
      let slideNum = u.isRangePC() ? Math.round(($elm.width()) / pcItemWidth) - 2 : Math.round(($elm.width()) / spItemWidth) - 1;
      let slickOption = {
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: autoplay,
        autoplaySpeed: 4500,
        speed: 800,
        lazyLoad: 'ondemand',
        appendDots: self.find(pager),
        appendArrows: self.find(arrow),
        slidesToShow: slideNum,
        slidesToScroll: 1,
        pauseOnFocus: false,
        swipe: true,
        swipeToSlide: false,
        touchMove: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: bp1,
            settings: {
            },
          },
        ],
      }
      if(carouselNum <= slideNum) {
        carousel.filter(initializedClass).slick('unslick');
      } else {
        carousel.not(initializedClass).slick(slickOption);
      }
      controlDisplay(self, carouselNum, slideNum, slideNum);
      u.isWindowSizeWatch(() => {
        slideNum = u.isRangePC() ? Math.round(($elm.width()) / pcItemWidth) - 2 : Math.round(($elm.width()) / spItemWidth) - 1;
        if(carouselNum <= slideNum) {
          carousel.filter(initializedClass).slick('unslick');
          controlDisplay(self, carouselNum, slideNum, slideNum);
        } else {
          carousel.not(initializedClass).slick(slickOption);
          carousel.slick('slickSetOption', 'slidesToShow', slideNum, true);
          controlDisplay(self, carouselNum, slideNum, slideNum);
        }
      });
    });
    // control
    $(pause).on('click', function () {
      const thisPause = $(this);
      const wrap = thisPause.parents(c.carouselElement);
      const thisList = wrap.find(list);
      const thisPlay = wrap.find(play);
      thisList.slick('slickPause');
      thisPause.hide();
      thisPlay.show();
    });
    // control
    $(play).on('click', function () {
      const thisPlay = $(this);
      const wrap = thisPlay.parents(c.carouselElement);
      const thisList = wrap.find(list);
      const thisPause = wrap.find(pause);
      thisList.slick('slickPlay');
      thisPlay.hide();
      thisPause.show();
    });
  };

  carouselControl();

}

/**
  * @execution
  */
$(() => {
  'use strict';

  // onReady
  homeHero();
  homeNewsTicker();
  homeCanvas();
  homeAbout();
  homeMiraiSlider();
  homeNewsList();
  homeExhibition();
  homeLiving();
});
$(window).on('load', () => {
  'use strict';

  // onLoad
});

