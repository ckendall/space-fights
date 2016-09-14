function Enemy() {
	this.x = width/2;
	this.y = 0;
	this.size = 20;

	this.draw = function() {
		fill(0, 153, 51)
		rect(this.x, this.y, this.size, this.size)
	}

}