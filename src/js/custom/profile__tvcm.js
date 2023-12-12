/**
 * profile__tvcm.js
 *
 * @requires
 * - jquery.js
 * - lity.js
 * - common_add.js
 */

/* -------------------------------------------
 * @init
------------------------------------------- */
$(function() {
  'use strict';
  var u = new COMMON_ADD.Util();
  $.tvcmVisual();
});
/* -------------------------------------------
 * @functon
------------------------------------------- */

(function($){
  'use strict';
  var u = new COMMON_ADD.Util();
  
  $.tvcmVisual = function(config){
    // options
    const c = $.extend({
      factorElement: '.js-tvcm-visual',
      screenElementName: 'js-tvcm-visual__movie'
    }, config);
    // const
    const $elm = $(c.factorElement),
          screenName = c.screenElementName,
          movieArr = ['pHjmrEOR2Ow', 'ujM3ajMOgJo'];
    // exit
    if($elm.length === 0){ return false; }
    // setting
    $elm.prepend('<div class="tvcm-visual__screen"><div id="' + screenName + '"></div></div><div class="tvcm-visual__overlay"></div>');
    // youtube API
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    window.onYouTubeIframeAPIReady = function() {
      player = new YT.Player(screenName, {
        videoId: movieArr[Math.floor(Math.random() * movieArr.length)],
        playerVars: {
          playsinline: 1,
          autoplay: 1,
          rel: 0,
          controls: 0,
          modestbranding: 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
    function onPlayerReady(event) {
      event.target.mute();
      event.target.playVideo();
    }
    function onPlayerStateChange(event) {
      var ytStatus = event.target.getPlayerState();
      if (ytStatus == YT.PlayerState.ENDED) {
        event.target.loadVideoById(movieArr[Math.floor(Math.random() * movieArr.length)]);
        event.target.mute();
        event.target.playVideo();
      }
    }
  };

})(jQuery);

