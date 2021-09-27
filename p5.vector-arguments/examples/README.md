# Examples

These sketches are examples for the
[p5.vector-arguments](https://osteele.github.io/p5.libs/p5.vector-arguments/)
library.

This library extends the [p5.js shape
functions](https://p5js.org/reference/#group-Shape), such as `circle()`, to
accept vectors as arguments. This allows you to write e.g. `circle(c, 10)`
instead of `circle(c.x, c.y, 10)`, where `c` is a variable whose value is an
instance of p5.Vector (a value that is returned by
[createVector](https://p5js.org/reference/#/p5/createVector) or by of the
[methods that returns vectors](https://p5js.org/reference/#/p5.Vector)).

## Contents

### concentric-n (1–3)

Three studies inspired by Huw Messie's [Concentric Circles](https://huwmessie.com/2019/12/16/stitching-intricate/)

### dom

Demonstrates `createDiv().position()`  and `createButton().position()` with
`p5.Vector` arguments.

### shapes

Demonstrates `circle()` and `rect()` with `p5.vectorArguments`. Move the mouse
to draw circles; click to draw a square.

### vertices

Demonstrates `vertex(vector)` with a 2D `p5.vectorArguments`.

### webgl

Demonstrates `vertex(vector)` with a WEBGL canvas and a 3D `p5.Vector` argument.

---

## Collophon

The directory can be opened via [`p5
server`](https://osteele.github.io/p5-server/). This command knows how to run
JavaScript-only sketches, and recognizes that the sketches in this directory
depend on the `p5.vector-arguments` library in these sketches.

Or, it can be browsed on the web at
<https://osteele.github.io/p5.libs/p5.vector-arguments/examples/>.

The web version was created by the `p5 build` subcommand of `p5 server`.
