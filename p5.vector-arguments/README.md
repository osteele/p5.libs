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

## Performance Notes

Run [tests/perf](./tests/perf/index.html) to see the effect of the performance plugin on performance. Look in JavaScript Developer Console.

There are two questions about performance:

1. What is the effect of calling `enableVectorArguments()` on calls that do not
   use the features that it provide? On my computer, `circle(50, 50, 10)` is
   about the same speed. `square(10, 10, 50, 50)` is about 2-5% (0.03–0.09µ/call)
   slower.
2. Once `enableVectorArguments()` has been called, what is the performance of
   using a Vector to a function, instead of two (or three) numbers? In my tests,
   replacing two numbers by a Vector leaves `circle()` about the same speed
   (sometimes it is faster, sometimes slower) and `rect()` about 45%
   (0.45µ/call) slower.

## License

MIT
