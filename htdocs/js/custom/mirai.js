/**
 * home.js
 *
 * @requires
 * - jquery.js
 */

const u = new COMMON_ADD.Util();


/**
  * @module
  */
/**
* @method modalControl
*/
function modalControl(config) {
  // options
  const c = $.extend({
    factorPrefix: 'js-mirai-modal',
    triggerElement: '.js-mirai-modal',
  }, config);
  // vars
  const $elm = $(`[class*=${c.factorPrefix}]`);
  const trigger = c.triggerElement;
  const $body = $('body');
  const activeModaalName = 'is-active-modaal';
  const baseW_pc = 960;
  const baseW_sp = '93%';
  const baseH_pc = false;
  const baseH_sp = false;
  const opacity = 0.7;
  // exit
  if ($elm.length === 0) { return false; }
  // function
  const modalOpened = function () {
    $body.addClass(activeModaalName);
  };
  // function
  const modalClosed = function () {
    $body.removeClass(activeModaalName);
  };
  // setting
  const settings = {
    type: 'inline',
    custom_class: trigger.split('js-')[1],
    width: u.isRangePC() ? baseW_pc : baseW_sp,
    height: u.isRangePC() ? baseH_pc : baseH_sp,
    overlay_opacity: opacity,
    before_open: modalOpened,
    before_close() {
      const $self = $(`.${trigger.split('js-')[1]}`);
      const $youtubeElm = $self.find('iframe')[0];
      const $playerWindow = $youtubeElm.contentWindow;
      $playerWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    },
    after_close: modalClosed,
  };
  // init
  $(trigger).modaal(settings);
}

/**
  * @execution
  */
$(() => {
  'use strict';

  // onReady
  modalControl();
});
$(window).on('load', () => {
  'use strict';

  // onLoad
});

