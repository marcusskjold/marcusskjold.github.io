var canvas; 
var canvasX;
var canvasY;
const snowflakes = [];
const ground = [];

const minSpeed = 1;
const maxSpeed = 5;


function setup() {
  canvasX = document.body.scrollHeight + 300;
  canvasY = document.body.scrollWidth + 300;
  canvas = createCanvas(canvasY, canvasX);
  canvas.position(0, 0);
  canvas.style('z-index', '-10')
  canvas.style('position', 'fixed')

  noSmooth();
  stroke(255);
  fill(255);

  for(let i = 0; i < 100; i++){
    snowflakes.push(createVector(
      random(width), random(height),
      random(minSpeed, maxSpeed)));
  }

  for(let x = 0; x < width; x++) {
    ground[x] = height;
  }
}


function draw() {
  resizeCanvas(canvasY, canvasX);
  background(0, 0, 32);

  for(const snowflake of snowflakes) {
    snowflake.y += snowflake.z;

    rect(snowflake.x, snowflake.y, 1, 1);

    if(snowflake.y >= ground[floor(snowflake.x)]) {
      ground[floor(snowflake.x)]--;

      snowflake.x = random(width);
      snowflake.y = 0;
    }
  }

  // for(let x = 0; x < width; x++) {
  //   rect(x, ground[x], 1, height - ground[x]);
  // }
}

function mousePressed() {
  snowflakes.push(createVector(mouseX, mouseY,
                               random(minSpeed, maxSpeed)));
}

function mouseDragged() {
  snowflakes.push(createVector(mouseX, mouseY,
                               random(minSpeed, maxSpeed)));
}
  


