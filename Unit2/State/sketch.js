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
      background("blue")
      text("state 1",100, 100);
      break;

  case 2:
      background("yellow")
      text("state 2",100, 100);
      break;

    case 3:
      background("blue")
      text("state 3",100, 100);
      break;

      case 4:
      background("purple")
      text("state 4",100, 100);
      break;
  }
}
function mouseReleased(){
  state++ ;
  if (state > 4){
   state = 0 ;
  }
}
