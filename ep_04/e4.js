window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	var centerX = width/2,
		centerY = height/2,
		radius = 100,
		x_radius = 150,
		y_radius = 300,
		angle = 0,
		x_angle = 0,
		y_angle = 0,
		x_speed = 0.1,
		y_speed = 0.131;

	//render();
	render2();

	function render() {
		var x = x_radius * Math.cos(x_angle) + centerX;
		var y = y_radius * Math.sin(y_angle) + centerY;
		
		context.clearRect(0,0,width,height);
		context.beginPath();
		context.arc(x,y,10,0,Math.PI*2,false);
		context.fill();

		x_angle += x_speed;
		y_angle += y_speed;
		requestAnimationFrame(render);
	}

	function render2() {
		
		
		context.clearRect(0,0,width,height);		

		for(var i = 1; i <= 10; i += 1) {
			var x = radius * Math.cos(angle) + centerX;
			var y = radius * Math.sin(angle) + centerY;
			context.beginPath();
			context.arc(x,y,10*i/2,0,Math.PI*2,false);
			context.fill();
			angle += Math.PI * 2/10;
		};
	}

};