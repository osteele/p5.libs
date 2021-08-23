function setup() {
  createCanvas(400, 200);
  enableVectorArguments();

  createButton('Red')
    .position(createVector(10, 20))
    .mousePressed(() => background('red'));

  createButton('Green')
    .position(createVector(10, 20).add(width / 2))
    .mousePressed(() => background('green'));
}
