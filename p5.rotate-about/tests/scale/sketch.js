function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  clear();

  const s = map(cos(frameCount), -1, 1, 1, 2);

  textSize(20);
  text(`scale = ${s.toFixed(1)}`, width / 2 + 5, 120)

  scaleAbout(s, s, width / 2, height / 2);

  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  rect(width / 2 - 50, height / 2 - 50, 75, 75);
  rect(width / 2, height / 2, 100, 100);
}
