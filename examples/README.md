# Examples

[trail](./trail/)

: A common trick is to call `background()` with a non-full opacity argument, in
order to leave a trail. This works when everything on the canvas should leave a
trail. How about when only some objects should leave a trail?

: One solution is to use an Array, in order to re-draw all the elements of the
trail each time the canvas is erased. ([This
example](https://openprocessing.org/sketch/1031294) demonstrates this
technique.) Another is to draw the object that leaves a trail in its own layer.
That's what this example does. ([This
example](https://openprocessing.org/sketch/1031301) demonstrates the same
technique without the p5.layer library.)

[lissajous](./lissajous/)

: Another example of using a Graphics in order for one object to allow one
object to leave a trail, while the rest of the canvas is fully erased.

[slices](./slices/)

: Using two layers in order to slice an sketch into two rectangles, that can be
moved independently.

[explicit-graphics](./explicit-graphics/)

: In this example, `enterLayer()` is only used to temporarily replace the p5.js
graphics commands. The sketch itself is responsible for creating and drawing the
Graphics.
