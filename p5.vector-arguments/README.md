# p5.vector-arguments

[![npm version](https://badge.fury.io/js/p5.vector-arguments.svg)](https://www.npmjs.com/package/p5.vector-arguments)

p5.vector-arguments is a [p5.js](https://p5js.org) library that enables the use of
[p5.js Vectors](https://p5js.org/reference/#/p5/createVector) with the [p5.js
Shape functions](https://p5js.org/reference/#group-Shape).

It enables usage such as this:

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  enableVectorArguments();
}

function draw() {
  let pt = createVector(mouseX, mouseY);
  circle(pt, 100);

  pt.add(100, 200);
  circle(pt, 50);
}
```

Any p5.js function that accepts a pair of coordinates _x_ and _y_, can instead
accept an instance of p5.Vector.

You can mix and match numbers and vectors. For example, given `pt1 =
createVector(100, 200)` and `pt2 = createVector(50, 20)`, all of the following
are equivalent:

```js
rect(100, 200, 50, 20);
rect(pt1, 50, 20);
rect(100, 200, pt2);
rect(pt1, pt2);
```

## Installation

Download `p5.layer.js` from this repository. Include it in your HTML document by
adding this line, after the line that includes `p5.js` or `p5.min.js`:

```html
<script src="p5.vector-arguments.js"></script>
```

Or, use the online version by adding the following line to your HTML document:

```html
<script src="https://unpkg.com/p5.vector-arguments"></script>
```

## Examples

You can find a collection of examples in the [examples](./examples) folder in
this repository.

## License

MIT
