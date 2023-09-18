function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
}

function draw() {
  background(255);
  circle(mouseX, mouseY, 50);
}
