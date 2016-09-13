var stars = [];
var spaceship; 

function setup(){
	createCanvas(600, 500);
	for(var i = 0; i < 400; i++){
		 stars[i] = new Star
	}
	spaceship = new Spaceship
}

function draw() {
	background(51);
	for(var i = 0; i < stars.length; i++){
		 stars[i].show();
		 stars[i].moveThroughSpace();
	}

	spaceship.draw();
	spaceship.update();
}


