// Description: use `enterLayer() to modify the (global) p5.js functions to
// operate on a Graphics instead of the canvas.

let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  pg = createGraphics(width, height);
}

function draw() {
  background(0);

  beginLayer(pg);
  let angle = millis() / 1000;
  let x = map(cos(angle), -1, 1, 0, width);
  let y = map(sin(1.4 * angle), -1, 1, 0, height);
  background(100, 40);
  circle(x, y, 30);
  endLayer();

  image(pg, 0, 0);

  translate(200, height - 200);
  rotate(millis() / 1000);
  rect(0, 0, 100, 100);
}
