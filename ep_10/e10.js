window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		ship = particle.create(width/2, height/2, 0, 0, 0),
		angle = 0,
		turningLeft = turningRight = thrusting = false;
		
	update();

	document.body.addEventListener("keydown", function(event) {
		switch(event.keyCode) {
			case 37: //left
				turningLeft = true;
				break;
			case 38: //up
				thrusting = true
				break;
			case 39: //right
				turningRight = true;
				break;
			default:
				break;
		}
	});

	document.body.addEventListener("keyup", function(event) {
		switch(event.keyCode) {
			case 37: //left
				turningLeft = false;
				break;
			case 38: //up
				thrusting = false;
				break;
			case 39: //right
				turningRight = false;
				break;
			default:
				break;
		}
	});

	function update() {
		if(turningLeft) {
			angle -= 0.05;
		} else if(turningRight) {
			angle += 0.05;
		}

		if(ship.position.getX() > width) {
			ship.position.setX(0);
		} else if(ship.position.getX() < 0) {
			ship.position.setX(width);
		}

		if(ship.position.getY() > height) {
			ship.position.setY(0);
		} else if(ship.position.getY() < 0) {
			ship.position.setY(height);
		}

		if(thrusting) {
			var gravity = vector.create(0, 0);
			gravity.setLength(0.1);
			gravity.setAngle(angle);
			ship.gravity = gravity;
		} else {
			ship.velocity = vector.create(0, 0);
			ship.gravity = vector.create(0, 0);
		}

		context.clearRect(0,0,width,height);
		
		ship.update();

		context.save();
		context.translate(ship.position.getX(), ship.position.getY());
		context.rotate(angle);
		context.beginPath();
		context.moveTo(-10,0);
		context.lineTo(0,0);
		context.moveTo(10,0);
		context.lineTo(0,0);
		context.moveTo(0,-5);
		context.lineTo(10,0);
		context.moveTo(0,-5);
		context.lineTo(-10,0);

		if(thrusting) {
			context.moveTo(0,0);
			context.lineTo(0,5);
		}

		context.stroke();
		context.restore();

		requestAnimationFrame(update);
	}
};