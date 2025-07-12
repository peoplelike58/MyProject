$(function () {
  function ShopNavList() {
    if ($(window).width() <= 1100) {
      $('.navList ul').hide();
      $('.navList h1').off('click').on('click', function () {
        $(this).next('ul').slideToggle();
      });
    } else {
      $('.navList ul').show();
      $('.navList h1').off('click');
    }
  }

  ShopNavList();

  $(window).resize(function () {
    ShopNavList();
  });
});