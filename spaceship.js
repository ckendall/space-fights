function Spaceship() {
	this.x = width/2;
	this.y = height;
	this.xSpeed = 3;
	this.ySpeed = 3;
	this.size = 20;
	this.upgrage = 0;
	this.bullet;

	this.draw = function() {
		fill(102, 102, 255)
		ellipse(this.x + (this.size/2), this.y - (this.size/2) , this.size, this.size)
	}

	this.update = function() {

		if(keyIsDown(LEFT_ARROW)){

			this.x -= this.xSpeed
		}

		if(keyIsDown(RIGHT_ARROW)){

			this.x += this.xSpeed
		}
		if(keyIsDown(UP_ARROW)){

			this.y -= this.xSpeed
		}
		if(keyIsDown(DOWN_ARROW)){

			this.y += this.xSpeed
		}

		this.x = constrain(this.x, this.size, width - this.size)
		this.y = constrain(this.y, this.size + this.size, height)

		if(frameCount % 40 === 0){
			this.bullet = new Bullet(this.x + this.size/2, this.y - this.size/2, "player")
			bullets.push(this.bullet);
		}
	}

}