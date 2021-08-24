/* exported beginLayer endLayer */

const __p5LayerStack = [];
const __p5LayerDict = new Map();
const __p5LayerFunctionOmitlist = ['createGraphics', 'millis'];

function beginLayer(graphicsOrKey, w, h, renderer) {
  if (graphicsOrKey instanceof Number && w instanceof Number) {
    return beginLayer(null, graphicsOrKey, w, h);
  }
  let graphics = graphicsOrKey instanceof p5.Graphics
    ? graphicsOrKey
    : __p5LayerDict.get(graphicsOrKey);
  if (!graphics) {
    graphics = createGraphics(w || width, h || height, renderer || P2D);
    if (graphicsOrKey !== 'new') __p5LayerDict.set(graphicsOrKey, graphics);
    graphics.background(0);
    graphics.clear();
  }

  const instance = window;
  const savedMethods = new Map();
  __p5LayerStack.push({ savedMethods, graphics, managed: graphics !== graphicsOrKey });
  for (const [k, v] of Object.entries(graphics)) {
    if (k in p5.prototype && k in instance && !__p5LayerFunctionOmitlist.includes(k) && typeof v === 'function') {
      savedMethods.set(k, instance[k]);
      instance[k] = (...args) => v.apply(graphics, args);
    }
  }
  return graphics;
}

function endLayer(x, y, w, h) {
  const instance = window;
  if (!__p5LayerStack.length) {
    console.warn('endLayer() was called without matching beginLayer()');
    return;
  }
  const { savedMethods, graphics, managed } = __p5LayerStack.pop();
  for (const [k, v] of savedMethods) {
    instance[k] = v;
  }
  if (x === undefined ? managed : x !== false) {
    image(graphics, x || 0, y || 0, w, h)
  }
}
