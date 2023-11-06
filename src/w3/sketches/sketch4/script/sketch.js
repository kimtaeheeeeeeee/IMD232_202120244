let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  infiniteEdge();
  update();
  display();
}

function display() {
  ellipse(pos.x, pos.y, radius);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
}
