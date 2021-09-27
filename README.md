# p5.js Libraries

This repository contains libraries for [p5.js](https://p5js.org). Each library
has its own documentation page; click on the library name for additional
documentation and examples.

## [p5.layers](./p5.layers/)

[p5.layers](./p5.layers/) simplifies some common use cases for [p5.js
Graphics](https://p5js.org/reference/#/p5/createGraphics) objects. It makes it
easier to use Graphics objects to implement drawing layers, and it removes the
need to add or remove the "`g.`" prefix from draw calls in order to change them
between drawing on the canvas, and drawing on a instance of `Graphics`.

```js
function draw() {
  beginLayer();
  background(100);
  fill('blue');
  circle(width / 2, height / 2, 100);
  endLayer();
}
```

![trail example animation](./p5.layers/docs/trail.gif)
![trail example animation](./p5.layers/docs/slices.gif)

* [Examples](./p5.layers/examples)

## [p5.vector-arguments](./p5.vector-arguments/)

[p5.vector-arguments](./p5.vector-arguments/) enables the use of [p5.js
Vectors](https://p5js.org/reference/#/p5/createVector) with the [p5.js Shape
functions](https://p5js.org/reference/#group-Shape).

```js
function draw() {
  let pt = createVector(mouseX, mouseY);
  circle(pt, 100);

  pt.add(100, 200);
  circle(pt, 50);
}
```

* [Examples](./p5.vector-arguments/examples)
