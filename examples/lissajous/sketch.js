let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // the following code leaves a fading trail even though the
  // canvas background is entirely erased each time
  beginLayer();
  background(100, 10);
  let x = map(sin(millis() / 500), -1, 1, 0, width);
  let y = map(sin(millis() / 700), -1, 1, 0, height);
  circle(x, y, 20);
  endLayer();

  // This portion of the sketch only works because the background
  // is completely erased each time
  fill(255);
  textSize(50);
  text(frameCount, 10, 50);
}
