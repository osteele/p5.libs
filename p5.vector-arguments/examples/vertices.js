// Description: Demonstrates `vertex()` with a 2D `p5.Vector argument`.

function setup() {
  createCanvas(400, 400);
  enableVectorArguments();
}

function draw() {
  background(0, 1);
  beginShape();
  for (let angle = 0; angle <= 360; angle++) {
    let r = noise(angle / 10, millis() / 1000) * 100 + 100;
    let pt = p5.Vector.fromAngle(radians(angle), r).add(width / 2, height / 2);
    fill(angle % 10 ? 'green' : 'red');
    circle(pt, 5);
    vertex(pt);
  }
  fill(255, 1);
  endShape();
}
