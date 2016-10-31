window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		sun = particle.create(width/2, height/2, 0, 0),
		//planet = particle.create(width + 300, height/2, 1, -Math.PI/2);
		planet = particle.create(width + 300, height/2, 0, 0);
	
	sun.mass = 5000;
	//planet.mass = 10;

	update();

	function update() {
		//sun.gravitateTo(planet);
		planet.gravitateTo(sun);
		planet.update();
		//sun.update();
		
		context.clearRect(0,0,width,height);
		
		context.beginPath();
		context.fillStyle = "#FF0000";
		context.arc(sun.position.getX(), sun.position.getY(), 20, 0, Math.PI*2, false);
		context.fill();

		context.beginPath();
		context.fillStyle = "#0000FF";
		context.arc(planet.position.getX(), planet.position.getY(), 5, 0, Math.PI*2, false);
		context.fill();

		requestAnimationFrame(update);
	}
};