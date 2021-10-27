# Examples

These sketches are examples for the
[p5.rotate-about](https://osteele.github.io/p5.libs/p5.rotate-about/) library.
This library adds `rotateAbout()` and `scaleAbout()` functions to
[p5.js](https://p5js.org).

## Contents

### rotateAbout demo

A minimal example, that uses `rotateAbout()` to spin a rectangle around a point
above the center of the canvas.

### rotateAbout demo 2

An examples that uses `createVector()` to create and modify a vector, that is
used as the argument to `rotateAbout()` instead of supplying separate _x_ and
_y_ values.

### Comparison

The blue rectangle is drawn with `rotate()`. It spins around the origin (the
upper left corner of the canvas). It is therefore off of the visible canvas
roughly 3/4 of the time.

The green rectangle is drawn with `rotateAbout()`. It spins around the center of
the canvas.

### Spinning Plus

The first example I wrote. I don't know why I thought this one would be a good
example.

---

## Collophon

The directory can be opened via [`p5
server`](https://osteele.github.io/p5-server/). This command knows how to run
JavaScript-only sketches, and recognizes that the sketches in this directory
depend on the `p5.vector-arguments` library in these sketches.

Or, it can be browsed on the web at
<https://osteele.github.io/p5.libs/p5.rotate-about/examples/>.

The web version was created by the `p5 build` subcommand of `p5 server`.
