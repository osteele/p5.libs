function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  beginLayer('left', width / 2, height);
  colorMode(RGB, height, width, height);
  background(200);
  for (let y = 0; y < height; y++) {
    stroke((y + frameCount) % height, width - mouseX, height - mouseY);
    line(0, y, width, height - y)
  }
  fill('white');
  text("RGB Mode", 10, 15);
  endLayer();

  beginLayer('right', width / 2, height);
  colorMode(HSB, height, width, height);
  background(200);
  for (let y = 0; y < height; y++) {
    stroke((y + frameCount) % height, width - mouseX, height - mouseY);
    line(0, y, width, height - y)
  }
  fill('white');
  text("HSB Mode", 10, 15);
  endLayer(width / 2, 0);
}
