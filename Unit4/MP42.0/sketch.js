let state = 0;
let chicken;

function setup() {
  createCanvas(500, 500);
chicken = loadImage("assets/chicken.jpg");

function draw() {

  switch (state) {

    case 0:
      background('blue')
      image(chicken, 0, 0, 500, 500);
      text("I went out dressed like a chicken last night and I met a girl who was dressed like an egg.One thing led to another and the lifelong question was answered:", width / 2, height / 2, 200, 200);
      break;

    case 1:
      background('yellow');
      text("it was the chicken.", width / 2, height / 2);
      break;
  }



}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}
