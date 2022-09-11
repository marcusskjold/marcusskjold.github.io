var scl = 20
var sizex = 30;
var sizey = 30;
var player;
var target;

// theCanvas.onkeydown = function (e) {
//       if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
//           e.view.event.preventDefault();
//       }

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var keyCode = evt.keyCode;
    if (keyCode >= 37 && keyCode <= 40) {
        return false;
    }
};

function setup() {
  createCanvas(scl*sizex, scl*sizey);
  player = new Snake();
  target = new Food();
  target.pickLocation();
  frameRate(10);
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.setDir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    player.setDir(0,1);
  } else if (keyCode === LEFT_ARROW) {
    player.setDir(-1,0);
  } else if (keyCode === RIGHT_ARROW) {
    player.setDir(1,0);
  }
}

function draw() {
  background(28);
  if (player.eat(target)) {
    target.pickLocation();
  }
  player.update();
  player.show();
  target.show();
  
}
