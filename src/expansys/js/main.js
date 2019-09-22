$(document).ready(function(){
    $('.visual').slick({
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        //variableWidth: true,
        //variableHeight: true,
        fade: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: false,
        nextArrow: false,
        dotsClass: 'slide_nav'
    });//visual
    
    $(function() { 
      textcolor = "#333333";
      bgcolor = $('.visual div').css("background-color").toString();
      bgcolor = bgcolor.replace("rgb(","");
      bgcolor = bgcolor.replace(")","");
      bgcolor = bgcolor.split(",");
      meido = (bgcolor[0]*299+bgcolor[1]*587+bgcolor[2]*114)/1000;
      if (meido < 125) {
        textcolor = "#ffffff";
      }
      $('.user_menu li a').css("color", textcolor);
    });//visual 배경색에 맞춰 헤더 색상 변경
});