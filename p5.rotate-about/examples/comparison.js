function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220, 20);

  push();
  rotate(frameCount);
  fill('blue');
  rect(300, 300, 20, 30);
  pop();

  rotateAbout(frameCount, 200, 200);
  fill('green');
  rect(300, 300, 20, 30);
}
