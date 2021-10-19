(() => {
  // src/vector-arguments.js
  p5.prototype.enableVectorArguments = enableVectorArguments;
  function enableVectorArguments() {
    for (const [key, argListSpec] of Object.entries(functionArgTypes)) {
      this instanceof p5 && replaceFunction(this, key, argListSpec);
      replaceFunction(window, key, argListSpec);
    }
    replaceFunction(p5.Element.prototype, "position", [2]);
  }
  var functionArgTypes = {
    "createCanvas": [2],
    "createGraphics": [2],
    "createImage": [2],
    "text": [0, 2, 2],
    "image": [0, 2],
    "arc": [2, 2],
    "circle": [2],
    "ellipse": [2, 2, 25],
    "line": [3, 3],
    "point": [3],
    "quad": [3, 3, 3],
    "rect": [2, 2],
    "square": [2],
    "triangle": [2, 2, 2],
    "bezier": [3, 3, 3, 3],
    "bezierVertex": [3, 3, 3],
    "curve": [3, 3, 3, 3],
    "curveVertex": [3],
    "vertex": [3],
    "quadraticVertex": [3, 3],
    "plane": [2],
    "box": [3],
    "ellipsoid": [3]
  };
  function replaceFunction(object, propertyName, argListSpec) {
    const originalFn = object[propertyName];
    const newFn = wrap(originalFn, argListSpec);
    const prop = Object.getOwnPropertyDescriptor(object, propertyName);
    if (prop) {
      Object.defineProperty(object, propertyName, "get" in prop ? { ...prop, get: () => newFn } : { ...prop, value: newFn });
    } else {
      object[propertyName] = newFn;
    }
  }
  function wrap(fn, argListSpec) {
    return function() {
      const args = unpackArgumentList(arguments, argListSpec);
      return fn.apply(this, args);
    };
  }
  function unpackArgumentList(args, argListSpec) {
    let includesVectors = false;
    for (let i2 = 0; i2 < args.length; i2++) {
      if (args[i2] instanceof p5.Vector) {
        includesVectors = true;
        break;
      }
    }
    if (!includesVectors) {
      return args;
    }
    let i = 0, o = 0;
    const result = new Array(args.length);
    for (let arity of argListSpec) {
      if (i >= args.length)
        break;
      let arg = args[i++];
      if (arity === 3 && drawingContext instanceof CanvasRenderingContext2D) {
        arity = 2;
      }
      if (arity === 2 || arity === 3) {
        if (arg instanceof p5.Vector) {
          result[o++] = arg.x;
          result[o++] = arg.y;
          if (arity == 3) {
            result[o++] = arg.z;
          }
        } else if (Array.isArray(arg) && arg.length === arity) {
          result[o++] = arg[0];
          result[o++] = arg[1];
          if (arity == 3) {
            result[o++] = arg[2];
          }
        } else if (!Number.isNaN(Number(arg))) {
          const stop = o + arity;
          do {
            result[o++] = arg;
            if (o === stop)
              break;
            arg = args[i++];
          } while (!Number.isNaN(Number(arg)));
          if (o < stop)
            break;
        } else
          break;
        continue;
      }
      result[o++] = arg;
    }
    while (i < args.length) {
      result[o++] = args[i++];
    }
    return result;
  }
})();
