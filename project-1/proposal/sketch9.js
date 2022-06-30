let blue, red, green;
let imgs = [];

function preload() {
    for (var i = 0; i < 7; i++) {
        imgs[i] = loadImage("assets/IMG_" + i + ".png");
    }
}

function setup() {
  pixelDensity(1);
  createCanvas(11 * 72, 8.5 * 72);
  blue = new Riso('mint');
  red = new Riso('lightlime');
  green = new Riso('fluorescentpink');
   noLoop();
}

function draw() {
  background(255);

  clearRiso();

  let reds = extractRGBChannel(img, "red");
  let blues = extractRGBChannel(img, "blue");
  let greens = extractRGBChannel(img, "green");
  
  blue.imageMode(CENTER);
  red.imageMode(CENTER);
  green.imageMode(CENTER);

  blue.image(blues, img.width / (random(1,3)), img.height / 2);
  red.image(reds, img.width / 2, img.height / 2);
    green.image(greens, random(0,windowWidth), random(0,windowHeight), img.width / 2, img.height / 2);

//   let textGraphic = createGraphics(width, height);
//   textGraphic.fill(0);
//   textGraphic.textStyle(BOLD);
//   textGraphic.textFont('Helvetica');
//   textGraphic.textAlign(CENTER, CENTER);
//   textGraphic.textSize(200);
//   textGraphic.text('MOD', width * 0.5, height * 0.7);

//   blue.cutout(textGraphic);

  drawRiso();

}

function mousePressed() {
  exportRiso();
}

// function mousePressed() {
//     loop();
//   }
  
//   function mouseReleased() {
//     noLoop();
//   }