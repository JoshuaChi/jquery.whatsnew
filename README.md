# jQuery What's NEW 

jQuery What's NEW is a simple balloon UI element inspired by google+.
It was designed to show your site latest features to users. But of course you can use it anywhere you like.

example: https://github.com/JoshuaChi/jquery.whatsnew/blob/master/index.html

# Usage
jQuery What's NEW requires a specific HTML structure in order to work. There is also a small stylesheet that can be used. jQuery is a dependency.

```html
<head>
  <script type='text/javascript' charset='utf-8' src='jquery.js'></script>
  <script type='text/javascript' charset='utf-8' src='jquery.whatsnew.js'></script>
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
        <div class="tu-dialog-title">完善您的主页</div>
        首先您可以上传您的头像，增加主页的可信度。
      </div>
      <div class="tu-dialog-pages">
        <img src="/images/plus3_gh_dots_1of3.png"></div>
      <a href="#__2__" rel="nextstep">
        <button class="iph-button">Next</button>
      </a>
    </div>
  </div>
```

Invoke the plugin by calling it on a selector like normal.

```html
<script type='text/javascript'>
  $(function(){
      $('div.tu-dialog').whatsnew({
        'ele': 'article > img',
        'position': 'right'
      });
  });
</script>
```

## Screenshot
![jQuery Whatsnew Screenshot](/screenshot.png)

## Credits

jQuery Whatsnew developed by [Joshua Chi](joshokn@gmail.com) at [KiwiTask](http://www.kiwitask.com)


## License

MIT license:

http://www.opensource.org/licenses/MIT
