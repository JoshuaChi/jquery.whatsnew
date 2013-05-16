/*!
 * jQuery Whatsnew Plugin
 * version: 1.0  (16-MAY-2013)
 * @requires jQuery v1.9.1 or later
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($){

  /*
   * How to use it
   * $('div.tu-dialog').popbox({
   *   'ele': 'article > img',
   *   'position': 'right'
   * }).open();
   *
   * @params options.ele - the element that "what's new" box will attached with
   * @params options.position - left | right | up | bottom
   */
  $.fn.whatsnew = function(options){
    var pop = this;
    var settings = $.extend({
      ele           : 'body',
      position      : 'top',
    }, options);

    var whatsnewBoxWidth = (this).outerWidth(true);
    var whatsnewBoxHeight = (this).outerHeight(true);
    var elementLeft = $(settings['ele']).position().left;
    var elementTop = $(settings['ele']).position().top;
    var elementWidth = $(settings['ele']).width();
    var elementHeight = $(settings['ele']).height();

    var pointerClass = 'tu-dialog-pointer-'+settings['position'];
    var pointerTop = '10px';
    var top = 0;
    var left = 0;
    switch(settings['position']) {
      case 'up':
        top = elementTop + elementHeight + 15;
        left = elementLeft; 
        pointerTop = '-15px';
        break;
      case 'down':
        top = elementTop - whatsnewBoxHeight - 15;
        left = elementLeft; 
        pointerTop = whatsnewBoxHeight - 2 +'px';
        break;
      case 'left':
        top = elementTop;
        left = elementLeft + elementWidth; 
        pointerTop = '34px';
        break;
      case 'right':
        top = elementTop;
        left = elementLeft - whatsnewBoxWidth; 
        pointerTop = '84px';
        break;
      default:
        top = 0;
        left = 0; 
        pointerTop = '10px';
    }

    $(this).each(function(){
      $(this).append('<div class="tu-dialog-pointer-' + 
        settings['position'] + '" style="top: ' +
        pointerTop+'"></div>');
    });

    (this).css({
      'display': 'block', 
      'position': 'absolute',
      'opacity': 1,
      'top': top,
      'left': left
    });

    var self = this;
    $(this).find('.tu-dialog-close').on('click', function(){
      $(self).fadeOut("fast");
      return false;
    });
  }
})(jQuery);
