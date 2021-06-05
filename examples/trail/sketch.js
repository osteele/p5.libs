function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let angle = millis() / 1000;
  let x = map(cos(angle), -1, 1, 0, width);
  let y = map(sin(1.4 * angle), -1, 1, 0, height);

  background(100);

  beginLayer();
  background(100, 40);
  circle(x, y, 30);
  endLayer();

  translate(200, height - 200);
  rotate(millis() / 1000);
  rectMode(CENTER);
  rect(0, 0, 100, 100);
}
