window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	var centerY = height * 0.5,
		centerX1 = width * 0.25,
		centerX2 = width * 0.5,
		centerX3 = width * 0.75,
		speed = 0.01,
		offset = height *.3,
		baseRadius = 30,
		angle = 0;

	//render1();
	//render2();
	render3();

	function render1() {
		var y = centerY + Math.sin(angle)*offset;
		context.clearRect(0,0,width,height);
		context.beginPath();
		context.arc(centerX1,y, 50, 0, Math.PI*2, false);
		context.fill();
		angle += speed;
		requestAnimationFrame(render1);
	}

	function render2() {
		var radius = baseRadius + Math.sin(angle)*20;
		context.clearRect(0,0,width,height);
		context.beginPath();
		context.arc(centerX2, centerY, radius, 0, Math.PI*2, false);
		context.fill();
		angle += speed;
		requestAnimationFrame(render2);
	}

	function render3() {
		var alpha = 0.5 + Math.sin(angle)*0.5;
		context.fillStyle = "rgba(0,0,0," + alpha +")";
		context.clearRect(0,0,width,height);
		context.beginPath();
		context.arc(centerX3, centerY, 100, 0, Math.PI*2, false);
		context.fill();
		angle += speed;
		requestAnimationFrame(render3);
	}
};