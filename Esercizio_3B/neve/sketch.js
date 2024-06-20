let palline = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    let diametro = random(4, 9);
    let pallinax = random(0, width);
    let pallinay = random(-diametro, height);
    let speed = random(2, 4); 
    palline.push({ x: pallinax, y: pallinay, diametro: diametro, speed: speed });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120);
  fill(200); 
  noStroke(); 
  
  for (let i = 0; i < palline.length; i++) {
    let p = palline[i];
    ellipse(p.x, p.y, p.diametro, p.diametro);
    p.y += p.speed;

    if (p.y > height) {
      p.y = -p.diametro;
      p.x = random(0, width);
    }
  }
}

  