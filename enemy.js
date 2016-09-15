function Enemy(x, y) {
	this.x = x;
	this.y = y;
	this.xSpeed = 1;
	this.ySpeed = 1;
	this.size = 20;
	this.modifier = 4;
	this.hit = false

	this.draw = function() {
		fill(0, 153, 51)
		rect(this.x, this.y, this.size, this.size)
	}

	this.update = function(){
		this.y += this.ySpeed
		this.x += this.xSpeed

		if(this.y >= height/2){
			this.ySpeed = -this.ySpeed;
		}
		if(this.y <= 0){
			this.ySpeed = -this.ySpeed;
		}
		if(this.x >= width - this.size){
			this.xSpeed = -this.xSpeed;
		}
		if(this.x <= 0){
			this.xSpeed = -this.xSpeed;
		}

	}

	this.fireTowardsPlayer = function() {
		var targetX = spaceship.x + spaceship.size/2;
		var targetY = spaceship.y - spaceship.size/2;
		var directionX = targetX - (this.x + this.size/2);
		var directionY = targetY - (this.y + this.size);
		var len = Math.sqrt(directionX * directionX + directionY * directionY);
		directionX /= len;
		directionY /= len;

		if(frameCount % 80 === 0){
			var bullet = new Bullet(this.x + this.size/2, this.y + this.size, "enemy", directionX, directionY)
			bullets.push(bullet);
		}
	}

	this.destroyed = function() {
		var d;
		for(var i = enemies.length - 1; i >= 0; i--){
			for(var j = bullets.length - 1; j >= 0; j--){
				d = dist(enemies[i].x + enemies[i].size/2, enemies[i].y, bullets[j].x, bullets[j].y)
				if(d < 10 && bullets[j]['player'] === 'player'){
					bullets.splice(j, 1)
					enemies[i].hit = true
				}
			}
		}

		for(var i = enemies.length - 1; i >= 0; i--){
			if(enemies[i].hit === true){
				enemies.splice(i, 1)
			}
		}
	}

}