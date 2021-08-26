new p5(p => {
  p.setup = function () {
    p.createCanvas(200, 400);
    p.enableVectorArguments();

    circles(p);
    rects(p);
  }
});

function circles(p) {
  let pt = p.createVector(50, 50);
  p.circle(pt, 50);

  pt.add(100, 0);
  p.circle(pt.x, pt.y, 50);
}

function rects(p) {
  let pt = p.createVector(25, 100);
  let size = p.createVector(50, 40);

  p.rect(pt, size);

  pt.add(100, 0);
  p.rect(pt, 50, 40);

  pt.add(-100, 60);
  p.rect(pt, size);

  pt.add(100, 0);
  p.rect(pt.x, pt.y, 50, 40);
}
