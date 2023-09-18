let pos;
let vel;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
  console.log(pos);
  console.log(vel);
}

function draw() {
  background(255);
  pos.add(vel);
  if (pos.x < 0 || pos.x > width) {
    vel.x *= -1;
  }
  if (pos.y < 0 || pos.y > width) {
    vel.x *= -1;
  }
  ellipse(pos.x, pos.y, 50);
}
