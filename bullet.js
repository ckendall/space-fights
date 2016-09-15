function Bullet(x, y, player, directionX, directionY){
	this.player = player;
	this.directionX = directionX;
	this.directionY = directionY;
	this.x = x;
	this.y = y;
	this.bulletSpeed = 4;
	this.modifier = 3
	this.size = 5;

	this.show = function() {
		fill(255, 0, 0)
		ellipse(this.x, this.y, this.size, this.size);
	}


	this.update = function() {
		for(var i = bullets.length - 1; i >= 0; i--){
			if(bullets[i].y < 0 || bullets[i].y > height || bullets[i].x > width || bullets[i].x < 0){
				bullets.splice(i, 1)
			}
		}
	}

	this.move = function() {
		if(this.player === 'player'){
			this.y -= this.bulletSpeed;
		}

		if(this.player === 'enemy'){
			this.y += this.directionY;
			this.x += this.directionX;
		}
	}

}