function setup() {
  createCanvas(windowWidth, windowHeight);
  vectorMode();
}

function draw() {
  let pt = createVector(mouseX, mouseY);

  // either of the following two lines will work:
  circle(pt, 20);
  // circle(center.x, center.y, 20);
}

function mousePressed() {
  let pt = createVector(mouseX, mouseY);
  let size = createVector(30, 40);

  // any of the following three lines will work:
  rect(pt, size);
  // rect(pt, 20, 30);
  // rect(pt.x, pt.y, 20, 30);
}
