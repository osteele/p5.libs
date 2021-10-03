function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  clear();
  translate(-width / 2, -height / 2);

  const angle = frameCount;
  rotateAbout(angle, width / 2, height / 2);

  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  rect(width / 2 - 50, height / 2 - 50, 75, 75);
  rect(width / 2, height / 2, 100, 100);
}
