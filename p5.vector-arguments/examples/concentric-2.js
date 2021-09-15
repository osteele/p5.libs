// Description: A study inspired by Huw Messie's [Concentric
// Circles](https://huwmessie.com/2019/12/16/stitching-intricate/).

function setup() {
  createCanvas(windowWidth, windowHeight);
  enableVectorArguments();
}

function draw() {
  clear();

  translate(width / 2, height / 2);
  rotate(-PI / 2 + millis() / 700);
  stroke('red');
  let ratio = 5 * sin(millis() / 10000);
  // ratio = 2;
  beginShape();
  for (let angle = 0; angle < 2 * 360; angle += 2) {
    let p1 = p5.Vector.fromAngle(radians(ratio * angle), 75);
    let p2 = p5.Vector.fromAngle(radians(angle), 150);
    vertex(p1)
    vertex(p2);
  }
  noFill();
  endShape();
}
