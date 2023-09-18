function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  // 루프로 인해 아래서 적용한 설정이 타고 넘어오는 것을 방지하기 위해 초기화함
  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);

  ellipse(100, 100, 50, 50);
  rect(100, 100, 50, 50);
  ellipse(200, 100, 50, 25);
  rect(200, 100, 25, 50);

  rectMode(CENTER);
  rect(300, 100, 50, 50);
  ellipse(300, 100, 50, 50);
  rect(400, 100, 50, 25);
  ellipse(400, 100, 25, 50);

  fill(255, 127, 0);
  ellipse(100, 200, 50);
  fill('#00EE40');
  circle(200, 200, 50);
  colorMode(HSL);
  fill(200, 100, 50);
  rect(300, 200, 50);
  noStrock();
  square(400, 200, 50);

  rect(100, 300, 50, 50, 10);
  rect(100, 300, 50, 50, 5, 10, 15, 20);

  stroke(0);
  line(100, 400, 150, 450);
}
