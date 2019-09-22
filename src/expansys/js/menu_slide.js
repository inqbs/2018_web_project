$(function() {
    
    //JS for Main_menu_slide
    
    $('.logo_area').mouseover(function(e) {
        $('.main_menu').addClass('active');
        $('.logo_BG').addClass('active');
    }).mouseout(function(e) {
        $('.main_menu').removeClass('active');
        $('.logo_BG').removeClass('active');
    });
    
    //submenu_
    
    $(document).on("click",".case li:first-child",function(){
      if($(this).nextAll().css("display")=="none"){
        $(this).nextAll().show();
        $(this).children('h3').addClass('opened');
      }else{
        $(this).nextAll().hide();
        $(this).children('h3').removeClass('opened');
      }
    });
    
    var s = $('.subbar');
    $(window).scroll(function () {
        if ( $(this).scrollTop() > 800 ) {
            s.addClass('fixed');
        } else {
            s.removeClass('fixed');
        }
    });
    
});


