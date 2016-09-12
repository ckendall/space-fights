function Star() {
	this.position = createVector(random(width), random(height));

	this.show = function() {
		fill(255)
		rect(this.position.x, this.position.y, 5, 5)
	}
}