function vectorMode(p5Instance) {
  // Each key is a list of argument types. 2 indicates a 2D vector, 3 is a 2D or 3D vector
  // depending on the canvas type. A n-D vector can be saturated by the first n components
  // of a p5.Vector, by an Array with length n, or by n arguments from the argument list.
  const functionArgTypes = {
    'createCanvas': [2],
    'createGraphics': [2],
    'createImage': [2],
    'text': [0, 2, 2],
    'image': [0, 2],

    'arc': [2, 2],
    'circle': [2],
    'ellipse': [2, 2, 25],
    'line': [3, 3],
    'point': [3],
    'quad': [3, 3, 3],
    'rect': [2, 2],
    'square': [2],
    'triangle': [2, 2, 2],

    'bezier': [3, 3, 3, 3],
    'bezierVertex': [3, 3, 3],
    'curve': [3, 3, 3, 3],
    'curveVertex': [3],
    'vertex': [3],
    'quadraticVertex': [3, 3],

    'plane': [2],
    'box': [3],
    'ellipsoid': [3],
  }

  for (const key of Object.keys(functionArgTypes)) {
    wrap(p5Instance || this, key, functionArgTypes[key])
  }
  wrap(p5.Element.prototype, 'position', [2]);

  // Replace object[key] by a wrapped version of the original function that will
  // call the original function with an argument list in which Vectors and
  // Arrays have been replaced by their components.
  function wrap(object, propertyName, argListSpec) {
    const originalFn = object[propertyName];
    object[propertyName] = function () {
      let i = 0, o = 0;
      const args = new Array(arguments.length);
      for (const arity of argListSpec) {
        if (i >= arguments.length)
          break;
        let arg = arguments[i++];
        if (arity === 3 && drawingContext instanceof CanvasRenderingContext2D) {
          arity = 2;
        }
        if (arity === 2 || arity === 3) {
          if (arg instanceof p5.Vector) {
            args[o++] = arg.x;
            args[o++] = arg.y;
            if (arity == 3) {
              args[o++] = arg.z;
            }
          } else if (Array.isArray(arg) && arg.length === arity) {
            args[o++] = arg[0];
            args[o++] = arg[1];
            if (arity == 3) {
              args[o++] = arg[2];
            }
            // Read the next n numbers from the argument list. Use
            // `isNaN(Number(arg))` instead of `typeof arg === 'number'`, in
            // order to preserve the underlying behavior of e.g. circle('10',
            // '20', '50').
          } else if (!Number.isNaN(Number(arg))) {
            const stop = o + arity;
            // console.info('copy', o, stop);
            do {
              // console.info('write', o, arg);
              args[o++] = arg;
              if (o === stop) break;
              arg = arguments[i++];
              // console.info('read', i - 1, arg);
            } while (!Number.isNaN(Number(arg)));
            if (o < stop) break;
            // console.info('copied', args);
          } else
            break;
          continue;
        }
        args[o++] = arg;
      }
      while (i < arguments.length) {
        args[o++] = arguments[i++];
      }
      // console.info(args);
      return originalFn.apply(this, args);
    };
  }
}
