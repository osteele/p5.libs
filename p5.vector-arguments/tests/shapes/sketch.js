/* This runs various interpolations of Vector and scalar arguments.
* It should draw two columns, each with a circle above two rectangles.
* Both circles should have the same radius. All rectangles should have
* the same width and height.
*/

function setup() {
  createCanvas(200, 400);
  enableVectorArguments();

  circles();
  rects();
}

function circles() {
  let pt = createVector(50, 50);
  circle(pt, 50);

  pt.add(100, 0);
  circle(pt.x, pt.y, 50);
}

function rects() {
  let pt = createVector(25, 100);
  let size = createVector(50, 40);

  rect(pt, size);

  pt.add(100, 0);
  rect(pt, 50, 40);

  pt.add(-100, 60);
  rect(pt, size);

  pt.add(100, 0);
  rect(pt.x, pt.y, 50, 40);
}
