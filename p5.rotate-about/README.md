# p5.rotate-about

[![npm version](https://badge.fury.io/js/p5.rotate-about.svg)](https://www.npmjs.com/package/p5.rotate-about)

p5.rotate-about is a [p5.js](https://p5js.org) library that adds `rotateAbout()`
and `scaleAbout()` functions.

Whereas the p5.js [`rotate()`](https://p5js.org/reference/#/p5/rotate)
function rotates around the _origin_, `rotateAbout()` takes additional _x_ and
_y_ arguments (or an additional
[p5.Vector](https://p5js.org/reference/#/p5.Vector) argument) that specify the
center of rotation.

A short example:

```js
// This sketch draws a rectangle that spins around the center of the canvas.
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220, 20);
  rotateAbout(frameCount, 200, 200);
  rect(100, 100, 20, 30);
}
```

(You can run this canvas and browse additional examples
[here](https://osteele.github.io/p5.libs/p5.rotate-about/examples/).)

Note: `rotateAbout()` is a very short, simple function. (See the final
installation option, below.) This library is most useful when there is a way to
include it automatically, or when you want to keep each sketch as short as
possible, for example for pedagogical purposes.

## Installation Options

### Option 1: Using a CDN

Use the online version by adding the following line to your HTML document:

```html
<script src="https://unpkg.com/p5.rotate-about"></script>
```

### Option 2: Downloading the library file

Alternatively, download `p5.rotateAbout.min.js` from this repository. Include it
in your HTML document by adding this line, after the line that includes `p5.js`
or `p5.min.js`:

```html
<script src="p5.rotateAbout.min.js"></script>
```

### Option 3: Using the p5-server CLI or Visual Studio Code extension

The [p5-server](https://github.com/osteele/p5-server#readme) command-line tool,
and the [P5 Server Visual Studio Code
Extension](https://marketplace.visualstudio.com/items?itemName=osteele.p5-server),
will each infer this library from the presence of call to `rotateAbout()` or
`scaleAbout()` in a JavaScript-only sketch (a sketch without an HTML file).

### Option 4: Skip the library – simply copy `rotateAbout()` into your sketch

A minimal implementation of `rotateAbout()` – that doesn't work in [p5 instance
mode](https://p5js.org/examples/instance-mode-instantiation.html) and doesn't
accept instances of `p5.Vector` – is very simple. Just add the following
function to your sketch:

```js
function rotateAbout(x, y, angle) {
  translate(x, y);
  rotate(angle);
  translate(-x, -y);
}
```

## Reference

### `rotateAbout()`

> `rotateAbout(angle, 100, 200);`

is equivalent to:

```js
translate(100, 200);
rotate(angle);
translate(-100, -200);
```

It can also be used with a vector:

> `rotateAbout(angle, createVector(100, 200));`

### `scaleAbout()`

> `rotateAbout(2, 3, 100, 200);`

is equivalent to:

```js
translate(100, 200);
rotate(2, 3);
translate(-100, -200);
```

Unlike `scale()`, both the `x` and `y` values must be supplied to
`scaleAbout()`. `scaleAbout(2, 100, 200)` does not work a shortcut for
`scaleAbout(2, 2, 100, 200)`. This may be fixed before version 1.0 is released.

<!-- footer -->

## Keeping in Touch

Report bugs, features requests, and suggestions
[here](https://github.com/osteele/p5.libs/issues), or message me [on
Twitter](https://twitter.com/osteele).

Follow [@osteele on Twitter](https://twitter.com/osteele) for updates.

## Other Work

[p5.js Libraries](https://osteele.github.io/p5.libs/) lists my other p5.js libraries.

[https://code.osteele.com](https://code.osteele.com#p5-js) lists my other p5.js
projects. These include tools, libraries, and examples and educational
materials.

## License

MIT
