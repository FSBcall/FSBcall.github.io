var pjs = new PointJS('2D', 1280 / 2, 720 / 2);

pjs.system.initFullPage(); // for Full Page mode

var bgColor = '#515151'

var vector = pjs.vector;
var size   = pjs.size;
var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Object's manager
var math   = pjs.math;           // More Math-methods
var levels = pjs.levels;         // Levels manager

//CONTROL

var touch = pjs.touchControl.initTouchControl();
var key   = pjs.keyControl.initKeyControl();
var mouse = pjs.mouseControl.initMouseControl();


var width  = game.getWH().w; // width of scene viewport
var height = game.getWH().h; // height of scene viewport

var coeff = height / 4500; // coefficient for different srceen size 
var score = 0;

var dt = 1;