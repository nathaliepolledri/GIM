let posizioneX, posizioneY;
let velX, velY;
let diametro = 300; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  posizioneX = width / 2;
  posizioneY = height / 2;

  velX = 11;
  velY = 12;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  posizioneX += velX;
  posizioneY += velY;

  if (posizioneX + diametro / 2 >= width || posizioneX - diametro / 2 <= 0) {
    velX = -velX;
  }

  if (posizioneY + diametro / 2 >= height || posizioneY - diametro / 2 <= 0) {
    velY = -velY;
  }

  background(0);
  fill(255, 194, 209);
  circle(posizioneX, posizioneY, diametro);
}
