# p5.js Libraries

This project contains libraries for [p5.js](https://p5js.org).

## p5.layers

[p5.layers](./p5.layers/README.md#readme) simplifies some common use cases for
[p5.js Graphics](https://p5js.org/reference/#/p5/createGraphics) objects. It
makes it easier to use Graphics objects to implement drawing layers, and it
removes the need to add or subtract the `g.` prefix to draw calls in order to
change them between drawing on the canvas, and drawing on a Graphics.

```js
function draw() {
  beginLayer();
  background(100);
  fill('blue');
  circle(width / 2, height / 2, 100);
  endLayer();
}
```

## p5.vectorMode

[p5.vectorMode](./p5.vectorMode/README.md#readme) enables the use of
[p5.js Vectors](https://p5js.org/reference/#/p5/createVector) with the [p5.js
Shape functions](https://p5js.org/reference/#group-Shape).

```js
function draw() {
  let pt = createVector(mouseX, mouseY);
  circle(pt, 100);

  pt.add(100, 200);
  circle(pt, 50);
}
```

## License

MIT
