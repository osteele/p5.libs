# p5.rotate-about

[![npm version](https://badge.fury.io/js/p5.rotate-about.svg)](https://www.npmjs.com/package/p5.rotate-about)

p5.rotate-about is a [p5.js](https://p5js.org) library that adds `rotateAbout()`
and `scaleAbout()` functions.

## Installation Options

### Option 1: Using a CDN

Use the online version by adding the following line to your HTML document:

```html
<script src="https://unpkg.com/p5.rotate-about"></script>
```

### Option 2: Downloading the library file

Alternatively, download `p5.layers.min.js` from this repository. Include it in your HTML
document by adding this line, after the line that includes `p5.js` or
`p5.min.js`:

```html
<script src="p5.rotateAbout.min.js"></script>
```

### Option 3: Using p5-server

The [p5-server](https://github.com/osteele/p5-server#readme) command-line tool,
and the [P5 Server Visual Studio Code
Extension](https://marketplace.visualstudio.com/items?itemName=osteele.p5-server),
will each infer this library from the presence of call to `rotateAbout()` or
`scaleAbout()` in a JavaScript-only sketch (one without an HTML file).

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
