var myState = 0;
var timer = 0;
// image declarations
var FUN;
var NO;
var omg;
var Dontgetmad;
var scary;
var source;
var stop;
var YOU;
var DONTOUCHME;
var helpme
//asorted
let x = 520;
let y = 480;
let xspeed = 10;
let yspeed = 4;
let r = 150;

function setup() {

  createCanvas(800, 800);
  DONTOUCHME = loadImage("assets/DONTOUCHME.jpg")
  scary = loadImage("assets/scary.gif")
  omg = loadImage("assets/omg.gif")
  source = loadImage("assets/source.gif")
  YOU = loadImage("assets/YOU.gif")
  NO = loadImage("assets/NO.gif")
  Dontgetmad = loadImage("assets/Dontgetmad.gif")
  FUN = loadImage("assets/FUN.gif")
  Stop = loadImage("assets/Stop.gif")
  helpme = loadImage("assets/helpme.jpg")
  //mic = new p5.AudioIn();
  //mic.start();
}

function draw() {

  switch (myState) {
    case 0:
      image(DONTOUCHME, 0, 0, 800, 800);
      text("THE NEXT PAGE IS SCARY, SO DONT TOUCH THAT MOUSE AT ALL", 100, 100);
      textSize(20);
      timer++;
      if (timer > 200) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      image(scary, 0, 0, 800, 800);
      //background('green');
      text("WHAT THE........", 100, 100);
      textSize(20);
      textColor(white);
      //image(test, 0, 0, 800, 800);
      timer++;
      if (timer > 200) {
        myState = 2;
        timer = 0;
      }
      break;

    case 2:
      image(omg, 0, 0, 800, 800);
      text("Please, Dont Do that again, for my sake", 100, 100);
      textSize(20);
      textColor(white);
      timer++;
      if (timer > 200) {
        myState = 3;
        timer = 0;
      }
      break;

    case 3:
      image(scary, 0, 0, 800, 800);
      text("ahhhhhhhhhhhh.", 100, 100);
      textSize(20);
      textColor(white);
      timer++;
      if (timer > 400) {
        myState = 4;
        timer = 0;
      }
      break;

    case 4:
      image(Stop, 0, 0, 800, 800);
      text("ARE YOU NOT READING THIS, I said DONT CLICK THE MOUSE....", 100, 100);
      textColor(white);
      textSize(20);
      timer++;
      if (timer > 200) {
        myState = 5;
        timer = 0;
      }
      break;

    case 5:
      image(helpme, 0, 0, 800, 800);
      text("WHAT THE F....K!?!?!?!", 100, 100);
      textColor(white);
      textSize(20);
      timer++;
      if (timer > 200) {
        myState = 6;
        timer = 0;
      }
      break;

    case 6:
      image(source, 0, 0, 800, 800);
      text("Alright CATCH THESE HANDS....", 100, 100);
      textColor(white);
      textSize(20);
      break;

  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 6) {
    myState = 0;
  }
}
