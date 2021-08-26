new p5(p => {
  p.setup = () => {
    p.createCanvas(440, 440);
  }

  p.draw = () => {
    p.background(100);
    p.translate(20, 120);

    // draw the left half of the scene
    let layer1 = p.beginLayer('left', 200, 200);
    drawStuff(p);
    p.endLayer();

    // draw the right half of the scene
    p.beginLayer('right', 200, 200);
    p.push();
    p.translate(-layer1.width, 0);
    drawStuff(p);
    p.pop();
    p.endLayer(200, 100 * sin(millis() / 800));
  }
});

function drawStuff(p) {
  p.colorMode(p.HSB);
  p.background(50, 40);

  for (let x = -400; x < 400; x += 20) {
    p.stroke(p.map(x, -400, 400, 0, 360), 100, 100);
    p.line(x, 0, x + 400, p.height);
  }

  p.stroke(p.map(p.mouseY, 0, p.height, 0, 360), 100, 100);
  let angle = p.millis() / 1000;
  let x = p.map(p.cos(angle), -1, 1, 10, 400 - 10);
  let y = p.map(p.sin(1.4 * angle), -1, 1, 10, 200 - 10);
  p.circle(x, y, 20);

  p.push();
  p.translate(185, 100);
  p.rotate(p.millis() / 200);
  p.rectMode(p.CENTER);
  p.rect(0, 0, 50, 50);
  p.pop();
}
