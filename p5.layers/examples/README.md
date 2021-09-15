# Examples

These sketches are examples for the [p5.layers](https://osteele.github.io/p5.libs/p5.layers/) p5.js library.

This library extend the p5.js functions to accept Vector arguments, so that you
can write e.g. `circle(c, 10)` instead of `circle(c.x, c.y, 10)` (`c` is a
variable whose value is an instance of p5.Vector).

The directory can be opened via [`p5
server`](https://osteele.github.io/p5-server/) (which knows how to run
JavaScript-only sketches, and recognizes to include the `p5.layers`
library in these sketches); or it can be browsed on the web at
<https://osteele.github.io/p5.libs/p5.layers/examples/>. The web
version was created by the `p5 build` subcommand of `p5 server`.

## Contents

### [trail](./trail/)

A common trick is to call `background()` with a non-full opacity argument, in
order to leave a trail. This works when everything on the canvas should leave a
trail. How about when only some objects should leave a trail?

One solution is to use an Array, in order to re-draw all the elements of the
trail each time the canvas is erased. ([This
example](https://openprocessing.org/sketch/1031294) demonstrates this
technique.) Another is to draw the object that leaves a trail in its own layer.
That's what this example does. ([This
example](https://openprocessing.org/sketch/1031301) demonstrates the same
technique without the p5.layer library.)

### [lissajous](./lissajous/)

Another example of using a Graphics in order for one object to allow one
object to leave a trail, while the rest of the canvas is fully erased.

### [slices](./slices/)

Using two layers in order to slice an sketch into two rectangles, that can be
moved independently.

### [createGraphics](./createGraphics/)

In this example, `enterLayer()` is only used to temporarily replace the p5.js
graphics commands. The sketch itself is responsible for creating and drawing the
Graphics.

### [adjacent-layers](./adjacent-layers/)

Call `enterLayer()` with two different keys, in order to create two Graphics
that are drawn side by side.
