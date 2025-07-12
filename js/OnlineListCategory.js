$(function () {
  $('.navList li').click(function () {
    const category = $(this).data('category');

    if (category === 'all') {
      $('.shopList li').show();
    } else {
      $('.shopList li').hide().filter(`[data-category='${category}']`).show();
    }
  });
});

