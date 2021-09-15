# Examples

These sketches are examples for the
[p5.layers](https://osteele.github.io/p5.libs/p5.layers/) library. They
demonstrate some effects that can be achieved by using instances of p5.Graphics,
and techniques for using the p5.layers library to do so.

## Contents

### trail

A common trick in creative coding is to call `background()` with a non-full
opacity argument. This causes moving objects to leave a trail. This trick works
when *everything* that is drawn on the canvas should leave a trail. How about
when only *some* objects should leave a trail?

One solution is to use an Array, in order to re-draw all the elements of the
trail each time the canvas is erased. ([This
example](https://openprocessing.org/sketch/1031294) demonstrates this
technique.)

Another is to draw the object that leaves a trail in its own layer. That's what
the example in this directory does. ([This
example](https://openprocessing.org/sketch/1031301) demonstrates how to use this
technique without uisng the p5.layer library.)

### lissajous

Another example of using a Graphics in order for one object to allow one
object to leave a trail, while the rest of the canvas is fully erased.

### slices

Using two layers in order to slice a sketch into two rectangles. These
rectangles can then be moved independently around the canvas.

### createGraphics

In this example, `enterLayer()` is only used to temporarily replace the p5.js
graphics commands. The sketch itself is responsible for creating and drawing the
Graphics.

### adjacent-layers

Call `enterLayer()` with two different keys, in order to create two Graphics
that are drawn side by side.

---

## Collophon

The directory can be opened via [`p5
server`](https://osteele.github.io/p5-server/). This command knows how to run
JavaScript-only sketches, and recognizes that the sketches in this directory
depend on the `p5.vector-arguments` library in these sketches.

Or, it can be browsed on the web at
<https://osteele.github.io/p5.libs/p5.vector-arguments/examples/>.

The web version was created by the `p5 build` subcommand of `p5 server`.
