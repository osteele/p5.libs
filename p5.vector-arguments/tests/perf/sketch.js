let runButton;
let perfPromise;

function setup() {
  createCanvas(200, 400);
  runButton = createButton('Run again').position(15, 150).mousePressed(() => {
    console.clear();
    perfPromise = null;
  });
}


function draw() {
  if (perfPromise) {
    perfPromise = perfPromise.then();
  } else {
    runButton.hide();
    perfPromise = runTests().then(() => runButton.show());
  }
}

function mousePressed() {
  console.clear();
  perfPromise = null;
}

async function runTests() {
  console.log('Before calling enableVectorArguments:');
  console.group();
  const before = {
    scalarCircle: await perf(circleWithNumbers),
    scalarRect: await perf(rectWithNumbers),
  };
  console.groupEnd();

  enableVectorArguments();
  console.log('After calling enableVectorArguments:');
  console.group();
  const after = {
    scalarCircle: await perf(circleWithNumbers),
    vectorCircle: await perf(circleWithAVector),
    scalarRect: await perf(rectWithNumbers),
    firstVectorRect: await perf(rectWithVectorPosition),
    secondVectorRect: await perf(rectWithVectorSize),
    bothVectorsRect: await perf(rectWithAllVectors),
  };
  console.groupEnd();

  console.log('Enabling enableVectorArguments (and still using numbers):');
  console.group();
  for (const key in before) {
    console.log(`${fromCamel(key)}: ${comparison(before[key], after[key])}`);
  }
  console.groupEnd();

  console.log('Replacing two numbers by a Vector:');
  console.group();
  for (const [k1, k2] of [['scalarCircle', 'vectorCircle'],
  ['scalarRect', 'firstVectorRect'],
  ['scalarRect', 'secondVectorRect']]) {
    console.log(`${fromCamel(k1)}->${fromCamel(k2)}: ${comparison(after[k1], after[k2])}`);
  }
  console.groupEnd();

  console.log('Replacing four numbers by a Vector:');
  console.group();
  for (const [k1, k2] of [['scalarRect', 'bothVectorsRect']]) {
    console.log(`${fromCamel(k1)}->${fromCamel(k2)}: ${comparison(after[k1], after[k2])}`);
  }
  console.groupEnd();

  function comparison(before, after) {
    const dt = after - before;
    const pct = fmt(100 * dt / before);
    return pct > 0 ? `${pct}% (${fmt(dt)} µ/call) slower` : `${-pct}% (${-dt.toFixed(2)} µ/call) faster`;
  }
}

// fn(n) runs the test. The loop counter is an argument, in order to avoid
// the function call overhead.

async function perf(fn) {
  // Figure out how many times to run the function. This also warms the cache.
  let count = 100;
  while (true) {
    let dt = -performance.now();
    fn(count);
    dt += performance.now();
    if (dt > 100) {
      // console.log(`${name || fn.name} took ${dt} ms for ${count} calls`);
      break;
    }
    count *= 2;
    await new Promise(resolve => setTimeout(resolve, 1));
  }

  // Subtract out the time to run the function 0 times, then run it.
  let dt = performance.now();
  fn(0);
  dt -= 2 * performance.now();
  fn(count);
  dt += performance.now();
  const ms = 1000 * dt / count;
  console.log(fromCamel(fn.name) + ': ' + fmt(ms) + ' µs / call');
  return ms;
}

function circleWithNumbers(n) {
  for (let i = 0; i < n; i++) {
    circle(50, 50, 50);
  }
}

function circleWithAVector(n) {
  let pt = createVector(50, 50);
  for (let i = 0; i < n; i++) {
    circle(pt.x, pt.y, 50);
  }
}

function rectWithNumbers(n) {
  for (let i = 0; i < n; i++) {
    rect(25, 100, 50, 40);
  }
}

function rectWithVectorPosition(n) {
  let pt = createVector(25, 100);
  for (let i = 0; i < n; i++) {
    rect(pt, 50, 40);
  }
}

function rectWithVectorSize(n) {
  for (let i = 0; i < n; i++) {
    let size = createVector(50, 40);
    rect(25, 100, size);
  }
}

function rectWithAllVectors(n) {
  let pt = createVector(25, 100);
  let size = createVector(50, 40);
  for (let i = 0; i < n; i++) {
    rect(pt, size);
  }
}

const fromCamel = s => s.replace(/([A-Z])/g, s => ' ' + s.toLowerCase());

const fmt = n => Math.abs(n) < 1 ? n.toFixed(2) : Math.abs(n) < 10 ? n.toFixed(1) : n.toFixed(0);
