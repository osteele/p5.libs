function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220, 20);
  let rotationCenter = createVector(width, height).div(2);
  rotateAbout(frameCount, rotationCenter);

  rect(100, 100, 20, 30);
}
