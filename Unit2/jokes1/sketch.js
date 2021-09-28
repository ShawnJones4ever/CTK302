let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
      background('grey')
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
