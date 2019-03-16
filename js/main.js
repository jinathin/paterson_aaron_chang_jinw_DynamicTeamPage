(function(){
  
  var windowH = $(window).height(),
      documElem = $(document),
      slideDownPage = $('.slide-down-page'),
      content = $('.content'),
      btns = $('.btn'),
      animSpeed = 700;
  
  slideDownPage.css({
      height: windowH + 'px',
      top: -windowH + 'px'
  });
  
  btns.on('click', function(e) {
      if( $(this).hasClass('open') ) {
        slideDownPage.animate({ 'top': 0}, animSpeed);
        content.animate({ 'margin-top': windowH + 'px'}, animsSpeed);
      } else {
        slideDownPage.animate({ 'top': -windowH + 'px' }, animSpeed);
        content.animate({ 'margin-top': 0 }, animSpeed);
      }
    e.preventDefault();
  });
  
  documElem.on('scroll', function() {
    if ( $(this).scrollTop() > slideDownPage.height() && slideDownPage.css('top') === '0px' ) {
      slideDownPage.css('top', -windowH + 'px');
      content.css('margin-top', 0);
      documElem.scrollTop(0);
    }
  });
  
})();