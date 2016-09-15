var stars = [];
var bullets = [];
var enemies = [];
var spaceship; 

function setup(){
	createCanvas(600, 500);

	for(var i = 0; i < 400; i++){
		 stars[i] = new Star
	}
	for(var i = 0; i < 5; i++){
		enemies[i] = new Enemy(i * 80 + 80, 60)
	}
	spaceship = new Spaceship
}

function draw() {
	background(51);

	for(var i = 0; i < stars.length; i++){
		 stars[i].show();
		 stars[i].moveThroughSpace();
	}

	for(var i = bullets.length - 1; i >= 0; i--){	
		bullets[i].show();
		bullets[i].move();
		bullets[i].update();
	}

	for(var i = enemies.length - 1; i >= 0; i--){
		enemies[i].draw();
		enemies[i].update();
		enemies[i].fireTowardsPlayer();
		enemies[i].destroyed();
	}
	spaceship.draw();
	spaceship.update();


}



