function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(100);

  beginLayer();
  background(100, 40);
  let angle = millis() / 1000;
  let x = map(cos(angle), -1, 1, 15, width - 15);
  let y = map(sin(1.4 * angle), -1, 1, 15, height - 15);
  circle(x, y, 30);
  endLayer();

  translate(200, height - 200);
  rotate(millis() / 1000);
  rect(0, 0, 100, 100);
}
