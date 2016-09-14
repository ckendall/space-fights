var stars = [];
var bullets = [];
var spaceship, enemy, bullet; 

function setup(){
	createCanvas(600, 500);
	for(var i = 0; i < 400; i++){
		 stars[i] = new Star
	}
	enemy = new Enemy
	spaceship = new Spaceship
}

function draw() {
	background(51);
	for(var i = 0; i < stars.length; i++){
		 stars[i].show();
		 stars[i].moveThroughSpace();
	}

	for(var i = 0; i < bullets.length; i++){	
		bullets[i].show();
		bullets[i].move();
		bullets[i].update();
	}

	if(frameCount % 30 === 0){
		bullet = new Bullet(spaceship.x, spaceship.y - spaceship.size)
		bullets.push(bullet);
		
	}
	
	spaceship.draw();
	spaceship.update();
	enemy.draw();

}



