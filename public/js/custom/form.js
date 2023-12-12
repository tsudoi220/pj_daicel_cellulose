/**
 * form.js
 *
 * @requires
 * - jquery.js
 */

/* -------------------------------------------
 * @init
------------------------------------------- */
$(function() {
  'use strict';
  var u = new COMMON_ADD.Util();
  $.wordCount();
  $.formValidate();
});
/* -------------------------------------------
 * @functon
------------------------------------------- */

(function($){
  'use strict';
  var u = new COMMON_ADD.Util();
  // 文字数カウント
  $.wordCount = function(config){
    // options
    var c = $.extend({
      factorElement: '.js-form-word-count',
      inputElement: '.js-form-word-count__input',
      displayElement: '.js-form-word-count__display'
    }, config);
    // vars
    var $elm = $(c.factorElement);
    // exit
    if($elm.length === 0){ return false; }
    // funtion
    var textCount = function(_$input,_$wordCountDisplay,_maxlen){
      var count = _$input.val().length,
          remaining = _maxlen - count;
      _$wordCountDisplay.html('現在' + count + '文字（残り入力文字数：' + remaining + '文字）');
    };
    $elm.each(function(){
      var $this = $(this),
          $wordCountInput = $this.find(c.inputElement),
          $wordCountDisplay = $this.find(c.displayElement),
          maxlen = $wordCountInput.attr('maxlength');
      // init
      var $input = $this.find(c.inputElement);
      textCount($input,$wordCountDisplay,maxlen);
      // control
      $wordCountInput.on('input', function() {
        textCount($input,$wordCountDisplay,maxlen);
      });
    });
  };
  $.formValidate = function(config){
    // options
    var c = $.extend({
      factorElement: '.js-form-submit',
      requiredElement: '.js-form-submit__required',
      disabledElement: '.js-form-submit__disable',
      confirmElement: '.js-form-submit__confirm',
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
    // function input
    var inputValidate = function(_$self,_$input,_$prefecture){
      if(_$input.length){
        var inputVal = _$input.val();
        if(inputVal !== ''){
          if(_$prefecture.length){
            var prefectureVal = _$prefecture.val();
            if(prefectureVal !== ''){
              _$self.addClass(enterdName);
            } else {
              _$self.removeClass(enterdName);
            }
          } else {
            _$self.addClass(enterdName);
          }
        } else {
          _$self.removeClass(enterdName);
        }
        requiredCheck();
      }
    };
    // function textarea
    var textareaValidate = function(_$self,_$textarea){
      if(_$textarea.length){
        var textareaVal = _$textarea.val();
        if(textareaVal !== ''){
          _$self.addClass(enterdName);
        } else {
          _$self.removeClass(enterdName);
        }
        requiredCheck();
      }
    };
    // function checkbox
    var checkValidate = function(_$self,_$check){
      if(_$check.length){
        var checkLen = _$self.find('input[type="checkbox"]:checked').length;
        if(checkLen !== 0){
          _$self.addClass(enterdName);
        } else {
          _$self.removeClass(enterdName);
        }
        requiredCheck();
      }
    };
    // function prefecture
    var prefectureValidate = function(_$self,_$input,_$prefecture){
      if(_$prefecture.length){
        var prefectureVal = _$prefecture.val();
        if(prefectureVal !== ''){
          var inputVal = _$input.val();
          if(inputVal !== ''){
            _$self.addClass(enterdName);
          } else {
            _$self.removeClass(enterdName);
          }
        } else {
          _$self.removeClass(enterdName);
        }
        requiredCheck();
      }
    };
    $required.each(function(){
      var $self = $(this),
          $input = $self.find('input[type="text"]'),
          $textarea = $self.find('textarea'),
          $check = $self.find('input[type="checkbox"]'),
          $prefecture = $self.find('#prefecture');
      // init
      inputValidate($self,$input,$prefecture);
      textareaValidate($self,$textarea);
      checkValidate($self,$check);
      prefectureValidate($self,$input,$prefecture);
      
      //control
      $input.on('input', function(){
        inputValidate($self,$input,$prefecture);
      });
      $textarea.on('input', function(){
        textareaValidate($self,$textarea);
      });
      $check.on('change', function(){
        checkValidate($self,$check);
      });
      $prefecture.on('change', function(){
        prefectureValidate($self,$input,$prefecture);
      });
      $('#AddressDetailAjaxZip').on('click', function(){
        setTimeout(function(){
          prefectureValidate($self,$input,$prefecture);
        },200);
      });
    });
  };
})(jQuery);

