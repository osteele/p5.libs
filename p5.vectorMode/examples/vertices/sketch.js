function setup() {
  createCanvas(400, 400);
  // angleMode(DEGREES);
  vectorMode();
}

function draw() {
  background(0, 1);
  beginShape();
  fill('red');
  for (let i = 0; i <= 360; i++) {
    let r = noise(i / 10, millis() / 1000) * 100 + 100;
    let pt = p5.Vector.fromAngle(i * TWO_PI / 360, r).add(width / 2, height / 2);
    fill(i % 10 ? 'green' : 'red');
    circle(pt, 5);
    vertex(pt);
  }
  fill(255, 1);
  endShape();
}
