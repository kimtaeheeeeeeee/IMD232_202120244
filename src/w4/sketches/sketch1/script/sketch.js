let moverA;
let moverB;
let gravity;
let wind;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  moverA = new Mover(width / 3, 30, 10);
  moverB = new Mover((2 * width) / 3, 30, 2);
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);
}

function draw() {
  background(255);

  let gravityA = p5.Vector.mult(gravity, moverA.mass);
  moverA.applyForce(gravityA);
  let gravityB = p5.Vector.mult(gravity, moverB.mass);
  moverB.applyForce(gravityB);

  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.update();
  moverB.update();

  moverA.checkEdges();
  moverB.checkEdges();

  moverA.display();
  moverB.display();

  if (showVector) {
    moverA.displayVectors();
    moverB.displayVectors();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}

class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.velocityVisualization = createVector(0, 0);
    this.accelerationVisualization = createVector(0, 0);
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acceleration.add(forceDividedByMass);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.velocityVisualization.set(this.velocity);
    this.velocityVisualization.mult(10);

    this.accelerationVisualization.set(this.acceleration);
    this.accelerationVisualization.mult(100);

    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.position.x, this.position.y, 2 * this.mass ** (1 / 2) * 8);
  }

  displayVectors() {
    noFill();
    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocityVisualization.x,
      this.position.y + this.velocityVisualization.y
    );
    stroke('blue');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.accelerationVisualization.x,
      this.position.y + this.accelerationVisualization.y
    );
  }

  checkEdges() {
    if (this.position.x > width - 1) {
      this.position.x -= width - 1;
      this.position.x *= -1;
      this.position.x += width - 1;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.position.x -= 0;
      this.position.x *= -1;
      this.position.x += 0;
      this.velocity.x *= -1;
    }
    if (this.position.y > height - 1) {
      this.position.y -= height - 1;
      this.position.y *= -1;
      this.position.y += height - 1;
      this.velocity.y *= -1;
    }
  }
}
