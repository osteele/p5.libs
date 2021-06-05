# p5.layers

p5.layers is a [p5.js](https://p5js.org) library that simplifies the use of
P5.js Graphics objects (created by `createGraphics()`).

It allows code to use the global draw functions (such as `background()`,
`colorMode()`, `rect()`), without prefixing them with the a variable name. This
makes it easier to change code that draws onto the canvas, to draw onto a
Graphics instead.

It does this by adding two functions, `beginLayer()` and `endLayer()`, that
modify these functions to draw onto a layer instead of onto the the canvas.
These functions can also create the Graphics, and render it onto the canvas,
simplifying a common use case.

For example:

```js
beginLayer();
background(100);
fill('blue');
circle(width / 2, height / 2, 100);
endLayer();
```

is the equivalent of:

```js
let pg = createGraphics(100, 100);
pg.background(100);
pg.fill('blue');
pg.circle(pg.width / 2, pg.height / 2, 100);
image(pg, 0, 0);
```

except that `beginLayer()` the same Graphics the second (and subsequent)
times that it is called.

The Graphics instances that `beginLayer()` creates persist across calls to
`draw()`. For example, the following code, from
<./examples/lissajous/sketch.js>, leaves a trail of circles, because the layer
is only partially erased (the second argument to `background()` is a value that
indicates partial opacity). It is drawn onto a canvas that is completely erased
each frame, as required by the other code in the `draw()` function in that file.

```js
  beginLayer();
  background(100, 10);
  let x = map(sin(millis() / 500), -1, 1, 0, width);
  let y = map(sin(millis() / 700), -1, 1, 0, height);
  circle(x, y, 20);
  endLayer();
```

The equivalent functionality, without using `beginLayer()` and `endLayer()`, would require code in `setup()`, `draw()`, and the global context:

```js
let pg;

// in setup():
  pg = createGraphics(width, height);

// in draw():
  pg.background(100, 10);
  let x = map(sin(millis() / 500), -1, 1, 0, pg.width);
  let y = map(sin(millis() / 700), -1, 1, 0, pg.height);
  pg.circle(x, y, 20);
  image(pg, 0, 0);
```

## Installation

Download `p5.layer.js` from this repository and include it in your HTML document:

```html
<script src="p5.layers.js" type="text/javascript"></script>
```

Or, use the online version:

```html
<script src="https://unpkg.com/p5.layers@0.0.1/p5.layers.js" type="text/javascript"></script>
```

## Reference

### `beginLayer()`

Sets the p5.js global functions `background()`, `draw()` etc. to render into the
specified layer. If no layer is specified, one is created.

Syntax:

> `beginLayer()`
> `beginLayer([width, height, [renderer]])`

The first time this function is called, it creates a p5.Graphics. Subsequent
calls return the existing Graphics. (If the arguments are omitted, the Graphics
is created at the canvas width and height.) On subsequent calls, the `width`,
`height`, and `renderer` arguments are ignored, and the previously-created
Graphics is used.

`beginLayer()` returns the Graphics.

> `beginLayer(key, [width, height, renderer])`

This form can be used to create multiple layers. `beginLayer()` will create a
new layer for each distinct `key`. The special key value `"new"` always creates
a new layer.

> `beginLayer(graphics)`

This form can be used to set global draw functions to render onto a Graphics
that was created by `createGraphics()`.

### `endLayer()`

Restores the global draw functions `rect()` etc. so that they operate on the
canvas again, instead of the Graphics created by or passed as an argument to
`beginLayer()`. This function also draws the Graphics onto the canvas – although
this behavior can be suppressed.

Syntax:

> `endLayer()`

Restores the global draw functions, and draws the Graphics onto the canvas
unless the argument to `enterGraphics()` was a Graphics.

> `endLayer(x, y, [width, height])`

Restores the global draw functions, and draws the Graphics onto the canvas.

> `endLayer(false)`

Restores the global draw functions. Does not draw the Graphics onto the canvas.

## Examples

You can find a collection of examples in the [examples](./examples) folder in this repository.

## Motivation

1. My students in Creative Coding frequently wanted to use the equivalent of the
   Layers concept from GUI painting and drawing applications. I found that this
   required a significant hurdle, both because of the terminology and the
   mechanics.
2. Because the p5.Graphics functions are methods on the instance, changing code
   to operate on the canvas such that it instead operates p5.Graphics requires a
   significant amount of editing.

## Caveats

- The code only works in [global
  mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode). It
  does not check whether it is running in global mode.
- The code does not validate its arguments, and does not use the p5.js Friendly
  Error System.
- The code has only been tested in modern browsers.
- This project is very new. Other things be wrong with it.

## License

MIT
