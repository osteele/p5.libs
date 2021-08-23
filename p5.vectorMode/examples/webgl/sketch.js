function setup() {
  createCanvas(600, 400, WEBGL);
  vectorMode();
}

function draw() {
  background(100);

  rotateX(millis() / 3000);
  rotateY(millis() / 4000);

  let pt = createVector(mouseX, mouseY, 100).sub(width / 2, height / 2);
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, pt);

  beginShape();
  for (let i = 0; i < 100; i++) {
    let pt = p5.Vector.fromAngle(i * 5 * TWO_PI / 100, 100);
    let { x: dy, y: dz } = p5.Vector.fromAngle(i * 4.5 * TWO_PI / 100, 80);
    pt.add(0, dy, dz);
    vertex(pt);
  }
  fill(250, 0, 0, 150);
  stroke(100, 50, 50, 150);
  strokeWeight(3);
  endShape();
}
