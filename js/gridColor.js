$(function () {
  const grid = $(".gridOverlay");
  const cols = 20;
  const rows = Math.ceil(grid.height() / 50); // 計算行數
  const total = cols * rows;

  for (let i = 0; i < total; i++) {
    grid.append('<div class="cell"></div>');
  }

  const $cells = $(".gridOverlay .cell");

  function lightUp() {
    $cells.removeClass("active");

    const count = Math.floor(Math.random() * 10) + 5;   //floor = 無條件向下取整數
    const indices = [];
    while (indices.length < count) {
      const index = Math.floor(Math.random() * total);
      if (!indices.includes(index)) {
        indices.push(index);
      }
    }

    indices.forEach(i => {
      $cells.eq(i).addClass("active");
    });

    setTimeout(lightUp, 500);
  }

  lightUp();
});