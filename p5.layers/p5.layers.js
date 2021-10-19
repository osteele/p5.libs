(() => {
  // src/layers.js
  var layerStack = [];
  var layerDict = new Map();
  var excludedFunctions = ["createGraphics", "millis"];
  function beginLayer(graphicsOrKey, w, h, renderer) {
    if (graphicsOrKey instanceof Number && w instanceof Number) {
      return beginLayer(null, graphicsOrKey, w, h);
    }
    let graphics = graphicsOrKey instanceof p5.Graphics ? graphicsOrKey : layerDict.get(graphicsOrKey);
    if (!graphics) {
      graphics = createGraphics(w || width, h || height, renderer || P2D);
      if (graphicsOrKey !== "new")
        layerDict.set(graphicsOrKey, graphics);
      graphics.background(0);
      graphics.clear();
    }
    const instance = window;
    const savedMethods = new Map();
    layerStack.push({ savedMethods, graphics, managed: graphics !== graphicsOrKey });
    for (const [k, v] of Object.entries(graphics)) {
      if (k in p5.prototype && k in instance && !excludedFunctions.includes(k) && typeof v === "function") {
        savedMethods.set(k, instance[k]);
        instance[k] = (...args) => v.apply(graphics, args);
      }
    }
    return graphics;
  }
  function endLayer(x, y, w, h) {
    const instance = window;
    if (!layerStack.length) {
      console.warn("endLayer() was called without matching beginLayer()");
      return;
    }
    const { savedMethods, graphics, managed } = layerStack.pop();
    for (const [k, v] of savedMethods) {
      instance[k] = v;
    }
    if (x === void 0 ? managed : x !== false) {
      image(graphics, x || 0, y || 0, w, h);
    }
  }
  p5.prototype.beginLayer = beginLayer;
  p5.prototype.endLayer = endLayer;
})();
