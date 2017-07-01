var pl = game.newImageObject({
	x : 0, y : 0,
	w : 495 * coeff, h : 439 * coeff,
	file : 'img/pl.png'
});

var dy = 2 * coeff;
var dyMax = 30 * coeff;
var dx = 0;

var drawPlayer = function () {
	
	if (pl.y < score) {
		score = Math.ceil(pl.y)
	}

	pl.draw();
	pl.move(point(0,dy*dt));
	dy += dy < dyMax ? coeff : 0;

	// CODES

		if (key.isPress('K')){
			log('code reading started');
			window.perm = true;
		};

		if (window.perm == true && key.isPress('I')) {
			dt = 2;
			log('Power bonus activated');
			log('power x' + dt)
		};

		if (window.perm == true && key.isPress('P')) {
			dt = 4;
			log('Power bonus activated');
			log('power x' + dt)
		};

		if (window.perm == true && key.isPress('L')) {
			dt = 8;
			log('Power bonus activated');
			log('power x' + dt)
		};

		if (window.perm == true && key.isPress('O')) {
			dt = 1;
			log('Power bonus activated');
			log('power x' + dt)
		};


	//CONTROL
		
	if (pl.x > width) {
		pl.x = -pl.w;
	};
	
	if (pl.x + pl.w < 0) {
		pl.x = width;
	};

		//KEY CONTROL

	if (key.isDown('D') || key.isDown('RIGHT')) {
		dx = 40 * coeff;
		pl.move(point(dx, 0));
	}

	if (key.isDown('A') || key.isDown('LEFT')) {
		dx = -40 * coeff;
		pl.move(point(dx, 0));
	}


		//MOUSE CONTROL


		//TOUCH CONTROL

	if (touch.isDown()) {
		touch.getPositionS().x > width / 2 ? dx = 40 * coeff : dx = -40 * coeff;
		pl.move(point(dx, 0));
	}


	// DEATH

	if (pl.getPositionS().y > 0) {
	}

	// CAMERA ALWAYS ON PLAYER

	camera.moveTimeC(vector.pointPlus(point(width/2, pl.getPositionC().y), point(0, -500 * coeff)), 10)

}