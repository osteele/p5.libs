const layerStack = [];
const layerDict = new Map();
const excludedFunctions = ['createGraphics', 'millis'];

/** Sets the p5.js global functions `background()`, `draw()` etc. to render into
the specified layer. If no layer is specified, one is created.

Syntax:

> `beginLayer()`
>
> `beginLayer([width, height, [renderer]])`

The first time this function is called, it creates an instance of p5.Graphics.
Subsequent calls return this instance. (If the arguments are omitted, the
Graphics is created at the canvas width and height.) On subsequent calls, the
`width`, `height`, and `renderer` arguments are ignored, and the
previously-created instance is used.

`beginLayer()` returns the Graphics.

> `beginLayer(key, [width, height, renderer])`

This form can be used to create multiple layers. `beginLayer()` will create a
new layer for each distinct `key`. The special key value `"new"` always creates
a new layer.

> `beginLayer(graphics)`

This form can be used to set global draw functions to render onto a Graphics
that was created by `createGraphics()`.
*/
function beginLayer(graphicsOrKey, w, h, renderer) {
  if (graphicsOrKey instanceof Number && w instanceof Number) {
    return beginLayer(null, graphicsOrKey, w, h);
  }
  let graphics = graphicsOrKey instanceof p5.Graphics
    ? graphicsOrKey
    : layerDict.get(graphicsOrKey);
  if (!graphics) {
    graphics = createGraphics(w || width, h || height, renderer || P2D);
    if (graphicsOrKey !== 'new') layerDict.set(graphicsOrKey, graphics);
    graphics.background(0);
    graphics.clear();
  }

  const instance = window;
  const savedMethods = new Map();
  layerStack.push({ savedMethods, graphics, managed: graphics !== graphicsOrKey });
  for (const [k, v] of Object.entries(graphics)) {
    if (k in p5.prototype && k in instance && !excludedFunctions.includes(k) && typeof v === 'function') {
      savedMethods.set(k, instance[k]);
      instance[k] = (...args) => v.apply(graphics, args);
    }
  }
  return graphics;
}

/** Restores the global draw functions `rect()` etc. so that they operate on the
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
*/
function endLayer(x, y, w, h) {
  const instance = window;
  if (!layerStack.length) {
    console.warn('endLayer() was called without matching beginLayer()');
    return;
  }
  const { savedMethods, graphics, managed } = layerStack.pop();
  for (const [k, v] of savedMethods) {
    instance[k] = v;
  }
  if (x === undefined ? managed : x !== false) {
    image(graphics, x || 0, y || 0, w, h)
  }
}

p5.prototype.beginLayer = beginLayer;
p5.prototype.endLayer = endLayer;
