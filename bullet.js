function Bullet(x, y){
	this.x = x;
	this.y = y;
	this.bulletSpeed = 4;
	this.size = 5;

	this.show = function() {
		fill(255, 0, 0)
		ellipse(this.x, this.y, this.size, this.size);
	}

	this.move = function() {
		this.y -= this.bulletSpeed;
	}

}