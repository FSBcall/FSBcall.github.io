var blocks = [];

dy2 = false;

var createBlocks = function () {
	
	dy2 === false ? dy2 = height - 60 * coeff * 4 : dy2 = blocks[blocks.length - 1].y - 300 * coeff - math.random(400 * coeff, 800 * coeff)

	blocks.push(game.newImageObject({
		w : 280 * coeff * 1.8, h : 170 * coeff * 1.8,
		x : math.random(0, width - 200 * coeff * 2),
		y : dy2,

		file : 'img/block.png'
	}))	
};


var createLevel = function (count) {
	OOP.forInt(count, function () {
		createBlocks();
	});
	oldBlock = blocks[blocks.length - 1];
};

var newBlocks = function (element) {
	var x = math.random(0 , width - 200 * coeff * 2),
		y = oldBlock.y - 500 * coeff - math.random(400 * coeff, 800 * coeff);
	element.setPosition(point(x,y));
	oldBlock = element;
};


var drawLevel = function () {
	OOP.forArr(blocks, function (element) {

		if (camera.getPosition().y + height + 2000 * coeff < element.y ) {
			newBlocks(element);
		}

		element.draw();

			if ( pl.isStaticIntersect(element.getStaticBox()) && dy > 0 ) {
				if (pl.y + pl.h < element.y + element.h / 3) {	
					dy = -50 * dt * coeff;
				};
			};
	});
}