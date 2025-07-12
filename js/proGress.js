let lastScrollTop = 0;

$(window).on("scroll", function () {
  const scrollTop = $(window).scrollTop();
  const docHeight = $(document).height() - $(window).height();
  const scrollPercent = (scrollTop / docHeight) * 100;

  $(".progress-inner").css("width", scrollPercent + "%");

  if (scrollTop > lastScrollTop) {
    // 向下SCROLL
    $(".progress-inner img").css("transform", "translate(50%, -50%) scaleX(1)");
  } else {
    // 向上SCROLL
    $(".progress-inner img").css("transform", "translate(50%, -50%) scaleX(-1)");
  }

  lastScrollTop = scrollTop;
});