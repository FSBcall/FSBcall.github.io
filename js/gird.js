var sizeX = 100 * coeff, sizeY = 100 * coeff;

var drawGird = function () {
	var x = width / sizeX,
		y = height / sizeY;
	OOP.forXY(x, y, function (x,y) {
		brush.drawRectS({
			x : (sizeX + 2) * x,
			y : (sizeY + 2) * y,
			fillColor : '#f6f8f2',
			w : sizeX, h : sizeY
		});
	});
};
