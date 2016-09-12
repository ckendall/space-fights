function Star() {
	this.y = random(-100, height)
	this.x = random(width)
	this.speedY = 2
	this.size = random(2, 4)

	this.show = function() {
		fill(255)
		rect(this.x, this.y, this.size, this.size)
	}

	this.moveThroughSpace = function() {
		this.y += this.speedY
		if(this.y > height){
			this.y = -100
			this.x = random(width)
		}
	}
}