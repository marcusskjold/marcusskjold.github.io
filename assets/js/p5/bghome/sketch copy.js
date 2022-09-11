var canvas; 
var canvasX;
var canvasY;

function setup() {
  canvasX = document.body.scrollHeight + 1000;
  canvasY = document.body.scrollWidth + 1000;
  canvas = createCanvas(canvasY, canvasX);
  canvas.position(0, 0);
  canvas.style('z-index', '-10')
  canvas.style('position', 'fixed')
}

function draw() {
  resizeCanvas(canvasY, canvasX);
  background(220);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
}