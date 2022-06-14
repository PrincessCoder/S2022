let yellow, blue;
let img;

function preload() {
  img = loadImage('assets/Geo7.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(8.5 * 72, 11 * 72);
  yellow = new Riso('yellow');
  blue = new Riso('blue');
  noLoop();
}

function draw() {
  background(255);

  clearRiso();

  let blues = extractRGBChannel(img, "blue");
  let yellows = extractRGBChannel(img, "yellow");

  yellow.imageMode(CENTER);
  blue.imageMode(CENTER);

  yellow.image(yellows, width / 2, height / 2, img.width / 2, img.height / 2);
  blue.image(blues, width / 2, height / 2, img.width / 2, img.height / 2);


  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Helvetica');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(800);
  textGraphic.text('ok', width * 0.5, height * 0.7);

  yellow.cutout(textGraphic);

  drawRiso();
}

function mousePressed() {
  exportRiso();
}