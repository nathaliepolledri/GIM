function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(0);
	stroke(173, 232, 244); 
  
	for (let i = 0; i < 70; i++) {
	  let lunghezza = random(10, 70);
	  let gocciax = random(0, width);
	  let gocciay = random(-lunghezza, height);
	  strokeWeight(1);
	  line(gocciax, gocciay, gocciax, gocciay + lunghezza);
	}
  
	if (random(100) < 0.5) background(255);
  }
  