const bodies = [];
const bodyNum = 30;
const G = 1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  init();
  background(255);
}

function draw() {
  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0 + 1; j < bodies.length; j++) {
      if (i !== j) {
      }
    }
  }
  bodies.forEach((each) => {});
  background(255);
  bodies.forEach((each) => {});
}

function mousePressed() {
  init();
}

function init() {}

class Body {
  constructor(x, y, mass) {
    this.pos;
    this.vel;
    this.acc;
    this.mass;
    this.rad;
  }

  attract(body) {
    const force = p5.Vector.sub(this.pos, body.pos);

    return force;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    fill(0, 127);
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }
}
