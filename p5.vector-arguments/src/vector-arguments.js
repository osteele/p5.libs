p5.prototype.enableVectorArguments = enableVectorArguments;

function enableVectorArguments() {
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
  for (const [key, argListSpec] of Object.entries(functionArgTypes)) {
    this instanceof p5 && wrap(this, key, argListSpec);
    wrap(window, key, argListSpec);
  }
  wrap(p5.Element.prototype, 'position', [2]);
}

// call the original function with an argument list in which Vectors and
// Arrays have been replaced by their components.
function wrap(object, propertyName, argListSpec) {
  const originalFn = object[propertyName];
  function newFn() {
    const args = unpackArgumentList(arguments, argListSpec);
    return originalFn.apply(this, args);
  }
  newFn.displayName = originalFn.displayName;
  newFn.name = originalFn.name;
  newFn.length = originalFn.length;

  const prop = Object.getOwnPropertyDescriptor(object, propertyName);
  if (prop) {
    Object.defineProperty(object, propertyName, 'get' in prop
      ? { ...prop, get: () => newFn }
      : { ...prop, value: newFn });
  } else {
    object[propertyName] = newFn;
  }
}

function unpackArgumentList(args, argListSpec) {
  let includesVectors = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i] instanceof p5.Vector) {
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
        // Read the next n numbers from the argument list. Use
        // `isNaN(Number(arg))` instead of `typeof arg === 'number'`, in
        // order to preserve the underlying behavior of e.g. circle('10',
        // '20', '50').
      } else if (!Number.isNaN(Number(arg))) {
        const stop = o + arity;
        do {
          result[o++] = arg;
          if (o === stop) break;
          arg = args[i++];
        } while (!Number.isNaN(Number(arg)));
        if (o < stop) break;
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
