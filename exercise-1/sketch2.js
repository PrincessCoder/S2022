let blue;
let yellow;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  yellow = new Riso('yellow');
  blue = new Riso('blue');
  
  background(255);
  clearRiso();

  blue.fill(255);
  blue.ellipse(200, height / 2, 300, 300);

  yellow.fill(255);
  yellow.ellipse(400, height / 2, 300, 300);
  
  // yellow.cutout(blue); // cut blue out of yellow

  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Arial');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(20);
  textGraphic.text('together', width / 2 + 5, height / 2);

  blue.cutout(textGraphic); // cut text out of blue

  drawRiso();
}

function draw() {
  
}

function mouseClicked() {
  exportRiso();
}
