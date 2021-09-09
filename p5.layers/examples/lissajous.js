// Description: Use a `Graphics` in order for one object to allow one object to
// leave a trail, while the rest of the canvas is fully erased.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // The following code leaves a fading trail of circles. The canvas background
  // is entirely erased on each call to draw(), so this is accomplished by
  // drawing the circles onto a layer that is only partially erased.
  beginLayer();
  background(100, 10);
  let x = map(sin(millis() / 500), -1, 1, 0, width);
  let y = map(sin(millis() / 700), -1, 1, 0, height);
  circle(x, y, 20);
  endLayer();

  // This portion of the sketch requires that the canvas background is fully
  // erased. Otherwise the digits from successive frames will draw on top of
  // each other. (To see this, comment out the call to `background()` at the top
  // of this function.)
  fill(255);
  textSize(50);
  text(frameCount, 10, 50);
}
