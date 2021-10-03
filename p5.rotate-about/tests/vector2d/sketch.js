function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  clear();

  const angle = frameCount;
  rotateAbout(angle, createVector(width / 2, height / 2));

  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  rect(width / 2 - 50, height / 2 - 50, 75, 75);
  rect(width / 2, height / 2, 100, 100);

  textSize(20);
  text(`angle = ${angle.toFixed(0)}°`, width / 2, 20);
}
