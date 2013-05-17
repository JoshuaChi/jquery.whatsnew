/*!
 * jQuery Whatsnew Plugin
 * version: 1.0  (16-MAY-2013)
 * @requires jQuery v1.9.1 or later
 * @requires jQuery UI v1.10.3 or later if want to the box draggable
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($){

  /*
   * How to use it
   *   $.fn.whatsnew({
   *     'eles': [
   *       {'dom': 'article > img', 'position':'down'}, 
   *       {'dom': 'article > div', 'position':'right'},
   *       {'dom': 'article > div', 'position': 'up'}
   *     ],
   *     'boxs':[
   *       '#dialog-1',
   *       '#dialog-2',
   *       '#dialog-3'
   *     ],
   *     draggable: true
   *   });
   *
   * @params options.eles - the elements that "what's new" boxs will attached with
   *                      key - dom node; 
   *                      value - box position according to this element
   *                              left | right | up | bottom
   * @params options.boxs - the boxs that will be show to user
   * @params options.drabble - the box can be dragged or not. true|false. default is true
   *                           if true, it relies on jquery ui
   */
  $.fn.whatsnew = function(options){
    var settings = $.extend({
      eles : [],
      boxs : [],
      draggable: true
    }, options);

    var eles = settings['eles'];
    var boxs = settings['boxs'];


    var methods = {
      initBoxs: function(boxs, eles, draggable){
        for(var i in boxs){
          var box = $(boxs[i]);
          var ele = eles[i];
          var eleDom = $(ele.dom);
          var prevBox = undefined;
          if(i > 0) {
            prevBox = (boxs[parseInt(i)-1]);
          }
          var nextBox = undefined;
          if(i < boxs.length - 1) {
            nextBox = boxs[parseInt(i)+1];
          }
                  
          var whatsnewBoxWidth = box.outerWidth(true);
          var whatsnewBoxHeight = box.outerHeight(true);
          var elementLeft = eleDom.offset().left;
          var elementTop = eleDom.offset().top;
          var elementWidth = eleDom.outerWidth(true);
          var elementHeight = eleDom.outerHeight(true);

          switch(ele.position) {
            case 'up':
              var data =[ elementTop + elementHeight + 15
                , elementLeft 
                , -15];
              break;
            case 'down':
              var data = [parseInt(elementTop - whatsnewBoxHeight - 15)
                , elementLeft
                , whatsnewBoxHeight - 2 +'px'];
              break;
            case 'left':
              var data = [elementTop
                , elementLeft + elementWidth
                , 34];
              break;
            case 'right':
              var data = [elementTop
                , elementLeft - whatsnewBoxWidth
                , 84];
              break;
            default:
              var data = [0, 0, 10];
          }

          box.css({
            'position': 'absolute',
            'opacity': 1,
            'top': data[0],
            'left': data[1]
          });

          methods.initPointer(box, ele.position, data[3]);

          methods.initPages(box, i,  boxs.length, prevBox, nextBox);

          methods.bindClose(box);

          if(i == 0 ) {
            box.show();
          }

          if(draggable != undefined && true == draggable) {
            box.draggable();
          }
        }

      },

      initPointer: function(box, position, pointerTop){
        box.append('<div class="tu-dialog-pointer-' + 
          position + '" style="top: ' +
          pointerTop+'"></div>');
      },

      initPages: function(box, number, length, prevBox, nextBox) {
        box.append('<img src="/images/plus3_gh_dots_'+(parseInt(number)+1)+'of3.png"></div>');

        if(number == length - 1) {
          box.append(
            '<a href="#">' +
            '<button class="iph-finish-button">Finish</button>'+
            '</a>');
            methods.bindFinish(box);
        }
        if(number < length -1) {
            box.append(
                '<a href="'+nextBox+'" rel="nextstep">' +
                '<button class="iph-next-button">Next</button>'+
                '</a>');
            methods.bindNext(box, nextBox);
        } 
        if(number > 0) {
          box.append(
            '<a href="'+prevBox+'" rel="prevstep">' +
            '<button class="iph-prev-button">Prev</button>'+
            '</a>');
            methods.bindPrev(box, prevBox);
        }
      },

      bindClose: function(box) {
        box.find('.tu-dialog-close').on('click', function(){
          box.fadeOut("fast");
          return false;
        });
      },

      bindPrev: function(box, prevBox) {
        box.find('.iph-prev-button').on('click', function(){
          box.hide();
          $(prevBox).show();
        });
      },

      bindNext: function(box, nextBox) {
        box.find('.iph-next-button').on('click', function(){
          box.hide();
          $(nextBox).show();
        });
      },

      bindFinish: function(box) {
        box.find('.iph-finish-button').on('click', function(){
          box.fadeOut("fast");
          return false;
        });
      }
    }
    methods.initBoxs(boxs, eles, settings['draggable']);
  }
})(jQuery);
