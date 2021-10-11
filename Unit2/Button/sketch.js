Button code for a button that is on the bottom of the screen!
let state = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER) ;
}

function draw() {

  background(100);
  fill(255) ;
  text(mouseX + ", " + mouseY, 50, 50) ;

  switch (state) {

    case 0:
      text("0", 300, 100);
      break;

    case 1:
      text("1", 300, 100);
      break;

    case 2:
      text("2", 300, 100);
      break;

  }

  fill('red');
  rect(width/2, height-75, 100, 50);

}

function mouseReleased() {
  if ((mouseX > width/2-50) && (mouseX < width/2+50) && (mouseY > height-75) && (mouseY < height-25)) {

  state++;

    if (state > 2) state = 0;
  }

}
