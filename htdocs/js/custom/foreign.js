/**
 * foreign.js
 *
 * @requires
 * - jquery.js
 * - jquery.rwdImageMaps.min.js
 */

/* -------------------------------------------
 * @init
------------------------------------------- */
$(function() {
  'use strict';
  var u = new COMMON_ADD.Util();
  $.imageMaps();
});
/* -------------------------------------------
 * @functon
------------------------------------------- */

(function($){
  'use strict';
  var u = new COMMON_ADD.Util();
  
  $.imageMaps = function(){
    // vars
    var $elm = $('.js-rwdImageMaps');
    // exit
    if($elm.length === 0){ return false; }
    // setting：初期値設定
    $elm.each(function(){
      var self = $(this);
      self.rwdImageMaps();
    });
  };
  
})(jQuery);

