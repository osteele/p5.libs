// Description: Demonstrates `createDiv().position()`  and
// `createButton().position()` with `p5.Vector` arguments.

function setup() {
  createCanvas(400, 200);
  enableVectorArguments();

  createDiv('Vectors are used to specify the button positions.')
    .position(createVector(10, 10))
    .style('font-size', '10pt');

  let pos = createVector(10, 40);
  createButton('Red')
    .position(pos)
    .mousePressed(() => background('red'));

  pos.add(width / 2);
  createButton('Green')
    .position(pos)
    .mousePressed(() => background('green'));
}
