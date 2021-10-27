function sketch(p) {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(220, 20);
    p.rotateAbout(p.frameCount, 200, 150);
    p.rect(100, 100, 20, 30);
  }
}

new p5(sketch);
