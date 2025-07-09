$(function () {
  function photoScroll() {
    const list = $('.photoTopList');

    if (list.length === 0 || list.data('duplicated')) return;

    list.append(list.html());
    list.data('duplicated', true);
  }

  function deletePhotoScroll() {
    const list = $('.photoTopList');

    if (list.data('duplicated')) {
      // 移除複製的那些物件
      const originalHtml = list.html().slice(0, list.html().length / 2);
      list.html(originalHtml);
      list.data('duplicated', false);
    }
  }

  function checkWidth() {
    if ($(window).width() <= 820) {
      photoScroll();
    } else {
      deletePhotoScroll();
    }
  }

  // 初始執行一次
  checkWidth();

  // 監聽螢幕寬度變化
  $(window).on('resize', checkWidth);
});

photoScroll();