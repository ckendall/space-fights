function Bullet(x, y){
	this.x = x;
	this.y = y;
	this.bulletSpeed = 4;
	this.size = 5;

	this.show = function() {
		fill(255, 0, 0)
		ellipse(this.x, this.y, this.size, this.size);
	}


	this.update = function() {
		for(var i = bullets.length - 1; i >= 0; i--){
			if(bullets[i].y < 0){
				bullets.splice(i, 1)
			}
		}
	}

	this.move = function() {
		this.y -= this.bulletSpeed;
	}

}