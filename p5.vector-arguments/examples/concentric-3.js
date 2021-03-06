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

  let ratio1 = 5 * sin(millis() / 8000);
  let ratio2 = 5 * sin(millis() / 13000);

  stroke('red');

  for (let angle = 0; angle < 2 * 360; angle += 2) {
    let p1 = p5.Vector.fromAngle(radians(ratio1 * angle), 75);
    let p2 = p5.Vector.fromAngle(radians(angle), 150);
    let p3 = p5.Vector.fromAngle(radians(ratio2 * angle), 200);
    line(p1, p2)
    line(p2, p3);
  }
  noFill();
}
