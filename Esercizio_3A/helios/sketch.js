function setup() {
	createCanvas(windowWidth, windowHeight);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	let backgroundColor = calculateColor(hour());  // colore in base all'orario 
	background(backgroundColor);
	displayTime();
}

function displayTime() {
	let s = second();
	let m = minute();
	let h = hour();

	if (h > 12) {   // formato 12 ore e non 24
		h = h - 12;
	}

	if (h === 0) { // se mezzanotte è 00.00 fai si che si legga 12.00
		h = 12;
	}

	noStroke();
	fill(255);
	textAlign(LEFT, CENTER); 
	textSize(60); // dimensione "orario"
	textStyle(NORMAL);
	textFont("Arial", 200);

	let section = height / 3;
	let offset = 72; // offset per allineare la scritta laterale con la base del testo

	let timeHours = convertToWords(h);
	let timeYHours = section / 2; // posizione Y del testo delle ore
	text(timeHours, 10, timeYHours);

	push();
	translate(width - 40, timeYHours + offset); // sposta l'origine all'altezza del testo delle ore
	rotate(-PI / 2);
	textAlign(LEFT, CENTER); 
	textSize(30); // dimensione "hours"
	text("hours", 0, 0);
	pop(); 

	// Display minutes
	let timeMinutes = convertToWords(m);
	let timeYMinutes = section + section / 2; // posizione Y del testo dei minuti
	text(timeMinutes, 10, timeYMinutes);

	push();
	translate(width - 40, timeYMinutes + offset); // sposta l'origine all'altezza del testo dei minuti
	rotate(-PI / 2);
	textAlign(LEFT, CENTER); 
	textSize(30); // dimensione "minutes"
	text("minutes", 0, 0);
	pop(); 

	// Display seconds
	let timeSeconds = convertToWords(s);
	let timeYSeconds = 2 * section + section / 2; // posizione Y del testo dei secondi
	text(timeSeconds, 10, timeYSeconds); 

	push();
	translate(width - 40, timeYSeconds + offset); // sposta l'origine all'altezza del testo dei secondi
	rotate(-PI / 2);
	textAlign(LEFT, CENTER); 
	textSize(30); // dimensione "seconds"
	text("seconds", 0, 0);
	pop();
}

function convertToWords(num) { // converte i numeri in parole
	const words = [
		"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
		"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
		"seventeen", "eighteen", "nineteen"
	];
	const tens = ["twenty", "thirty", "forty", "fifty"];

	let result = "";

	if (num === 0) {
		return ""; // se i secondi corrispondono a 0 non scrivere niente
	} 

	if (num < 20) {
		result = words[num];

	} else {
		const tensDigit = Math.floor(num / 10);
		const unitDigit = num % 10;
		result = tens[tensDigit - 2];

		if (unitDigit !== 0) {
			result += "-" + words[unitDigit];
		}
	}

	return result;
}

function calculateColor(hour) {
	let colors = [
		color(0, 8, 20),
		color(0, 29, 61),
		color(1, 53, 103),
		color(255, 195, 0),
		color(255,148,0),
		color(255, 195, 0),
		color(1, 53, 103),
		color(0, 29, 61),
		color(0, 8, 20)
	];

	let index = int(map(hour, 0, 24, 0, colors.length - 1)); // ora corrente collegata alla palette di colori
	let backgroundColor = lerpColor(colors[index], colors[index + 1], hour % 1);

	return backgroundColor;
}
