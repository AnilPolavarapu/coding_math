var particle = {
	position: null,
	velocity: null,
	mass: 1,

	create:function(x,y,speed,direction) {
		var obj = Object.create(this);
		obj.position = vector.create(x,y);
		obj.velocity = vector.create(0,0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);
		return obj;
	},

	angleTo:function(p) {
		return Math.atan2(p.position.getY() - this.position.getY(), p.position.getX() - this.position.getX());
	},

	distanceTo:function(p) {
		var xdiff = p.position.getX() - this.position.getX();
		var ydiff = p.position.getY() - this.position.getY();
		return Math.sqrt(xdiff*xdiff + ydiff*ydiff);
	},

	gravitateTo: function(p) {
		//console.log("Current: " + this.velocity.getX() + ":" + this.velocity.getY());
		var distance = this.distanceTo(p),
			angle = this.angleTo(p);

		var gravity = vector.create(0,0);
		gravity.setLength(p.mass/distance*distance);
		gravity.setAngle(angle);

		//console.log("Adding " + distance + " : " + angle);
		this.velocity.addTo(gravity);
		//console.log("New: " + this.velocity.getX() + ":" + this.velocity.getY());
	},

	update: function() {
		this.position.addTo(this.velocity);
	}
};