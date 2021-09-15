# Examples

These sketches are examples for the [p5.vector-arguments](https://osteele.github.io/p5.libs/p5.vector-arguments/) p5.js library.

This library extend the p5.js functions to accept Vector arguments, so that you
can write e.g. `circle(c, 10)` instead of `circle(c.x, c.y, 10)` (`c` is a
variable whose value is an instance of p5.Vector).

The directory can be opened via [`p5
server`](https://osteele.github.io/p5-server/) (which knows how to run
JavaScript-only sketches, and recognizes to include the `p5.vector-arguments`
library in these sketches); or it can be browsed on the web at
<https://osteele.github.io/p5.libs/p5.vector-arguments/examples/>. The web
version was created by the `p5 build` subcommand of `p5 server`.

## Contents

[concentric-1](./concentric-1/)
[concentric-2](./concentric-2/)
[concentric-3](./concentric-3/)

Three studies inspired by Huw Messie's [Concentric Circles](https://huwmessie.com/2019/12/16/stitching-intricate/)

[dom](./dom/)

Demonstrates `createDiv().position()`  and `createButton().position()` with
`p5.Vector` arguments.

[shapes](./shapes/)

Demonstrates `circle()` and `rect()` with `p5.Vector arguments`. Move the mouse
to draw circles; click to draw a square.

[vertices](./vertices/)

Demonstrates `vertex(vector)` with a 2D `p5.Vector argument`.

[webgl](./webgl/)

Demonstrates `vertex(vector)` with a WEBGL canvas and a 3D `p5.Vector` argument.
