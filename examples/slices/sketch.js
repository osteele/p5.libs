function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);

  // draw the two halves of the scene

  translate(10, 110);

  let layer1 = beginLayer(1, 200, 200);
  drawStuff();
  endLayer();

  beginLayer(2, 200, 200);
  push();
  translate(-layer1.width, 0);
  drawStuff();
  pop();
  endLayer(200, 100 * sin(millis() / 800));
}

/* This function is called twice, once for each layer.
 *
 * I chose to draw some lines and animations that cross both layers, so that
 * you can see that shapes that cross the midline are sliced into two pieces.
 */
function drawStuff() {
  colorMode(HSB);
  background(50, 40);

  for (let x = -400; x < 400; x += 20) {
    stroke(map(x, -400, 400, 0, 360), 100, 100);
    line(x, 0, x + 400, height);
  }

  stroke(map(mouseY, 0, height, 0, 360), 100, 100);
  let angle = millis() / 1000;
  let x = map(cos(angle), -1, 1, 0, 400);
  let y = map(sin(1.4 * angle), -1, 1, 0, 200);
  circle(x, y, 20);

  push();
  translate(175, 100);
  rotate(millis() / 200);
  rectMode(CENTER);
  rect(0, 0, 50, 50);
  pop();
}
