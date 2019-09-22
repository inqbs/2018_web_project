
//Tab Event
$(function () {
  /* Default */
  $('.detail_panel').hide();
  $('.detail_panel').eq(0).show();
  $('.detail-area_btn').eq(0).addClass('active');
  /* click event */
  $('.detail-area_btn').each(function () {
    $(this).on('click', function () {
      var index = $('.detail-area_btn').index(this);
      $('.detail-area_btn').removeClass('active');
      $(this).addClass('active');
      $('.detail_panel').hide();
      $('.detail_panel').eq(index).show();
    });
  });
});
