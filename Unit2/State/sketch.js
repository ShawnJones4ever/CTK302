let state=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state){
    case 0:
      background("red")
      text("state 0",100, 100);
      break;

case 1:
      background("red")
      text("state 0",100, 100);
      break;

  case 2:
      background("red")
      text("state 0",100, 100);
      break;

    case 3:
      background("blue")
      text("state 0",100, 100);
      break;

      case 4:
      background("black")
      text("state 0",100, 100);
      break;
  }
}
function mouseReleased(){
  state++ ;
  if (state > 2){
   state = 0 ;
  }
}
