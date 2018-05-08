/**
 * @describe canvas 绘制图表纯手写
 * */
export function printBar(strength, id) {
  let container = document.getElementById(id);
  let w = container.offsetWidth;
  let h = container.offsetHeight;
  let line = 2; // 方块件的纵向距离
  let size = h / 6 - line; // 方块宽高
  let distance = size / 2; // 方块间的横向距离
  let bgColor = '#2E333E'; // 方块的背景颜色
  let boxColors = ['#059DEA', '#05ACE0', '#05BCD7', '#05CCCC', '#05e5e5'];
  let canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  container.appendChild(canvas);
  let ctx = canvas.getContext("2d");
  /**
   * @describe 绘制纵向的一条
   * params （num：第几条；x：绘制这一条的起始的横向位置）
   * */
  let longitudinal = (num, x, isbg) => {
    for (let n = 1; n <= num; n++) {
      ctx.fillStyle = isbg ? bgColor : boxColors[n - 1];
      ctx.fillRect(x, h - n * (line + size) + line, size, size);
    }
  }
  for (let i = 1; i <= 5; i++) {
    longitudinal(i, (distance + size) * (i - 1), true)
  }

  for (let i = 1; i <= strength; i++) {
    longitudinal(i, (distance + size) * (i - 1))
  }
}

export function printRing(strength, id) {
  let container = document.getElementById(id);
  let w = container.offsetWidth;
  let h = container.offsetHeight;
  let bgColor = '#2E333E'; // 圆环的背景颜色
  let ringColor = '#059DEA'; // 圆环渐变色
  let radius = 60; // 圆环半径
  let PI = Math.PI;
  let canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  container.appendChild(canvas);
  let ctx = canvas.getContext("2d");
  /**
   * @describe 绘制圆环
   * params
   * */
  let ring = (start, end) => {
    ctx.beginPath();
    ctx.arc(50, 70, 40, start, end, false);
    ctx.lineWidth = 12;
    ctx.stroke();//画空心圆
    ctx.closePath();
  }
  ctx.strokeStyle = bgColor;
  ring(PI * 3 / 4, PI * 9 / 4);
  let deg = (PI * 9 / 4 - PI * 3 / 4) * strength / 5;
  ctx.strokeStyle = ringColor;
  ring(PI * 3 / 4, PI * 3 / 4 + deg)
}
