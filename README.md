# jQuery What's NEW 

jQuery What's NEW is a simple balloon UI element inspired by google+.
It was designed to show your site latest features to users. But of course you can use it anywhere you like.

example: https://github.com/JoshuaChi/jquery.whatsnew/blob/master/index.html

# Usage
jQuery What's NEW requires a specific HTML structure in order to work. There is also a small stylesheet that can be used. jQuery is a dependency.

```html
<head>
  <script type='text/javascript' charset='utf-8' src='http://code.jquery.com/jquery-1.9.1.js'></script>
  <script type='text/javascript' charset='utf-8' src='http://code.jquery.com/ui/1.10.3/jquery-ui.js'></script>
  <script type='text/javascript' charset='utf-8' src='/js/jquery.whatsnew.js'></script>
  <link rel='stylesheet' href='jquery.whatsnew.css' type='text/css'>
</head>
```

The HTML structure looks like this.
```html
  <div class="tu-dialog">
    <div class="tu-dialog-content">
      <img class="tu-dialog-icon" src="/images/kiwitask-avatar.png" width='32px' height='32px'>
      <a href="#__dismiss__" rel="nextstep">
        <img class="tu-dialog-close" src="/images/x_button.png">
      </a>
      <div class="iph-resize">
        <div class="tu-dialog-title">New Feature #3</div>
        <div class='tu-dialog-body'>This is the lib which you can used to show your site new features</div>
      </div>
      <div class="tu-dialog-pages">
      </div>
    </div>
  </div>
```

Invoke the plugin by calling it on a selector like normal.

In below example, please be aware that you want the $dialog1 be attached with $ele1 in position xx.

```html
<script type='text/javascript' language='javascript'>
  $(function(){
      $.fn.whatsnew({
        'eles': [
          {'dom': $ele1, 'position': xx}, 
          {'dom': $ele2, 'position': xx},
          {'dom': $ele3, 'position': xx}
        ],
        'boxs':[
          $dialog1,
          $dialog2,
          $dialog3
        ]
      });
  });
</script>
```

## Screenshot
![jQuery Whatsnew Screenshot](https://raw.github.com/JoshuaChi/jquery.whatsnew/master/screenshot.png)

## Credits

jQuery Whatsnew developed by [Joshua Chi](joshokn@gmail.com) at [KiwiTask](http://www.kiwitask.com)


## License

MIT license:

http://www.opensource.org/licenses/MIT
