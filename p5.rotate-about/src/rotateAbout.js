function wrap(name, arity) {
  const fn = p5.prototype[name];
  return wrapped;

  function wrapped(...args) {
    const passedArgs = args.slice(0, arity);
    const rest = args.slice(arity);
    let [x, y, z] = rest;
    if (x instanceof p5.Vector) {
      if (rest.length > 1) {
        throw new Error(`${name} was called with the too many arguments (${args.length})`);
      }
      const v = x;
      x = v.x;
      y = v.y;
      z = drawingContext instanceof CanvasRenderingContext2D ? null : v.z;
    } else if (!(2 <= rest.length && rest.length <= 3)) {
      throw new Error(`${name} was called with the wrong number of arguments (${args.length})`);
    }
    if (z) {
      this.translate(x, y, z);
      fn.apply(this, passedArgs);
      this.translate(-x, -y, -z);
    } else {
      this.translate(x, y);
      fn.apply(this, passedArgs);
      this.translate(-x, -y);

    }
  }
}

p5.prototype.rotateAbout = wrap('rotate', 1);
p5.prototype.scaleAbout = wrap('scale', 2);
