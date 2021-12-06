let state = 0;
var chick;

function setup() {

  createCanvas(500, 500);

chick = loadImage("assets/chicken.jpg");
rectMode(CENTER);
ellipseMode(CENTER);
imageMode(CENTER);

function draw() {

  switch (state) {

    case 0:
      background('blue')
      image(chick,width/2, height/2, width, height);
      textSize(100);
      textAlign(CENTER);
      text("I went out dressed like a chicken last night and I met a girl who was dressed like an egg.One thing led to another and the lifelong question was answered:", width / 2, height / 2, 200, 200);
      break;

    case 1:
      background('yellow');
      image(chick, width/2, height/2, width, height);
      textSize(100);
      textAlign(CENTER);
      text("it was the chicken.", width / 2, height / 2);
      break;
  }



}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}
